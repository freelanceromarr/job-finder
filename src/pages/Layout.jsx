import Header from "../componets/Header";
import AddNewJob from "../componets/left side/AddNewJob";
import Filter from "../componets/left side/Filter";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Edit from "./Edit";
import NewJob from "./NewJob";
import Home from "./Home";

const Layout = () => {
  return (
    <Router>
      <div>
        <Header />
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
          <div class="sidebar">
            <nav>
              <ul class="space-y-4">
                <Filter />
                <AddNewJob />
              </ul>
            </nav>
          </div>
          <div class="lg:pl-[14rem]  mt-[5.8125rem]">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/job/edit/:jobId" element={<Edit/>} />
                <Route path="/job/add" element={<NewJob/>} />
            </Routes>
           
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
