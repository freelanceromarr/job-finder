
import JobList from "../componets/main/Joblist";
import Search from "../componets/main/header/Search";
import Sorting from "../componets/main/header/Sorting";

const Home = () => {
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

        <JobList />
      </main>
    </div>
  );
};

export default Home;
