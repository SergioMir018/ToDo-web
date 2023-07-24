import { useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Register/Profile";
import SingUp from "./components/Register/SingUp";
import LogIn from "./components/Register/LogIn";

function App() {
  return (
    <>
      <main className="relative">
        <Router>
          <div className="min-h-screen overflow-y-hidden">
            <Routes>
              <Route path="/ToDo-web/*" element={<HeaderFooterController />}>
                <Route index element={<Home />} />
                <Route path="sing-up" element={<SingUp />} />
                <Route path="log-in" element={<LogIn />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </main>
    </>
  );

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
}

export default App;
