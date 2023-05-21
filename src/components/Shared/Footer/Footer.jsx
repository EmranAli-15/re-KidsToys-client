import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center space-x-12 grid-flow-col">
                    <img className='h-16' src="https://i.ibb.co/hMVWVZT/logo.png" alt="" />
                    <p className='text-xl font-serif'>Kids Toy Ltd. <br />Happy shopping since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/JhankarMahbub">
                            <FaFacebook className='h-8 w-8 text-blue-500'></FaFacebook>
                        </a>
                        <a href="https://www.youtube.com/@JhankarMahbub">
                            <FaYoutube className='h-8 w-8 text-red-500'></FaYoutube>
                        </a>
                        <a>
                            <FaTwitter className='h-8 w-8 text-blue-500'></FaTwitter>
                        </a>
                    </div>
                </div>
            </footer>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Educational Toys</a>
                    <a className="link link-hover">Best Transport</a>
                    <a className="link link-hover">Marketing</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">Tongi</a>
                    <a className="link link-hover">Uttara</a>
                    <a className="link link-hover">Sahbug</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;