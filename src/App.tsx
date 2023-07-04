import React from "react"
import Header from './components/shared/Header';
import Home from "./components/Home/Home";
import Footer from "./components/shared/Footer";

function App() {

  return (
    <>
    <nav>
      <div className="min-h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    </nav>
    </>
  )
}

export default App
