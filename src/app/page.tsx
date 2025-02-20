import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-slate-600 pt-32 pb-32">
        <Hero />
      </div>
      <div className="bg-indigo-500 pt-32 pb-32">
        <Projects />
      </div>
      <div className="bg-indigo-900 pt-16 pb-16">
        <Footer />
      </div>
    </div>
  );
}
