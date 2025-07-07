import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Applyjob from "./pages/Applyjob.jsx";
import Applications from "./pages/Applications.jsx";
import { RecuiterLogin } from "./components/RecuiterLogin.jsx";
import { AppContext } from "./context/AppContext.jsx";
import { AddJob } from "./pages/AddJob.jsx";
import { ManageJobs } from "./pages/ManageJobs.jsx"; // ✅ add this import
import { ViewApplications } from "./pages/ViewApplications.jsx"; // ✅ add this import
import { Dashboard } from "./pages/Dashboard.jsx"; 
import "quill/dist/quill.snow.css"; 
const App = () => {
  const { showRecuiterLogin } = useContext(AppContext);

  return (
    <div>
      {showRecuiterLogin && <RecuiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
