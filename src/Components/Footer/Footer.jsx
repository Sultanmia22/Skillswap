import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosTime, IoMdMail } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Contact Info</h6>
               <div className='flex items-center gap-2'>
                <span><FaPhoneAlt /></span>
                <p> 01890560160 </p>
               </div>

                 <div className='flex items-center gap-2'>
                <span><IoMdMail /></span>
                <p> sm3153044@gmail.com </p>
               </div>
               
               <div className='flex items-center gap-2'>
                <span><FaLocationDot /></span>
                <p> Khilkhet,Dhaka,Bangladesh </p>
               </div>
               
               <div className='flex items-center gap-2'>
                <span><IoIosTime /></span>
                <p> 9:00 AM to 6:00PM </p>
               </div>
            </nav>
            <nav>
                <h6 className="footer-title">Social links</h6>
                
                <div className='flex items-center gap-1'>
                <span><FaFacebook /></span>
                <a target='_blank' href='https://www.facebook.com/sm.emon.564' className='link link-hover'> Facebook </a>
               </div>

                <div className='flex items-center gap-1'>
                <span><FaTwitter /></span>
                <a target='_blank' href='https://x.com/' className='link link-hover'> Twitter </a>
               </div>

                <div className='flex items-center gap-1'>
                <span><FaInstagram /></span>
                <a target='_blank' href='https://www.instagram.com/sm.emon.564/' className='link link-hover'> Instagram </a>
               </div>
                
                 <div className='flex items-center gap-1'>
                <span><FaLinkedin /></span>
                <a target='_blank' href='https://www.linkedin.com/login' className='link link-hover'> Linkedin </a>
               </div>
                
            </nav>
            <nav>
                <h6 className="footer-title"> Privacy policy</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;