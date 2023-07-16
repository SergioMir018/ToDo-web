import Header from './components/shared/Header';
import Home from "./components/Home/Home";
import Footer from "./components/shared/Footer";

function App() {

  return (
    <>
      <main className="relative">
        <div className="min-h-screen overflow-y-hidden">
          <Header />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App