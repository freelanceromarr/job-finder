import { Link } from "react-router-dom";
import { filter } from "../../features/filters/filterSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <li
        onClick={() => dispatch(filter("all"))}
        class="main-menu menu-active"
        id="lws-alljobs-menu"
      >
        <i class="fa-solid fa-briefcase"></i>
        <span> All Available Jobs</span>
      </li>
      <ul class="space-y-6 lg:space-y-2 ">
        <li
          onClick={() => dispatch(filter("internship"))}
          class="sub-menu"
          href="#"
          id="lws-internship-menu"
        >
          <i class="fa-solid fa-stop !text-[#FF5757]"></i>
          Internship
        </li>
        <li
          onClick={() => dispatch(filter("full-time"))}
          class="sub-menu"
          href="/jobs/fulltime"
          id="lws-fulltime-menu"
        >
          <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
          Full Time
        </li>

        <li
          onClick={() => dispatch(filter("remote"))}
          class="sub-menu"
          href="/jobs/remote"
          id="lws-remote-menu"
        >
          <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
          Remote
        </li>
      </ul>
    </div>
  );
};

export default Filter;
