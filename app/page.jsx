import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative lg:flex lg:justify-center">
        <div className="px-6 lg:px-20 w-full xl:px-35">
        <About />
        <Mission />
        <Services />
        <Portfolio />
      </div>
      </div>
      <Footer />
    </main>
  );
}
