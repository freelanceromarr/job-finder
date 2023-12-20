import { useDispatch } from "react-redux";
import { sorting } from "../../../features/filters/filterSlice";

const Sorting = () => {
    const dispatch = useDispatch()
    return ( 
        <select onChange={(e)=>dispatch(sorting(e.target.value))} id="lws-sort" name="sort" autocomplete="sort" class="flex-1">
            <option value="default">Default</option>
            <option value="lowToHigh" >Salary (Low to High)</option>
            <option value="highToLow" >Salary (High to Low)</option>
        </select>
     );
}
 
export default Sorting;