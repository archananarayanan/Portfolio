'use client';
import { ProjectsOverLayer, SlideOverLayer } from "@/components/Transitions";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Projects from "../app/projects";
import bitmoji from './bitmoji.png';
import ThemeSwitch from "@/components/ThemeSwitch";
import Skills from "./skills";
import MovingCard from "./recognition";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  const downloadFile = () => {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ArchanaNarayanan.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const useIsVisible = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }

  const about_ref = useRef();
  // const about_visible = useIsVisible(about_ref);
  const imageRef = useRef();
  const image_visible = useIsVisible(imageRef);
  const proj_ref = useRef();
  const proj_visible = useIsVisible(proj_ref);
  const skills_ref = useRef();
  const skills_visible = useIsVisible(skills_ref);
  const callbackRef = (node: HTMLDivElement) => {
    if(node) {
        node.focus();
    }
}

const Role = () => {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full-Stack Developer',
        1000,
        'Reliability Engineer',
        1000,
        'Infrastructure Enthusiast',
        1000,
        'BasketBall hobbyist',
        1000,
        'definite human.',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="inline-block font-['Pt_Sans']"
    />
  );
};

  return (
      <main className="flex min-h-screen flex-col dark:from-zinc-800 dark:from-50% dark:bg-gradient-to-br dark:via-purple-800/70 dark:via-80% dark:to-transparent from-zinc-200 from-50% bg-gradient-to-br to-blue-300/70 via-90% ">
        <nav className="bg-neutral-300 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute right-0">
              <div className="flex flex-row justify-between gap-4 px-2 pb-3 pt-2">
                <FaFileDownload size={35} className="text-white cursor-pointer" onClick={downloadFile} />
                <a href="mailto:arcnaray@iu.edu" target="_blank" rel="noopener noreferrer">
                  <MdEmail size={35} className="cursor-pointer" /></a>
                <a href="https://www.linkedin.com/in/archana-narayanan-dev/" target="_blank" className="cursor-pointer" rel="noopener noreferrer"><FaLinkedin size={35} /></a>
                <a href="https://github.com/archananarayanan" target="_blank" className="cursor-pointer" rel="noopener noreferrer"><FaGithub size={35} /></a>
                <div className="pt-2">
                <ThemeSwitch />
                </div>
              </div>
              </div>
              </div>
          </div>
        </nav>
        <div className="flex flex-row justify-center pb-46 gap-2 border-b border-slate-300 shadow dark:border-slate-700">
          <div ref={imageRef} >
            <Transition.Root show={image_visible}>
              <SlideOverLayer>
                <img
                    className="flex h-[40rem] w-full"
                    src={bitmoji.src}
                    alt="nature image"
                  />
              </SlideOverLayer>
            </Transition.Root>
          </div>
          <div className="flex">
              <div className="pt-24 max-w-[50rem] antialiased font-['Pt_Sans'] font-light text-slate-700 dark:text-white">
                  <p className="text-9xl pb-4">
                    about.
                  </p>
                  <p className="text-5xl pb-4">
                    I'm a <span><Role /></span>
                  </p>
                  <p className="text-xl">
                  Software developer with a knack for engineering highly available systems. I'm into everything tech and spend most of my time either working with on a computer or in front of one. An Outdoorsy person with a stellar cave- full of collectibles, got some moves and a compelling need to hit the gym. I learned english from binge watching F.R.I.E.N.D.S and Star Wars, so I can NOT BE mistaken and the force is always with me ! 
                  </p>
              </div>
          </div>
        </div>
        <div className="flex flex-row justify-center p-3 ßgap-2 border-b border-slate-300 shadow dark:border-slate-700">
          <div className="flex">
            <div className="absolute left-0">
                <div className="pt-2 max-w-[50rem] pl-20 antialiased font-['Pt_Sans'] font-light text-slate-700 dark:text-white">
                    <p className="text-6xl pb-4">
                      Projects
                    </p>
                </div>
              </div>
            </div>
            <div ref={proj_ref} className="pt-4">
              <Transition.Root show={proj_visible}>
                <ProjectsOverLayer>
                  <Projects />
                </ProjectsOverLayer>
              </Transition.Root>
            </div>
        </div>
        <div className="flex flex-row jplace-content-between justify-center p-3 gap-2 border-b border-slate-300 shadow dark:border-slate-700">
          <div ref={skills_ref} >
            <Transition.Root show={skills_visible}>
                <SlideOverLayer>
                  <Skills />
                </SlideOverLayer>
            </Transition.Root>
            </div>
            <div className="flex">
              <div className="absolute right-0">
                  <div className="pt-2 pr-20 max-w-[50rem] antialiased font-['Pt_Sans'] font-light text-slate-700 dark:text-white">
                      <p className="text-6xl pb-5">
                        Skills
                      </p>
                  </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center p-3 ßgap-2 border-b border-slate-300 shadow dark:border-slate-700">
          <div className="flex">
            <div className="absolute left-0">
                <div className="pt-2 max-w-[50rem] pl-20 antialiased font-['Pt_Sans'] font-light text-slate-700 dark:text-white">
                    <p className="text-6xl pb-4">
                      Recognition
                    </p>
                </div>
              </div>
            </div>
            <div className="pt-10">
                  <MovingCard />
            </div>
        </div>
      </main>
  );
}