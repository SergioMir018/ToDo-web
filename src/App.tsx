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
import Register from "./components/Register/Register";
import SingIn from "./components/Register/SingIn";
import Profile from "./components/Register/Profile";

function App() {
  return (
    <>
      <main className="relative">
        <Router>
          <div className="min-h-screen overflow-y-hidden">
            <Routes>
              <Route path="/ToDo-web/*" element={<HeaderFooterController />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="sing-in" element={<SingIn />} />
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
        location.pathname.includes("/register") ||
        location.pathname.includes("/sing-in");
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
