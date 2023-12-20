import { useDispatch } from "react-redux";
import { search } from "../../../features/filters/filterSlice";

const Search = () => {
    const dispatch = useDispatch()
    return ( 
        <div class="search-field group flex-1">
                <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                <input onChange={e=>dispatch(search(e.target.value))} type="text" placeholder="Search Job" class="search-input" id="lws-searchJob"/>
            </div>
     );
}
 
export default Search;