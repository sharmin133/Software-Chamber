import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <h2 className='text-5xl p-5 text-center font-bold'>LET'S TALK</h2>
            <div className='grid grid-cols-3' >

          <div >
            <p>A new era of energy, elegance, and elite competition begins here. Where passion meets performance on the court like never before.</p>

           <div>
             <h2 className='text-xl'>Social media</h2>
         
             <div className='grid grid-cols-3'>
                <div className='flex  items-center'>
                <p>Instagram </p><p><MdArrowOutward /></p>
             </div>
             <div className='flex  items-center'>
                <p>Twitter </p><p><MdArrowOutward /></p>
             </div>
             <div className='flex  items-center'>
                <p>Tiktok </p><p><MdArrowOutward /></p>
             </div>
             <div className='flex  items-center'>
                <p>Facebook </p><p><MdArrowOutward /></p>
             </div>
             <div className='flex  items-center'>
                <p>Linkedin </p><p><MdArrowOutward /></p>
             </div>
             <div className='flex  items-center'>
                <p>Youtube </p><p><MdArrowOutward /></p>
             </div>
             </div>
           </div>

          </div>

     <div>
        
        <div>
            <h2>ADDRESS</h2>
            <p>1901 thornridge Cir, Shiloh, Hawaii 81063</p>
        </div>

        <div>
            <h2>PHONE</h2>
            <p>[+1] 872-298-3989</p>
        </div>

         <div>
            <h2>EMAIL</h2>
            <p>hello@tranzit.com</p>
        </div>

     </div>


     <div>
        <img src="/AllPicture/Rectangle 22852.png" alt="" />
     </div>


            </div>



             <hr className="border-t-2 border-dashed border-gray-400 my-10" />

               <div className='flex justify-between'>
    <p className="text-center text-gray-500">2024 Software Chamber All Right Reserved</p>
  <div className='flex gap-10'>  <p>Privacy Policy</p>
    <p>Terms & Conditions</p></div>
  </div>
        </div>
    );
};

export default Footer;