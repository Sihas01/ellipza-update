"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-5 md:py-24 bg-[#F6F6F6] relative overflow-hidden font-sans">
            {/* Background Wave */}
            <div className="absolute top-0 left-0 w-full pointer-events-none opacity-100 z-0">
                <img src="/contact-wave.png" alt="" className="w-full h-auto opacity-80" />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-16 ">

                    {/* Left Column: Info */}
                    <div className="lg:w-2/5">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-[16px] mb-4 uppercase border-l-2 border-[#59257A] pl-3"
                        >
                            Contact Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        >
                            <svg width="340" height="32" viewBox="0 0 340 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_7_25224)">
                                    <path d="M14.0068 31.1104C5.39355 31.1104 0 25.3477 0 15.791C0 6.25488 5.43457 0.492188 14.0068 0.492188C21.123 0.492188 26.5371 5.00391 27.0088 11.6279H20.9795C20.4053 7.99805 17.6162 5.61914 14.0068 5.61914C9.33105 5.61914 6.31641 9.53613 6.31641 15.7705C6.31641 22.0869 9.29004 25.9834 14.0273 25.9834C17.6982 25.9834 20.3438 23.8301 21 20.3232H27.0293C26.332 26.9268 21.2666 31.1104 14.0068 31.1104ZM40.4414 31.0693C33.7969 31.0693 29.5518 26.8037 29.5518 19.585C29.5518 12.4688 33.8584 8.1416 40.4414 8.1416C47.0244 8.1416 51.3311 12.4482 51.3311 19.585C51.3311 26.8242 47.0859 31.0693 40.4414 31.0693ZM40.4414 26.4961C43.374 26.4961 45.2402 24.0146 45.2402 19.6055C45.2402 15.2373 43.3535 12.7148 40.4414 12.7148C37.5293 12.7148 35.6221 15.2373 35.6221 19.6055C35.6221 24.0146 37.4883 26.4961 40.4414 26.4961ZM54.4277 30.5977V8.61328H60.2109V12.5303H60.334C61.5029 9.80273 63.8203 8.20312 67.2041 8.20312C72.085 8.20312 74.833 11.2793 74.833 16.4268V30.5977H68.8447V17.6777C68.8447 14.8066 67.4912 13.166 64.8047 13.166C62.1182 13.166 60.416 15.1348 60.416 17.9854V30.5977H54.4277ZM78.627 30.5977V8.61328H84.4102V12.5303H84.5332C85.7021 9.80273 88.0195 8.20312 91.4033 8.20312C96.2842 8.20312 99.0322 11.2793 99.0322 16.4268V30.5977H93.0439V17.6777C93.0439 14.8066 91.6904 13.166 89.0039 13.166C86.3174 13.166 84.6152 15.1348 84.6152 17.9854V30.5977H78.627ZM112.69 12.5713C110.065 12.5713 108.179 14.5605 107.974 17.3086H117.305C117.182 14.499 115.356 12.5713 112.69 12.5713ZM117.387 23.8711H122.883C122.227 28.1777 118.289 31.0693 112.854 31.0693C106.087 31.0693 102.026 26.7422 102.026 19.708C102.026 12.6943 106.128 8.1416 112.629 8.1416C119.027 8.1416 123.067 12.4688 123.067 19.1543V20.9795H107.912V21.3486C107.912 24.4863 109.901 26.6396 112.957 26.6396C115.151 26.6396 116.833 25.5527 117.387 23.8711ZM146.139 16.7959H140.581C140.232 14.4785 138.694 12.8379 136.233 12.8379C133.28 12.8379 131.435 15.3398 131.435 19.585C131.435 23.9121 133.28 26.373 136.254 26.373C138.653 26.373 140.212 24.9375 140.581 22.5381H146.159C145.852 27.7266 141.976 31.0693 136.192 31.0693C129.568 31.0693 125.364 26.7627 125.364 19.585C125.364 12.5303 129.568 8.1416 136.151 8.1416C142.099 8.1416 145.872 11.8125 146.139 16.7959ZM150.65 3.54785H156.639V8.61328H160.699V13.125H156.639V23.6455C156.639 25.3271 157.459 26.127 159.223 26.127C159.756 26.127 160.31 26.0859 160.679 26.0244V30.4336C160.063 30.5771 159.038 30.6797 157.828 30.6797C152.66 30.6797 150.65 28.957 150.65 24.6709V13.125H147.554V8.61328H150.65V3.54785ZM190.538 10.377L184.919 30.5977H179.074L171.24 1.00488H177.659L182.314 22.4355H182.479L188.016 1.00488H193.245L198.782 22.4355H198.946L203.622 1.00488H210.041L202.187 30.5977H196.342L190.723 10.377H190.538ZM212.974 30.5977V8.61328H218.962V30.5977H212.974ZM215.968 6.19336C214.163 6.19336 212.769 4.81934 212.769 3.09668C212.769 1.35352 214.163 0 215.968 0C217.772 0 219.167 1.35352 219.167 3.09668C219.167 4.81934 217.772 6.19336 215.968 6.19336ZM224.561 3.54785H230.549V8.61328H234.609V13.125H230.549V23.6455C230.549 25.3271 231.369 26.127 233.133 26.127C233.666 26.127 234.22 26.0859 234.589 26.0244V30.4336C233.974 30.5771 232.948 30.6797 231.738 30.6797C226.57 30.6797 224.561 28.957 224.561 24.6709V13.125H221.464V8.61328H224.561V3.54785ZM238.034 30.5977V1.00488H243.92V12.5303H244.043C245.212 9.76172 247.611 8.20312 250.954 8.20312C255.835 8.20312 258.624 11.3613 258.624 16.4473V30.5977H252.636V17.7188C252.636 14.8887 251.241 13.166 248.514 13.166C245.684 13.166 244.022 15.1553 244.022 18.0469V30.5977H238.034ZM284.648 0.492188C293.405 0.492188 298.922 6.37793 298.922 15.8115C298.922 25.2246 293.405 31.1104 284.648 31.1104C275.871 31.1104 270.375 25.2246 270.375 15.8115C270.375 6.37793 275.871 0.492188 284.648 0.492188ZM284.648 5.66016C279.809 5.66016 276.691 9.59766 276.691 15.8115C276.691 22.0049 279.788 25.9219 284.648 25.9219C289.488 25.9219 292.585 22.0049 292.585 15.8115C292.585 9.59766 289.488 5.66016 284.648 5.66016ZM322.711 8.61328V30.5977H316.928V26.6396H316.805C315.718 29.4082 313.544 31.0078 310.222 31.0078C305.464 31.0078 302.306 27.9111 302.306 22.7842V8.61328H308.294V21.5332C308.294 24.4658 309.75 26.0244 312.396 26.0244C315.062 26.0244 316.723 24.1172 316.723 21.2051V8.61328H322.711ZM326.607 30.5977V8.61328H332.391V12.5713H332.514C333.293 9.78223 335.159 8.26465 337.743 8.26465C338.44 8.26465 339.035 8.36719 339.445 8.49023V13.7607C338.953 13.5557 338.133 13.4121 337.271 13.4121C334.318 13.4121 332.596 15.2168 332.596 18.3135V30.5977H326.607Z" fill="#D2D2D2" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_7_25224" x="0" y="0" width="339.445" height="32.1104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_25224" />
                                    </filter>
                                </defs>
                            </svg>

                            <span className="text-[#0f172a]">Next Gen </span>
                            <span className="inline-flex items-center justify-center rounded-lg align-middle mx-1 rotate-3">
                                <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_9_25359)">
                                        <g clip-path="url(#clip0_9_25359)">
                                            <path d="M28.9576 0.520942L5.41316 6.82966C4.41252 7.09778 3.81922 8.12541 4.08734 9.12605L10.3961 32.6705C10.6642 33.6711 11.6918 34.2644 12.6924 33.9963L36.2369 27.6876C37.2375 27.4195 37.8308 26.3918 37.5627 25.3912L31.254 1.84677C30.9859 0.846128 29.9582 0.252821 28.9576 0.520942Z" fill="#1D7612" />
                                            <path d="M27.5314 0.903103L5.29997 6.85998C4.85154 6.98364 4.46977 7.27878 4.23718 7.68163C4.0046 8.08448 3.93988 8.56267 4.05701 9.01286L9.99569 31.1763C10.2446 32.1142 11.2062 32.6694 12.144 32.4205L34.3573 26.4685C35.2952 26.2196 35.8504 25.258 35.6015 24.3201L29.6616 2.15213C29.4363 1.2298 28.5035 0.664457 27.5812 0.889758L27.5314 0.903103Z" fill="#41A834" />
                                            <path opacity="0.3" d="M12.2241 7.16427C12.0846 6.64357 11.6799 6.58216 9.6153 7.20815C7.8903 7.74316 7.08462 8.17742 6.73377 8.95083C6.38293 9.72424 6.59286 11.051 6.98271 12.5966C7.27389 13.6832 7.54686 14.702 8.11283 14.5503C8.88255 14.3441 8.40333 12.5556 8.77032 11.3896C9.46507 9.09249 12.4061 7.84343 12.2241 7.16427Z" fill="#FAFAFA" />
                                            <g clip-path="url(#clip1_9_25359)">
                                                <path d="M28.3345 21.2762C26.8088 21.8442 25.1776 22.0729 23.4409 21.9624C21.7042 21.8518 19.9983 21.4132 18.3231 20.6466C16.6479 19.88 15.2008 18.8761 13.9816 17.6351C12.7624 16.3941 11.8684 15.0106 11.2997 13.4845C11.2179 13.2648 11.223 13.0545 11.3149 12.8535C11.4069 12.6525 11.5627 12.5111 11.7824 12.4293L14.7484 11.325C14.9192 11.2614 15.0935 11.2627 15.271 11.3289C15.4485 11.3951 15.5789 11.5028 15.6622 11.6519L17.0925 14.0378C17.1897 14.224 17.2449 14.3911 17.2583 14.539C17.2717 14.6869 17.2477 14.8278 17.1864 14.9618L16.0785 17.4173C16.4907 17.778 16.9429 18.1063 17.435 18.4023C17.9271 18.6983 18.4476 18.9667 18.9965 19.2077C19.5157 19.4452 20.0431 19.6485 20.5786 19.8177C21.1141 19.9869 21.6637 20.1192 22.2273 20.2145L23.3076 17.8528C23.3765 17.702 23.4894 17.5663 23.6463 17.4456C23.8032 17.325 23.9712 17.2449 24.1505 17.2054L26.868 16.7773C27.057 16.7625 27.2304 16.7989 27.388 16.8864C27.5457 16.9739 27.654 17.0967 27.7129 17.2549L28.8171 20.2209C28.8989 20.4406 28.8939 20.651 28.8019 20.852C28.71 21.053 28.5542 21.1944 28.3345 21.2762Z" fill="white" />
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_9_25359" x="-0.414307" y="0" width="42.5017" height="43.4976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="5" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_25359" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_25359" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_9_25359">
                                            <rect x="3.58569" y="7.2915" width="28.1718" height="28.1657" rx="2" transform="rotate(-15 3.58569 7.2915)" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_9_25359">
                                            <rect width="18.7548" height="18.7548" fill="white" transform="translate(7.99841 11.3364) rotate(-20.4208)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            <span className="text-[#0f172a]"> Tech</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#616161]  text-sm lg:text-base font-medium tracking-[0.02em] text-justify mb-10 leading-tight max-w-sm"
                        >
                            At Ellipza Technologies, our strength lies in the diversity and expertise of our team. We bring together a group of dedicated professionals with a shared passion for innovation and a commitment to delivering exceptional results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <div className=" items-center gap-5 hidden md:flex">
                                <div className="flex items-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#1D1D1B" />
                                        <path d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2299 13.2683 15.9774 13.1752 15.7178 13.1832C15.4583 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71204 14.287C8.52004 13.094 8.15904 11.933 8.05204 11.361L10.511 8.96699C10.6975 8.78612 10.8062 8.53982 10.8142 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85904 3.51299C6.68408 3.32035 6.44092 3.2035 6.18119 3.18725C5.92146 3.17101 5.66564 3.25665 5.46804 3.42599L3.29804 5.28699C3.12515 5.46051 3.02196 5.69145 3.00804 5.93599C2.99304 6.18599 2.70704 12.108 7.29904 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3086 20.9783 18.5394 20.8747 18.712 20.701L20.572 18.53C20.7415 18.3325 20.8273 18.0768 20.8113 17.817C20.7952 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z" fill="#1D1D1B" />
                                    </svg>

                                    <span className="text-[#1D1D1B] font-normal text-[16px]">+1012 3456 789</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#1D1D1B" />
                                    </svg>

                                    <span className="text-[#1D1D1B] font-normal text-[16px]">demo@gmail.com</span>
                                </div>
                            </div>

                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4 mt-8 "
                        >
                            {['facebook', 'twitter', 'instagram'].map((social) => (
                                <div key={social} className="w-8 h-8 rounded-full text-white hidden md:flex items-center justify-center cursor-pointer transition-colors shadow-md">
                                    {/* Simple placeholder icons */}
                                    {social === 'facebook' && <span className="font-bold text-sm"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#8E24AA" />
                                        <path d="M24.5 15C24.5 10.05 20.45 6 15.5 6C10.55 6 6.5 10.05 6.5 15C6.5 19.5 9.7625 23.2125 14.0375 23.8875V17.5875H11.7875V15H14.0375V12.975C14.0375 10.725 15.3875 9.4875 17.4125 9.4875C18.425 9.4875 19.4375 9.7125 19.4375 9.7125V11.9625H18.3125C17.1875 11.9625 16.85 12.6375 16.85 13.3125V15H19.325L18.875 17.5875H16.7375V24C21.2375 23.325 24.5 19.5 24.5 15Z" fill="white" />
                                    </svg>
                                    </span>}
                                    {social === 'twitter' && <span className="font-bold text-sm">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#8E24AA" />
                                            <path d="M23 10.4255C22.4484 10.6598 21.8481 10.8284 21.2298 10.8941C21.8717 10.5185 22.3525 9.92521 22.5818 9.22545C21.9794 9.57833 21.3195 9.82578 20.6313 9.95681C20.3437 9.65402 19.9958 9.4128 19.6094 9.24819C19.2229 9.08357 18.8062 8.99909 18.3852 9.00001C16.6816 9.00001 15.3116 10.3598 15.3116 12.0284C15.3116 12.2627 15.3405 12.497 15.3873 12.7225C12.8366 12.5911 10.5616 11.3911 9.04915 9.55385C8.77357 10.0174 8.62916 10.5451 8.63093 11.0823C8.63093 12.1331 9.17354 13.0598 10.001 13.6047C9.51335 13.5858 9.03715 13.4538 8.6111 13.2195V13.2568C8.6111 14.7284 9.66747 15.9479 11.0754 16.2284C10.811 16.296 10.5391 16.3306 10.266 16.3314C10.0659 16.3314 9.87658 16.3118 9.68549 16.2852C10.0749 17.4852 11.2087 18.3568 12.5589 18.3852C11.5026 19.2 10.1794 19.6793 8.7427 19.6793C8.48492 19.6793 8.24697 19.6704 8 19.642C9.36282 20.503 10.9798 21 12.7212 21C18.3744 21 21.4677 16.3882 21.4677 12.3852C21.4677 12.2539 21.4677 12.1225 21.4587 11.9911C22.0572 11.5598 22.5818 11.0254 23 10.4255Z" fill="white" />
                                        </svg>
                                    </span>}
                                    {social === 'instagram' && <span className="font-bold text-sm">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#8E24AA" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.408 7.045C13.2077 7.00818 13.4627 7 15.5 7C17.5373 7 17.7923 7.00886 18.5914 7.045C19.3905 7.08114 19.9359 7.20864 20.4132 7.39341C20.913 7.58227 21.3664 7.8775 21.7414 8.25932C22.1232 8.63364 22.4177 9.08636 22.6059 9.58682C22.7914 10.0641 22.9182 10.6095 22.955 11.4073C22.9918 12.2084 23 12.4634 23 14.5C23 16.5373 22.9911 16.7923 22.955 17.592C22.9189 18.3898 22.7914 18.9352 22.6059 19.4125C22.4177 19.913 22.1227 20.3665 21.7414 20.7414C21.3664 21.1232 20.913 21.4177 20.4132 21.6059C19.9359 21.7914 19.3905 21.9182 18.5927 21.955C17.7923 21.9918 17.5373 22 15.5 22C13.4627 22 13.2077 21.9911 12.408 21.955C11.6102 21.9189 11.0648 21.7914 10.5875 21.6059C10.087 21.4177 9.63351 21.1227 9.25864 20.7414C8.87708 20.3668 8.58181 19.9136 8.39341 19.4132C8.20864 18.9359 8.08182 18.3905 8.045 17.5927C8.00818 16.7916 8 16.5366 8 14.5C8 12.4627 8.00886 12.2077 8.045 11.4086C8.08114 10.6095 8.20864 10.0641 8.39341 9.58682C8.58208 9.08642 8.87758 8.63317 9.25932 8.25864C9.63366 7.87716 10.0867 7.58189 10.5868 7.39341C11.0641 7.20864 11.6095 7.08182 12.4073 7.045H12.408ZM18.5307 8.395C17.7398 8.35886 17.5025 8.35136 15.5 8.35136C13.4975 8.35136 13.2602 8.35886 12.4693 8.395C11.7377 8.42841 11.3409 8.55045 11.0764 8.65341C10.7266 8.78977 10.4764 8.95136 10.2139 9.21386C9.96503 9.45594 9.77353 9.75065 9.65341 10.0764C9.55045 10.3409 9.42841 10.7377 9.395 11.4693C9.35886 12.2602 9.35136 12.4975 9.35136 14.5C9.35136 16.5025 9.35886 16.7398 9.395 17.5307C9.42841 18.2623 9.55045 18.6591 9.65341 18.9236C9.77341 19.2489 9.965 19.5441 10.2139 19.7861C10.4559 20.035 10.7511 20.2266 11.0764 20.3466C11.3409 20.4495 11.7377 20.5716 12.4693 20.605C13.2602 20.6411 13.4968 20.6486 15.5 20.6486C17.5032 20.6486 17.7398 20.6411 18.5307 20.605C19.2623 20.5716 19.6591 20.4495 19.9236 20.3466C20.2734 20.2102 20.5236 20.0486 20.7861 19.7861C21.035 19.5441 21.2266 19.2489 21.3466 18.9236C21.4495 18.6591 21.5716 18.2623 21.605 17.5307C21.6411 16.7398 21.6486 16.5025 21.6486 14.5C21.6486 12.4975 21.6411 12.2602 21.605 11.4693C21.5716 10.7377 21.4495 10.3409 21.3466 10.0764C21.2102 9.72659 21.0486 9.47636 20.7861 9.21386C20.544 8.96505 20.2493 8.77355 19.9236 8.65341C19.6591 8.55045 19.2623 8.42841 18.5307 8.395ZM14.542 16.812C15.077 17.0347 15.6728 17.0648 16.2275 16.8971C16.7821 16.7294 17.2614 16.3743 17.5834 15.8924C17.9053 15.4106 18.05 14.832 17.9928 14.2553C17.9355 13.6786 17.6798 13.1398 17.2693 12.7307C17.0077 12.4692 16.6913 12.269 16.343 12.1444C15.9946 12.0199 15.623 11.9741 15.2549 12.0104C14.8867 12.0467 14.5312 12.1642 14.214 12.3544C13.8967 12.5446 13.6255 12.8028 13.42 13.1104C13.2145 13.4179 13.0797 13.7672 13.0254 14.1332C12.971 14.4991 12.9985 14.8725 13.1058 15.2265C13.2131 15.5805 13.3976 15.9063 13.6459 16.1805C13.8943 16.4547 14.2003 16.6704 14.542 16.812ZM12.7741 11.7741C13.1321 11.4161 13.557 11.1322 14.0247 10.9384C14.4925 10.7447 14.9938 10.645 15.5 10.645C16.0062 10.645 16.5075 10.7447 16.9753 10.9384C17.443 11.1322 17.8679 11.4161 18.2259 11.7741C18.5839 12.1321 18.8678 12.557 19.0616 13.0247C19.2553 13.4925 19.355 13.9938 19.355 14.5C19.355 15.0062 19.2553 15.5075 19.0616 15.9753C18.8678 16.443 18.5839 16.8679 18.2259 17.2259C17.503 17.9489 16.5224 18.355 15.5 18.355C14.4776 18.355 13.497 17.9489 12.7741 17.2259C12.0511 16.503 11.645 15.5224 11.645 14.5C11.645 13.4776 12.0511 12.497 12.7741 11.7741ZM20.21 11.2191C20.2987 11.1354 20.3697 11.0348 20.4188 10.9232C20.468 10.8115 20.4942 10.6912 20.496 10.5693C20.4977 10.4473 20.475 10.3263 20.4292 10.2133C20.3833 10.1003 20.3153 9.99762 20.2291 9.91139C20.1428 9.82516 20.0402 9.75711 19.9272 9.71126C19.8142 9.66542 19.6931 9.64271 19.5712 9.64449C19.4492 9.64627 19.3289 9.67249 19.2173 9.72161C19.1057 9.77073 19.005 9.84175 18.9214 9.93045C18.7586 10.103 18.6695 10.3321 18.673 10.5693C18.6764 10.8064 18.7722 11.0329 18.9399 11.2006C19.1076 11.3683 19.334 11.464 19.5712 11.4675C19.8083 11.4709 20.0375 11.3818 20.21 11.2191Z" fill="white" />
                                        </svg>

                                    </span>}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-3/5"
                    >
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">Email</label>
                                    <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-[16px] font-bold text-gray-900 mb-2">Phone Number</label>
                                    <input type="tel" placeholder="+1 012 3456 789" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                            </div>

                            {/* Radio Group */}
                            <div>
                                <label className="block text-[16px] font-bold text-gray-900 mb-4">What service you want?</label>
                                <div className="flex flex-wrap gap-6 text-[16px]">
                                    {['Web Development', 'Mobile App', 'AI Solutions', 'Digital Marketing', 'Other'].map((service, idx) => (
                                        <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    defaultChecked={idx === 0}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:bg-black peer-checked:border-black transition-all"></div>
                                                {/* Checkmark specific to image? Standard radio dot usually fine, but image shows 'tick'. */}
                                                <svg className="w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span className="text-gray-500 font-medium group-hover:text-black transition-colors peer-checked:text-black">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                <label className="block text-[16px] font-bold text-gray-900 mb-2">Message</label>
                                <textarea placeholder="Write your message.." rows={1} className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 resize-none py-1"></textarea>
                            </div>

                            <div className="flex justify-center pt-4 md:justify-end">
                                <button type="submit" className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                                    <Send size={16} /> <span className="text-[16px]">Send Message</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
