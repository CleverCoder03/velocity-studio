import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-6">
        <About />
        <Mission />
        <Services />
      </div>
      <Footer />
    </main>
  );
}
