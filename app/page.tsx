import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Works from "@/components/sections/works";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8 ">
      <Navbar />
      <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">
        <Sidebar />
        <div className="md:min-w-[65vh] min-w-full space-y-10">
          <Hero />
          <Projects />
          <Works />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
