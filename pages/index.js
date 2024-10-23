import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative">
      {/* Background Gradient */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 absolute inset-0 z-[-1]"></div>

      {/* Text and Buttons */}
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10">
        {/* Title */}
        <motion.h5
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          ENGONGOMO <br /> EMMA<span className="text-accent">NUEL</span>
        </motion.h5>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
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

        {/* Buttons for different screen sizes */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn('down', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>

      {/* Image and Effects */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Background Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-x-0"></div>

        {/* Particles */}
        <ParticlesContainer id="particles" />

        {/* Avatar (if needed) */}
        {/* <Avatar /> */}
      </div>
    </div>
  );
};

export default Home;
