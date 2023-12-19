import { Link } from "react-router-dom";

const AddNewJob = () => {
    return ( <div>
        <li>
                        <a href="/jobs" class="main-menu" id="lws-addJob-menu">
                            <i class="fa-solid fa-file-circle-plus"></i>
                            <span> <Link to={'/job/add'} > Add NewJob </Link> </span>
                        </a>
                    </li>
    </div> );
}
 
export default AddNewJob;