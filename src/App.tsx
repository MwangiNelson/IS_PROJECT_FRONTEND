import { ToastContainer } from "react-toastify";
import Navigation from "./modules/Navigation";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./recyclables/Navbar";
import Footer from "./recyclables/Footer";

function App() {
  return (
    <section className="relative bg-cream block items-center h-fit lg:h-screen justify-between">
      <Navbar />
      <ToastContainer />
      <Navigation />
      <Footer />
    </section>
  );
}

export default App;
