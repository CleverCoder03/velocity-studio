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
      <div className="px-6">
        <About />
        <Mission />
        <Services />
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
