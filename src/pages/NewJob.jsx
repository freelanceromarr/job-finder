import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJobs } from "../features/jobs/jobSlice";
import { useNavigate } from "react-router-dom";

const NewJob = () => {
  const [input, setInput] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //submit form
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addJobs(input))
    navigate("/")

  }
  return (
    <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>
      <div class="max-w-3xl mx-auto">
        <form class="space-y-6" onSubmit={formHandler}>
          <div class="fieldContainer">
            <label
              for="lws-JobTitle"
              class="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              id="lws-JobTitle"
              name="lwsJobTitle"
              required
            >
              <option value="" hidden selected>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div class="fieldContainer">
            <label for="lws-JobType">Job Type</label>
            <select
              onChange={(e) => setInput({ ...input, type: e.target.value })}
              id="lws-JobType"
              name="lwsJobType"
              required
            >
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div class="fieldContainer">
            <label for="lws-JobSalary">Salary</label>
            <div class="flex border rounded-md shadow-sm border-slate-600">
              <span class="input-tag">BDT</span>
              <input
                onChange={(e) => setInput({ ...input, salary: e.target.value })}
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                class="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div class="fieldContainer">
            <label for="lws-JobDeadline">Deadline</label>
            <input
              onChange={(e) => setInput({ ...input, deadline: e.target.value })}
              type="date"
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
            />
          </div>

          <div class="text-right">
            <button
              type="submit"
              id="lws-submit"
              class="cursor-pointer btn btn-primary w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewJob;
