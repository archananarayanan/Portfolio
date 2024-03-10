import React from "react";
import SSC from './eze.webp';
import SASTRA from './SASTRA.png';
import { useMediaQuery } from "react-responsive";
import { RiDoubleQuotesL } from "react-icons/ri";


export interface MovingCardProps {
  tag: string;
  award: string;
  year: any;
  provider: any;
}


export default function MovingCard() {
  const isMinScreen = useMediaQuery({ query: '(max-width: 400px)' })
  const isMinScreen2 = useMediaQuery({ query: '(max-width: 600px)' })
  
  const MovingCard = (param: MovingCardProps) => {
    return (
      <div
        className={`card-container shadow-lg text-ellipsis rounded-b-md rounded-t-md scrollBg transform rotate-180`}
      >
        <div className="top-text md:p-8 p-3">
          <div className="icon-quotes">
            <RiDoubleQuotesL className="text-gray-600 dark:text-slate-200  ContactIcons" />
          </div>
          <div className="container-text text-ellipsis">
            <p className="dark:text-gray-300 text-gray-600 text-xs md:text-md py-1 md:py-2">
               {param.tag}
            </p>
          </div>
        </div>
        <div className="footer-container flex flex-row flex-nowrap justify-between bg-gradient-to-r from-white-400 dark:from-neutral-700 from-50% to-transparent md:py-3 md:px-5 py-1 px-2 rounded-b-lg">
          <div className="avatar-container">
            <div className="footer-img flex flex-row flex-nowrap">
              <img
                src={param.provider.src}
                height={(isMinScreen || isMinScreen2) ? 20 : 40}
                width={(isMinScreen || isMinScreen2) ? 20 : 40}
                className="rounded-sm"
              />
              <div className="footer-text flex flex-col flex-nowrap">
                <p className="text-neutral-900 dark:text-gray-100 font-bold ml-3 text-xs md:text-sm md:ml-6">{param.award}</p>
                <p className="text-neutral-700 dark:text-gray-200 ml-3 text-xs md:text-sm md:ml-6">{param.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-2 pt-8 min-w-full overflow-hidden justify-center items-center">
      <div className="flex flex-none">
        <MovingCard provider={SSC} tag="Up and Coming Software Engineer with extra-ordinary potential, eluding confidence and caliber." award="Employee of the Year" year="2022"  />
      </div>
      <div className="flex flex-none">
        <MovingCard provider={SSC} tag="Contributed across teams when talent was in demand, credible efforts and reliability" award="SPOT Award" year="2022" />
      </div>
      <div className="flex flex-none">
        <MovingCard provider={SSC} tag="Quick on feet, In-depth product knowledge and Technical Expertise" award="SPOT Award" year="2020"/>
      </div>
      <div className="flex flex-none">
        <MovingCard provider={SASTRA} tag="Biometric Template Protection - Speech and Image" award="Best Research Paper - Nominee" year="2019" />
      </div>
      <div className="flex flex-none">
        <MovingCard provider={SASTRA} tag="Ranked among Top 50 Computer Science Engineers of the University" award="Top 50" year="2015, 2017" />
      </div>
    </div>
  );
}