import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
  FaPython,
  FaAngular,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'compétences',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <SiNextdotjs key="nextjs" />,
          <FaPhp key="php" />,
          <FaPython key="python" />,
          <FaWordpress key="wordpress" />,
          <FaAngular key="Angular" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />, 
          // <SiAdobexd key="adobexd" />, 
          // <SiAdobephotoshop key="adobephotoshop" />
        ],
      },
    ],
  },
  {
    title: 'tâches',
    info: [
      {
        title: "Design de maquette a l'aide de figma et transformation de la maquette en projet contret ",
        stage: '2023 - 2024',
      },
      {
        title: "Creation de site internet responsive correspondant a la maquette fournis par l'equipe de design ",
        stage: '2022 - 2023',
      },
      {
        title: 'Creation et modification de theme wordpress',
        stage: '2021 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Caisier - E-leclec',
        stage: '2024 - 2024',
      },
      {
        title: 'Developpeur Front End  - Zenvint',
        stage: '2023 - 2024',
      },
      
      
      
      
    ],
  },
  {
    title: 'Formations ',
    info: [
      {
        title: 'Titre RNCP Lvel 6 en Chef De Projet Digital - Institut F2I',
        stage:'2024 - en cours ',
      },
      {
        title: 'Deuxieme Années en Developement Web et Mobile - ICT University',
        stage: '2022',
      },
      {
        title: 'GCE Advance Level - Golden Bilingual High School ',
        stage: '2021',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import Layout from '../../components/Layout';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from 'react-countup';

export function AboutSection() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-Y-scroll">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="h2"
          >
            Engongomo Emmanuel <span className="text-accent">developpeur </span> Full Stack.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
           Actuellement engagé dans une formation en chef de projet Digital a la Digital school of paris, je suis à la
recherche d'une opportunité d'apprentissage enrichissante, mettant à
profit mes compétences en développement web et mobile dans le
cadre de mon parcours en bac+4. Ma passion pour ce domaine m'a
conduit à acquérir une expertise variée en technologies de
développement web à travers mes expériences initiales, me
permettant ainsi de contribuer à des projets novateurs avec assurance
et créativité.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={15} /> + 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  années d&apos;expérience
                </div>
              </div>
              {/* client */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={5} /> + 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  clients satisfaits
                </div>
              </div> */}
              {/* finished project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={15} /> + 
                </div>
                <div className="text-xs uppercase tracking-[1px]  max-w-[100px]">
                  projets terminés
                </div>
              </div>
              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> + 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] justify-center"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <Layout>
      <AboutSection />
    </Layout>
  );
};

export default About;
