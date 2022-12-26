import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layout/footer/footer.component";
import Navbar from "./layout/navbar/navbar.component";
import NavbarContractor from "./layout/navbar/contractorNav";

import AddProperty from "./pages/add-property/addProperty.component";
import Home from "./pages/homepage/homepage.component";
// import Property from "./pages/single-property/property.component";
import store from "./store/store";
import AuthModal from "./components/modals/auth.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import AlertNotification from "./components/AlertNotification/alert.component";
import AdminLogin from "./pages/admin/admin-login.component";
import AdminDashboard from "./pages/admin/admin-dashboard.component";
import Search from "./pages/search/search.component";
import MyAccount from "./pages/my-account/my-account.component";
import Messenger from "./pages/messenger/messenger";
import Contractor from "./pages/contractor/contractor";
import AddGig from "./pages/addGig/addGig";
import MyGig from "./pages/myGig/myGig";
import Job from "./pages/job/job";
import FindContractor from "./pages/contractor/FindContractors";
import Detail from "./pages/contractor/Detail";
import MyJob from "./pages/myJobs/myJob";
import SeeJobs from "./pages/job/SeeJobs";
import DetailJob from "./pages/job/DetailJob";
import ViewPropertyPage from "./pages/ViewProperty/ViewPropertyPage";
import ViewProfilePage from "./pages/viewProfile_2/viewProfile";
import UpdateProfile from "./components/forms/update-profile.component";
function App() {
  // const currentlyLogged = localStorage.getItem("currentlyLogged");
  return (
    <Provider store={store}>
      <CssBaseline />
      {localStorage.getItem("user") == null ? <NavbarContractor /> : <Navbar />}

      <AuthModal />
      <AlertNotification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<ViewPropertyPage />} />
        <Route path="/user/:id" element={<ViewProfilePage />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/property/search" element={<Search />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/addGig" element={<AddGig />} />
        <Route path="/myGigs" element={<MyGig />} />
        <Route path="/addJob" element={<Job />} />
        <Route path="/lookForContractors" element={<FindContractor />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myJobs" element={<MyJob />} />
        <Route path="/findJob" element={<SeeJobs />} />
        <Route path="/detailJob" element={<DetailJob />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
