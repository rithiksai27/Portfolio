"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Grades from "@/components/Grades";
import Profiles from "@/components/Profiles";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNav";
import {cn} from "@/utils/cn"
import { Certification } from "@/components/Certification";
import {Achievements} from "../components/Achievements"
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grades />
        <Profiles />
        <RecentProjects />
        <Certification />
        <Achievements />
        <About />
        <Footer />
      </div>
    </main>
  );
};

export default Home;