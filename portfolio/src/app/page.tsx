'use client';
import { ProjectsOverLayer, SlideOverLayer } from "@/components/Transitions";
import { Transition } from "@headlessui/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
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

  const useIsVisible = (ref: any) => {
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


  const imageRef = useRef(null);
  const image_visible = useIsVisible(imageRef);
  const proj_ref = useRef(null);
  const proj_visible = useIsVisible(proj_ref);
  const skills_ref = useRef(null);
  const skills_visible = useIsVisible(skills_ref);


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
                <FaFileDownload className="text-white cursor-pointer ContactIcons" onClick={downloadFile} />
                <a href="mailto:arcnaray@iu.edu" target="_blank" rel="noopener noreferrer">
                  <MdEmail className="cursor-pointer ContactIcons" /></a>
                <a href="https://www.linkedin.com/in/archana-narayanan-dev/" target="_blank" className="cursor-pointer" rel="noopener noreferrer"><FaLinkedin className="ContactIcons" /></a>
                <a href="https://github.com/archananarayanan" target="_blank" className="cursor-pointer" rel="noopener noreferrer"><FaGithub className="ContactIcons"/></a>
                <div className="md:pt-2 sm:pt-3 pt-1">
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
                    className="flex h-[30rem] w-[50rem] sm:h-[30rem] sm:w-[60rem] md:h-[40rem] md:w-full"
                    src={bitmoji.src}
                  />
              </SlideOverLayer>
            </Transition.Root>
          </div>
          <div className="flex">
              <div className="pt-24 max-w-[50rem] antialiased font-['Pt_Sans'] font-light text-slate-700 dark:text-white">
                  <p className="text-3xl sm:text-6xl sm:pb-2 md:text-9xl md:pb-4 pb-2">
                    about.
                  </p>
                  <p className="text-xl sm:text-4xl sm:pb-3 md:text-5xl md:pb-4 pb-2">
                    I&apos;m a <span><Role /></span>
                  </p>
                  <p className="text-xs sm:text-xl md:text-xl">
                  Software developer with a knack for engineering highly available systems. I&apos;m into everything tech and spend most of my time either working with a computer or in front of one. An Outdoorsy person with a stellar cave full of collectibles, got some moves and a compelling need to hit the gym. I learned english from binge watching F.R.I.E.N.D.S and Star Wars, so I can NOT BE mistaken and the force is always with me ! 
                  </p>
              </div>
          </div>
        </div>
        <div className="flex flex-row justify-center p-3 ßgap-2 border-b border-slate-300 shadow dark:border-slate-700">
          <div className="flex">
            <div className="absolute left-0">
                <div className="pt-2 max-w-[50rem] pl-20 antialiased font-['Pt_Sans'] font-light text-slate-700 dark:text-white">
                    <p className="text-2xl sm:text-4xl sm:pb-2 md:text-6xl md:pb-4  pb-2">
                      Projects
                    </p>
                </div>
              </div>
            </div>
            <div ref={proj_ref} className="pt-1 sm:pt-2 md:pt-4">
              <Transition.Root show={proj_visible}>
                <ProjectsOverLayer>
                  <Projects />
                </ProjectsOverLayer>
              </Transition.Root>
            </div>
        </div>
        <div className="flex flex-row place-content-between justify-center p-3 gap-2 border-b border-slate-300 shadow dark:border-slate-700">
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
                      <p className="text-2xl sm:text-4xl sm:pb-2 md:text-6xl md:pb-4  pb-2">
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
                    <p className="text-2xl sm:text-4xl sm:pb-2 md:text-6xl md:pb-4  pb-2">
                      Recognition
                    </p>
                </div>
              </div>
            </div>
            <div className="pt-10 max-w-full min-w-full">
                  <MovingCard />
            </div>
        </div>
      </main>
  );
}
