import React from "react";
import SSC from './eze.webp';
import SASTRA from './SASTRA.png';


export interface MovingCardProps {
  tag: string;
  award: string;
  year: any;
  provider: any;
}


export default function MovingCard() {
  const MovingCard = (param: MovingCardProps) => {
    return (
      <div
        className={`card-container shadow-lg max-w-sm min-w-sm rounded-b-md rounded-t-md scrollBg transform rotate-12`}
      >
        <div className="top-text p-8">
          <div className="icon-quotes">
            <svg
              width="45"
              height="36"
              className="mb-5 fill-current text-neutral-500 dark:text-gray-300"
            >
              <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
            </svg>
          </div>
          <div className="container-text max-w-sm">
            <p className="dark:text-gray-300 text-gray-600 text-md py-2">
               {param.tag}
            </p>
          </div>
        </div>
        <div className="footer-container flex flex-row flex-nowrap justify-between min-w-sm max-w-sm bg-gradient-to-r from-white-400 dark:from-neutral-700 from-50% to-transparent py-3 px-5 rounded-b-lg">
          <div className="avatar-container">
            <div className="footer-img flex flex-row flex-nowrap">
              <img
                src={param.provider.src}
                height={40}
                width={40}
                className="rounded-sm"
              />
              <div className="footer-text flex flex-col flex-nowrap">
                <p className="text-neutral-900 dark:text-gray-100 font-bold ml-6">{param.award}</p>
                <p className="text-neutral-700 dark:text-gray-200 ml-6">{param.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-none space-x-8 pt-8 justify-center items-center">
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