import { useEffect } from "react";
import JobList from "../componets/main/Joblist";
import Search from "../componets/main/header/Search";
import Sorting from "../componets/main/header/Sorting";
import {useDispatch, useSelector} from 'react-redux';
import { getJobs } from "../features/jobs/jobSlice";

const Home = () => {

  const dispatch = useDispatch();
  const {jobs, isLoading, isError} = useSelector(state=>state.jobs);
  const {filter, sorting} = useSelector(state=>state.filters);
  useEffect( ()=>{
    dispatch(getJobs())
  } ,[dispatch])
  const compareNumber = (a,b)=>{
    return a-b;
  }
  // content for rendeing under different conditions [laoding, completed, error] of state.
  let content = null;
  if (isLoading && !isError) {
    content = <div className="text-center">Loading...</div>
  }
  if (!isLoading && isError) {
    content = <div className="text-center">Something is wrong</div>
  }
  if (!isLoading && !isError && jobs.length === 0) {
    content = <div className="text-center">No Jobs Found</div>
  }
  if (!isLoading && !isError && jobs.length > 0) {
    content = jobs.filter(job=>{
      if (filter ==='all') {
        return job;
    }
      if (filter ==='internship') {
          return job.type === 'Internship';
      }
      if (filter ==='full-time') {
        return job.type === 'Full Time';
    }
    if (filter ==='remote') {
      return job.type === 'Remote';
  }
    }).sort((a,b)=>{
      if (sorting ==='lowToHigh') {
        return Number(a.salary) - Number(b.salary)
      }else if (sorting ==='highToLow') {
        return Number(b.salary) - Number(a.salary)
      }else {
        return a;
      }
    }).map(job => <JobList job={job} /> )
  }
  return (
    <div class="lg:pl-[14rem]  mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 class="lws-section-title">All Available Jobs</h1>
          <div class="flex gap-4">
            <Search />
            <Sorting />
          </div>
        </div>

       {content}
      </main>
    </div>
  );
};

export default Home;
