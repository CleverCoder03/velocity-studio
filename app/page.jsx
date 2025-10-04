import About from "./components/About";
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
      <section className="h-dvh"></section>
    </main>
  );
}
