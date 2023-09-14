import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Courses from "./Courses";
import axios from "axios";
import { useDispatch } from "react-redux";

function Home() {
  const [page, setPage] = useState("Home");

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/data").then((res) => {
      dispatch({ type: "ENROLMENT", payload: res.data.Latest_enrolments });

      dispatch({ type: "STUDENTS", payload: res.data.Best_students });

      dispatch({ type: "COURSE", payload: res.data.Course_list });
    });
  }, []);

  return (
    <div className="flex">
      <div>
        <Sidebar page={page} setPage={setPage} />
      </div>
      <div>{page === "Home" ? <Overview /> : <Courses />}</div>
    </div>
  );
}

export default Home;
