import React from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
  useLocation
} from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Register/Profile";
import SingUp from "./components/Register/SingUp";
import LogIn from "./components/Register/LogIn";
import ToDo from "./components/ToDo/ToDo";
import './index.css'

function HeaderFooterController() {
    const location = useLocation();
    const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

    useEffect(() => {
      const isRegisterOrSignInRoute =
        location.pathname.includes("/sing-up") ||
        location.pathname.includes("/log-in");
      setHideHeaderFooter(isRegisterOrSignInRoute);
    }, [location]);

    return (
      <>
        {!hideHeaderFooter && <Header />}
        <Outlet />
        {!hideHeaderFooter && <Footer />}
      </>
    );
  }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <main className="overflow-x-hidden overflow-y-hidden">
        <Router>
          <Routes>
            <Route path="/ToDo-web/*" element={<HeaderFooterController />}>
              <Route index element={<Home />} />
              <Route path="sing-up" element={<SingUp />} />
              <Route path="log-in" element={<LogIn />} />
              <Route path="profile" element={<Profile />} />
              <Route path="to-do" element={<ToDo />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  </React.StrictMode>
);
