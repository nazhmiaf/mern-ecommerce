import React from "react";
import { Outlet, useNavigation} from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BottomNav from "../components/ButtomNav";
import Loading from "../components/Loading";

const PublicLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === 'loading'

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        {/* <Header /> */}
        <Nav />
      </div>
      <div className="sm:pt-14 pt-14">
        {loading ? <Loading /> : <Outlet />}
      </div>
      <BottomNav />
      <Footer />
    </>
  );
};

export default PublicLayout;
