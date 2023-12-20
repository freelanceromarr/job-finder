import { useDispatch, useSelector } from "react-redux";
import Header from "../componets/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editJob, getJob } from "../features/jobs/jobSlice";

const Edit = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  const { editData } = useSelector((state) => state.jobs);
  const navigate = useNavigate();
  const {
    title: editableTitle,
    type: editableType,
    salary: editableSalary,
    deadline: editableDeadline,
  } = editData;

  const [input, setInput] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  useEffect(() => {
    dispatch(getJob(jobId));
  }, [dispatch, jobId]);

  useEffect(() => {
    setInput({
      title: editableTitle,
      type: editableType,
      salary: editableSalary,
      deadline: editableDeadline,
    });
  }, [editableTitle, editableType, editableSalary, editableDeadline]);

  //update job data
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editJob({ jobId, input }));
    navigate("/");
  };
  return (
    <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

      <div class="max-w-3xl mx-auto">
        <form onSubmit={editHandler} class="space-y-6">
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
              <option value="" hidden>
                Select Job
              </option>
              <option
                selected={input.title === "Software Engineer" ? true : false}
              >
                Software Engineer
              </option>
              <option
                selected={input.title === "Software Developer" ? true : false}
              >
                Software Developer
              </option>
              <option
                selected={input.title === "Full Stack Developer" ? true : false}
              >
                Full Stack Developer
              </option>
              <option
                selected={input.title === "MERN Stack Developer" ? true : false}
              >
                MERN Stack Developer
              </option>
              <option
                selected={input.title === "DevOps Engineer" ? true : false}
              >
                DevOps Engineer
              </option>
              <option selected={input.title === "QA Engineer" ? true : false}>
                QA Engineer
              </option>
              <option
                selected={input.title === "Product Manager" ? true : false}
              >
                Product Manager
              </option>
              <option
                selected={input.title === "Social Media Manager" ? true : false}
              >
                Social Media Manager
              </option>
              <option
                selected={input.title === "Senior Executive" ? true : false}
              >
                Senior Executive
              </option>
              <option
                selected={input.title === "Junior Executive" ? true : false}
              >
                Junior Executive
              </option>
              <option
                selected={
                  input.title === "Android App Developer" ? true : false
                }
              >
                Android App Developer
              </option>
              <option>IOS App Developer</option>
              <option
                selected={input.title === "Frontend Developer" ? true : false}
              >
                Frontend Developer
              </option>
              <option
                selected={input.title === "Software Engineer" ? true : false}
              >
                Frontend Engineer
              </option>
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
              <option value="" hidden>
                Select Job Type
              </option>
              <option selected={input.type === "Full Time" ? true : false}>
                Full Time
              </option>
              <option selected={input.type === "Internship" ? true : false}>
                Internship
              </option>
              <option selected={input.type === "Remote" ? true : false}>
                Remote
              </option>
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
                value={input.salary}
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
              value={input.deadline}
            />
          </div>

          <div class="text-right">
            <button
              type="submit"
              id="lws-submit"
              class="cursor-pointer btn btn-primary w-fit"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Edit;
