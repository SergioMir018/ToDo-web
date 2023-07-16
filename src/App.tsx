import Header from './components/shared/Header';
import Footer from "./components/shared/Footer";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import SingIn from './components/Register/SingIn';
import Profile from './components/Register/Profile';

function App() {

  const routes = [
    { path: '/ToDo-web', element: <Home /> },
    { path: '/ToDo-web/register', element: <Register /> },
    { path: '/ToDo-web/sing-in', element: <SingIn /> },
    { path: '/ToDo-web/profile', element: <Profile /> }
  ];

  return (
    <>
      <main className="relative">
        <Router>
          <div className="min-h-screen overflow-y-hidden">
            <Header />
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
            <Footer />
          </div>
        </Router>
      </main>
    </>
  )
}

export default App