import Image from 'next/image';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Jeu de morpion',
          path: '/morpion.png',
          live: 'https://jeu-morpion-demo.vercel.app/'
        },
        {
          title: 'Abidjan Bouge',
          path: '/AbidjanBouge.PNG',
          live: 'https://abidjanbouge.webtinix.com/'
        },
        {
          title: 'ADDED',
          path: '/added.PNG',
          live: 'https://dded.fr/'
        },
        {
          title: 'Courtix',
          path: '/Courtix.PNG',
          live: 'https://jpricher.com/fr/'
        },
      ],
    },
    {
      images: [
        {
          title: 'Fakodrop',
          path: '/fackodrop.PNG',
          live: 'https://fakodrop.com/'
        },
        {
          title: 'IAFR',
          path: '/iafr.PNG',
          live: 'https://iafr.fr/'
        },
        {
          title: 'Khazad',
          path: '/Khazad.PNG',
          live: 'https://www.khazad.fr/'
        },
        {
          title: 'SP-NET',
          path: '/Spnet.PNG',
          live: 'https://sp-net.fr/'
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const WorkSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className="h-[280px] sm:h-[480px]">
    {workSlides.slides.map((slide, index) => {
      return <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => {
              return <div className="relative rounded-lg overflow-hidden items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                  
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {image.live ? (
                        <a href={image.live} target="_blank" rel="noreferrer" className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 flex items-center gap-x-2 text-[13px] tracking-[0.2rem]" >
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-1">PROJECT</div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"><BsArrowRight /></div>
                        </a>
                      ) : (
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 flex items-center gap-x-2 text-[13px] tracking-[0.2rem]" >
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-1">PROJECT</div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"><BsArrowRight /></div>
                        </div>
                      )}
                    </div>
              </div>
            })}
          </div>
        </SwiperSlide>
    })}
  </Swiper>
  ;
};

export default WorkSlider;