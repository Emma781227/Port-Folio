import Circles from '/components/Circles';

import {BsArrowRight} from 'react-icons/bs';

import {motion} from 'framer-motion';

import {} from '../../variants';
const Contact = () => {
  return (
  <div className='h-full bg-primary/30 '>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* {text and form} */}
    <div className='flex flex-col w-full max-w-[700] '>
      {/* {text} */}
      <h2 className='h2 text-center mb-12'>
        Lets  <span className='text-accent'>Connect</span>
        </h2>
        {/* {form} */}
        <form action="https://formsubmit.co/emmatchinda8@gmail.com" method="POST" className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          {/* inputs */}
          <div className='flex gap-x-6 mb-12'>
          
          <input type='text' placeholder='name' className='input'/>
          <input type='text' placeholder='Second-name' className='input'/>
          </div>
          <input type='text' placeholder='Subject' className='input'/>
          <textarea placeholder='message' className='textarea'></textarea>
          <button className='btn rounded border bg-indigo-600 border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' >
          <span className='group-hover:-translate-x-[-120%] group-hover:opacity-0 transition-all duration-500'>Send </span>
          <BsArrowRight className='group-hover:-translate-x-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]'/>
          </button>

          
      </form>
    </div>
    </div>
  </div>
  );
};

export default Contact;
