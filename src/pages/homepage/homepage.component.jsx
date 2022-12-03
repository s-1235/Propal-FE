// import axios from 'axios';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../layout/homepage/hero/hero.component";
import Rent from "../../layout/homepage/rent/rent.component";
import Sales from "../../layout/homepage/sales/sales.component";
import { authActions } from "../../store/slices/authSlice";
const Home = () => {
  console.log(localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  /////////////////////////////////////

  useEffect(() => {
    if (user) {
      console.log("boy", user.data);
      dispatch(authActions.localAuthenticate(user.data));
    }
  }, [user]);

  console.log("main  data ");
  return (
    <div className="">
      <Hero />
      <Sales />
      <Rent />
    </div>
  );
};

export default Home;
