"use client";

import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 1.5, decimals = 0 }: { from?: number, to: number, duration?: number, decimals?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "0px" }); // Fixed execution margin for mobile

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                if (node) node.textContent = value.toFixed(decimals);
            }
        });

        return () => controls.stop();
    }, [from, to, duration, inView, decimals]);

    return <span ref={nodeRef}>{from.toFixed(decimals)}</span>;
}

export default function AboutUsSection() {
    return (
        <section id="about" className="py-2 md:py-20 bg-[#F7F9FC] overflow-hidden font-sans">
            <div className="container mx-auto px-6 md:px-16 lg:px-24 ">

                {/* Header Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
                    <div className="lg:col-span-7">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-[16px] mb-4 uppercase"
                        >
                            | About Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 leading-tight"
                        >

                            <svg width="443" height="39" viewBox="0 0 443 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-6">
                                <g filter="url(#filter0_i_7_17178)">
                                    <path d="M19.6055 25.4707V30.5977H0V1.00488H19.6055V6.11133H6.19336V13.248H18.8467V18.0059H6.19336V25.4707H19.6055ZM23.707 30.5977V1.00488H29.6953V30.5977H23.707ZM33.8789 30.5977V1.00488H39.8672V30.5977H33.8789ZM44.0098 30.5977V8.61328H49.998V30.5977H44.0098ZM47.0039 6.19336C45.1992 6.19336 43.8047 4.81934 43.8047 3.09668C43.8047 1.35352 45.1992 0 47.0039 0C48.8086 0 50.2031 1.35352 50.2031 3.09668C50.2031 4.81934 48.8086 6.19336 47.0039 6.19336ZM66.835 8.26465C72.4131 8.26465 75.8379 12.5098 75.8379 19.6055C75.8379 26.6807 72.4336 30.9463 66.9375 30.9463C63.7383 30.9463 61.2773 29.3877 60.1084 26.9062H59.9854V37.7754H53.9971V8.61328H59.9033V12.4482H60.0264C61.2158 9.86426 63.6562 8.26465 66.835 8.26465ZM64.8252 26.127C67.8193 26.127 69.7061 23.6045 69.7061 19.6055C69.7061 15.627 67.8193 13.0635 64.8252 13.0635C61.8926 13.0635 59.9648 15.668 59.9648 19.6055C59.9648 23.584 61.8926 26.127 64.8252 26.127ZM78.1143 30.5977V27.1934L89.0654 13.3096V13.1865H78.2783V8.61328H96.0176V12.4072L85.7227 25.9014V26.0039H96.2637V30.5977H78.1143ZM108.261 26.6191C110.865 26.6191 113.019 24.917 113.019 22.5381V20.9385L108.384 21.2256C106.148 21.3896 104.877 22.3945 104.877 23.9531C104.877 25.5938 106.23 26.6191 108.261 26.6191ZM106.292 30.9463C102.108 30.9463 98.9297 28.2393 98.9297 24.2812C98.9297 20.2822 102.006 17.9648 107.481 17.6367L113.019 17.3086V15.8525C113.019 13.8018 111.583 12.6123 109.327 12.6123C107.092 12.6123 105.677 13.7197 105.39 15.3398H99.9141C100.14 11.0742 103.77 8.1416 109.594 8.1416C115.233 8.1416 118.904 11.0537 118.904 15.4834V30.5977H113.121V27.2344H112.998C111.768 29.5723 109.04 30.9463 106.292 30.9463ZM150.999 30.5977L148.743 23.4199H138.346L136.09 30.5977H129.732L140.007 1.00488H147.287L157.582 30.5977H150.999ZM143.473 6.66504L139.679 18.7852H147.41L143.616 6.66504H143.473ZM160.248 30.5977V1.00488H166.236V30.5977H160.248ZM201.12 8.61328L195.296 30.5977H188.918L184.939 15.0527H184.816L180.858 30.5977H174.562L168.718 8.61328H174.747L178.069 24.917H178.192L182.089 8.61328H187.831L191.748 24.917H191.871L195.214 8.61328H201.12ZM211.62 26.6191C214.225 26.6191 216.378 24.917 216.378 22.5381V20.9385L211.743 21.2256C209.508 21.3896 208.236 22.3945 208.236 23.9531C208.236 25.5938 209.59 26.6191 211.62 26.6191ZM209.651 30.9463C205.468 30.9463 202.289 28.2393 202.289 24.2812C202.289 20.2822 205.365 17.9648 210.841 17.6367L216.378 17.3086V15.8525C216.378 13.8018 214.942 12.6123 212.687 12.6123C210.451 12.6123 209.036 13.7197 208.749 15.3398H203.273C203.499 11.0742 207.129 8.1416 212.953 8.1416C218.593 8.1416 222.264 11.0537 222.264 15.4834V30.5977H216.48V27.2344H216.357C215.127 29.5723 212.399 30.9463 209.651 30.9463ZM228.826 38.7393C228.621 38.7393 226.755 38.7188 226.57 38.6777V34.0635C226.755 34.1045 227.842 34.1045 228.067 34.1045C230.262 34.1045 231.349 33.4072 231.759 31.6641C231.759 31.582 231.984 30.7002 231.943 30.6182L224.294 8.61328H230.877L235.553 25.7988H235.655L240.331 8.61328H246.647L239.08 31.0898C237.193 36.7295 234.445 38.7393 228.826 38.7393ZM248.329 15.0732C248.329 10.8896 251.959 8.1416 257.599 8.1416C263.115 8.1416 266.704 10.9307 266.786 15.1963H261.27C261.146 13.4326 259.731 12.3457 257.517 12.3457C255.445 12.3457 254.092 13.2891 254.092 14.7041C254.092 15.791 255.035 16.5293 256.963 16.9805L261.167 17.8828C265.576 18.8672 267.36 20.6104 267.36 23.8916C267.36 28.2188 263.382 31.0693 257.578 31.0693C251.713 31.0693 248.104 28.2393 247.775 23.9531H253.62C253.907 25.7988 255.363 26.8652 257.742 26.8652C260.019 26.8652 261.393 25.9629 261.393 24.5273C261.393 23.4199 260.654 22.8047 258.686 22.333L254.625 21.4307C250.462 20.4873 248.329 18.3135 248.329 15.0732ZM279.193 1.00488H291.231C297.302 1.00488 301.485 5.04492 301.485 11.1357C301.485 17.2061 297.158 21.2666 290.924 21.2666H285.387V30.5977H279.193V1.00488ZM285.387 5.90625V16.4268H289.57C293.118 16.4268 295.189 14.54 295.189 11.1562C295.189 7.79297 293.139 5.90625 289.591 5.90625H285.387ZM304.644 30.5977V8.61328H310.427V12.5713H310.55C311.329 9.78223 313.195 8.26465 315.779 8.26465C316.477 8.26465 317.071 8.36719 317.481 8.49023V13.7607C316.989 13.5557 316.169 13.4121 315.308 13.4121C312.354 13.4121 310.632 15.2168 310.632 18.3135V30.5977H304.644ZM329.294 31.0693C322.649 31.0693 318.404 26.8037 318.404 19.585C318.404 12.4688 322.711 8.1416 329.294 8.1416C335.877 8.1416 340.184 12.4482 340.184 19.585C340.184 26.8242 335.938 31.0693 329.294 31.0693ZM329.294 26.4961C332.227 26.4961 334.093 24.0146 334.093 19.6055C334.093 15.2373 332.206 12.7148 329.294 12.7148C326.382 12.7148 324.475 15.2373 324.475 19.6055C324.475 24.0146 326.341 26.4961 329.294 26.4961ZM362.845 8.61328L355.298 30.5977H348.53L340.922 8.61328H347.341L351.914 25.3066H352.037L356.59 8.61328H362.845ZM365.039 30.5977V8.61328H371.027V30.5977H365.039ZM368.033 6.19336C366.229 6.19336 364.834 4.81934 364.834 3.09668C364.834 1.35352 366.229 0 368.033 0C369.838 0 371.232 1.35352 371.232 3.09668C371.232 4.81934 369.838 6.19336 368.033 6.19336ZM383.188 30.9463C377.692 30.9463 374.227 26.5986 374.227 19.5645C374.227 12.5918 377.713 8.26465 383.229 8.26465C386.408 8.26465 388.869 9.94629 389.936 12.3867H390.059V1.00488H396.047V30.5977H390.141V26.8242H390.038C388.972 29.2441 386.429 30.9463 383.188 30.9463ZM385.219 13.0635C382.204 13.0635 380.358 15.5859 380.358 19.6055C380.358 23.6455 382.204 26.127 385.219 26.127C388.192 26.127 390.1 23.625 390.1 19.6055C390.1 15.6064 388.192 13.0635 385.219 13.0635ZM409.91 12.5713C407.285 12.5713 405.398 14.5605 405.193 17.3086H414.524C414.401 14.499 412.576 12.5713 409.91 12.5713ZM414.606 23.8711H420.103C419.446 28.1777 415.509 31.0693 410.074 31.0693C403.307 31.0693 399.246 26.7422 399.246 19.708C399.246 12.6943 403.348 8.1416 409.849 8.1416C416.247 8.1416 420.287 12.4688 420.287 19.1543V20.9795H405.132V21.3486C405.132 24.4863 407.121 26.6396 410.177 26.6396C412.371 26.6396 414.053 25.5527 414.606 23.8711ZM423.015 15.0732C423.015 10.8896 426.645 8.1416 432.284 8.1416C437.801 8.1416 441.39 10.9307 441.472 15.1963H435.955C435.832 13.4326 434.417 12.3457 432.202 12.3457C430.131 12.3457 428.777 13.2891 428.777 14.7041C428.777 15.791 429.721 16.5293 431.648 16.9805L435.853 17.8828C440.262 18.8672 442.046 20.6104 442.046 23.8916C442.046 28.2188 438.067 31.0693 432.264 31.0693C426.398 31.0693 422.789 28.2393 422.461 23.9531H428.306C428.593 25.7988 430.049 26.8652 432.428 26.8652C434.704 26.8652 436.078 25.9629 436.078 24.5273C436.078 23.4199 435.34 22.8047 433.371 22.333L429.311 21.4307C425.147 20.4873 423.015 18.3135 423.015 15.0732Z" fill="#D2D2D2" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_7_17178" x="0" y="0" width="442.046" height="39.7393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_17178" />
                                    </filter>
                                </defs>
                            </svg>

                            <span className="text-[#0f172a] flex items-center gap-3 text-[28px] md:text-[44px]">Powerful
                                <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-6">
                                    <g clip-path="url(#clip0_7_17184)" filter="url(#filter0_d_7_17184)">
                                        <path d="M28.9576 1.59655L5.41316 7.90526C4.41252 8.17338 3.81922 9.20102 4.08734 10.2017L10.3961 33.7461C10.6642 34.7467 11.6918 35.34 12.6924 35.0719L36.2369 28.7632C37.2375 28.4951 37.8308 27.4675 37.5627 26.4668L31.254 2.92237C30.9859 1.92173 29.9582 1.32843 28.9576 1.59655Z" fill="#8E24AA" />
                                        <path d="M27.5314 1.97871L5.29997 7.93559C4.85154 8.05924 4.46977 8.35439 4.23718 8.75724C4.0046 9.16009 3.93988 9.63828 4.05701 10.0885L9.99569 32.2519C10.2446 33.1898 11.2062 33.745 12.144 33.4961L34.3573 27.5441C35.2952 27.2952 35.8504 26.3336 35.6015 25.3957L29.6616 3.22774C29.4363 2.3054 28.5035 1.74006 27.5812 1.96536L27.5314 1.97871Z" fill="#AB47BC" />
                                        <path opacity="0.3" d="M12.2241 8.23975C12.0846 7.71906 11.6799 7.65764 9.6153 8.28364C7.8903 8.81864 7.08462 9.2529 6.73377 10.0263C6.38293 10.7997 6.59286 12.1265 6.98271 13.672C7.27389 14.7587 7.54686 15.7775 8.11283 15.6258C8.88255 15.4196 8.40333 13.6311 8.77032 12.4651C9.46507 10.168 12.4061 8.91892 12.2241 8.23975Z" fill="#FAFAFA" />
                                        <path d="M20.5098 19.8745C21.26 19.6735 21.7052 18.9024 21.5042 18.1522C21.3032 17.402 20.5321 16.9568 19.7819 17.1578C19.0317 17.3588 18.5865 18.1299 18.7875 18.8801C18.9886 19.6303 19.7597 20.0755 20.5098 19.8745Z" fill="#FAFAFA" />
                                        <path d="M28.1078 10.5594C27.0089 9.44655 24.7175 9.76936 22.1314 11.1659C20.5598 8.65109 18.7509 7.24315 17.2341 7.64958C15.7173 8.05601 14.8609 10.2024 14.7738 13.1374C11.8133 13.227 9.69011 14.0871 9.27222 15.6064C8.85433 17.1257 10.2832 18.9266 12.7882 20.4877C11.3994 23.0922 11.0624 25.3663 12.1839 26.4731C13.3055 27.5799 15.5743 27.2631 18.1603 25.8665C19.7319 28.3814 21.5408 29.7893 23.0576 29.3829C24.5744 28.9765 25.4369 26.8528 25.5179 23.8951C28.4784 23.8055 30.6016 22.9454 30.9969 21.4322C31.3921 19.9189 29.9859 18.1119 27.4809 16.5508C28.8924 13.9403 29.2067 11.6723 28.1078 10.5594ZM27.1125 11.554C27.5751 12.0124 27.4531 13.5495 26.3913 15.6538C26.3283 15.7629 26.1971 15.8078 26.0804 15.7614C25.3994 15.4199 24.7016 15.1129 23.9898 14.8415C23.9595 14.8295 23.9321 14.8115 23.9092 14.7884C23.8863 14.7652 23.8684 14.7376 23.8568 14.7073C23.5956 13.9862 23.2859 13.283 22.9288 12.6023C22.9145 12.575 22.9058 12.5452 22.9032 12.5146C22.9005 12.4839 22.9039 12.4531 22.9131 12.4238C22.9224 12.3944 22.9374 12.3672 22.9572 12.3437C22.9771 12.3202 23.0013 12.3009 23.0287 12.2868C23.0309 12.2862 23.0348 12.2827 23.0371 12.2821C25.1057 11.2182 26.65 11.0956 27.1125 11.554ZM22.4646 20.8309C22.0582 21.2504 21.6304 21.6485 21.1827 22.0236C21.1231 22.0639 21.0507 22.0833 20.979 22.0782C20.4368 21.9566 19.872 21.841 19.2725 21.6862C18.6729 21.5315 18.1413 21.3585 17.6097 21.1855C17.5736 21.1759 17.5412 21.1559 17.5165 21.128C17.4918 21.1001 17.4758 21.0656 17.4706 21.0286C17.3084 20.514 17.1341 19.9541 16.9764 19.3655C16.8187 18.7769 16.6897 18.2048 16.5728 17.6781C16.5608 17.6061 16.5755 17.5342 16.6148 17.4727C16.9887 17.0571 17.3853 16.6354 17.8045 16.2076C18.2109 15.7881 18.6387 15.39 19.0864 15.0149C19.1459 14.9747 19.2184 14.9553 19.2901 14.9603C19.8262 15.0593 20.397 15.1975 20.9966 15.3523C21.5961 15.5071 22.1278 15.6801 22.6594 15.8531C22.7292 15.878 22.7836 15.9363 22.7985 16.0099C22.9894 16.5411 23.1349 17.0844 23.2927 17.6731C23.4504 18.2617 23.5794 18.8337 23.6963 19.3605C23.7083 19.4325 23.6936 19.5044 23.6542 19.5658C23.2803 19.9815 22.8838 20.4032 22.4646 20.8309ZM24.0126 21.2654C24.0539 21.6911 24.0891 22.0941 24.1182 22.4746C23.7256 22.4584 23.327 22.4197 22.9058 22.3869C23.1018 22.2131 23.2918 22.0166 23.4652 21.8488C23.6387 21.681 23.8226 21.4619 24.0126 21.2654ZM19.685 23.2257C19.3426 23.4873 19.0107 23.6975 18.6788 23.9078C18.5138 23.5638 18.3201 23.2032 18.1657 22.8078C18.4285 22.883 18.6686 22.9642 18.9253 23.0167C19.1821 23.0693 19.4509 23.1671 19.685 23.2257ZM15.8243 20.4992C15.4407 20.3351 15.0796 20.1649 14.7125 19.9721C14.9175 19.6503 15.145 19.3224 15.4118 18.9597L15.8243 20.4992ZM16.2791 15.7671C16.2379 15.3414 16.2027 14.9383 16.1735 14.5579C16.5661 14.5741 16.9647 14.6128 17.3859 14.6455C17.1899 14.8194 16.9999 15.0159 16.8265 15.1837C16.6531 15.3515 16.4691 15.5706 16.2791 15.7671ZM20.6067 13.8068C20.9491 13.5452 21.281 13.335 21.6129 13.1247C21.7779 13.4687 21.9716 13.8293 22.126 14.2247C21.8773 14.1385 21.6237 14.0705 21.3664 14.0157C21.1097 13.9632 20.8408 13.8654 20.6067 13.8068ZM24.4447 16.5394C24.8186 16.694 25.1821 16.8732 25.5339 17.0725C25.329 17.3943 25.1014 17.7222 24.8572 18.0788C24.7905 17.8298 24.7464 17.5747 24.6736 17.303C24.6008 17.0314 24.5402 16.805 24.4447 16.5394ZM17.5981 9.00791C18.232 8.83806 19.4861 9.71523 20.7703 11.7005C20.8471 11.8061 20.8228 11.9509 20.7172 12.0277C20.715 12.0283 20.7133 12.0312 20.7133 12.0312C20.0948 12.4396 19.4884 12.8932 18.8655 13.3756C18.8127 13.414 18.7493 13.431 18.6844 13.4241C17.9324 13.2981 17.1732 13.2176 16.4119 13.1838C16.2833 13.1746 16.187 13.0596 16.1962 12.931C16.1956 12.9287 16.1972 12.9259 16.1972 12.9259C16.294 10.5705 16.9642 9.17776 17.5981 9.00791ZM10.6314 15.9701C10.8028 15.3419 12.2015 14.6759 14.5475 14.5569C14.6758 14.5467 14.7911 14.642 14.8013 14.7703C14.8019 14.7726 14.8031 14.7771 14.8014 14.78C14.8476 15.4956 14.9346 16.273 15.0502 17.067C15.0604 17.1322 15.0439 17.1973 15.0022 17.2497C14.5163 17.8367 14.0653 18.4518 13.6516 19.0917C13.5778 19.1964 13.435 19.2249 13.3286 19.154C11.3342 17.8685 10.4601 16.5984 10.6314 15.9701ZM13.1792 25.4785C12.7166 25.0201 12.8386 23.483 13.9005 21.3786C13.9634 21.2696 14.0946 21.2247 14.2113 21.2711C14.8923 21.6126 15.5901 21.9196 16.3019 22.191C16.3643 22.2156 16.4112 22.2637 16.4349 22.3252C16.6961 23.0463 17.0058 23.7495 17.3629 24.4302C17.3772 24.4575 17.3859 24.4873 17.3886 24.5179C17.3912 24.5485 17.3878 24.5794 17.3786 24.6087C17.3693 24.638 17.3543 24.6652 17.3345 24.6888C17.3147 24.7123 17.2904 24.7316 17.2631 24.7457C17.2608 24.7463 17.2569 24.7498 17.2546 24.7504C15.186 25.8142 13.6417 25.9369 13.1792 25.4785ZM22.6936 28.0246C22.0597 28.1944 20.8056 27.3173 19.5214 25.332C19.4446 25.2264 19.4689 25.0816 19.5745 25.0047C19.5767 25.0041 19.5784 25.0013 19.5784 25.0013C20.2149 24.5784 20.8303 24.1223 21.4202 23.6343C21.473 23.5958 21.5363 23.5789 21.6013 23.5857C22.388 23.7146 23.1626 23.7982 23.8798 23.8487C24.0084 23.8579 24.1047 23.9728 24.0955 24.1015C24.0961 24.1038 24.0945 24.1066 24.0945 24.1066C23.975 26.468 23.3275 27.8547 22.6936 28.0246ZM29.6603 21.0624C29.4889 21.6906 28.0902 22.3566 25.7442 22.4756C25.7128 22.4781 25.6812 22.4743 25.6513 22.4644C25.6213 22.4544 25.5937 22.4386 25.5701 22.4178C25.5464 22.397 25.5271 22.3716 25.5134 22.3432C25.4997 22.3148 25.4919 22.284 25.4903 22.2525C25.4381 21.5143 25.3572 20.7595 25.2415 19.9655C25.2313 19.9003 25.2478 19.8352 25.2896 19.7828C25.7754 19.1964 26.2267 18.5805 26.6401 17.9408C26.7139 17.8361 26.8567 17.8075 26.9631 17.8785C28.9349 19.17 29.809 20.4402 29.6603 21.0624Z" fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_7_17184" x="-1.64783" y="4.49419e-05" width="44.7423" height="45.7423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="5" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_17184" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_17184" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_7_17184">
                                            <rect width="30" height="30" fill="white" transform="translate(2.35217 7.76457) rotate(-15)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Solutions</span>

                        </motion.h2>
                    </div>



                    <div className="lg:col-span-5">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-[#000000] mb-4 uppercase text-sm tracking-wide"
                        >
                            Our Mission
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-[#616161]  text-sm lg:text-base font-medium tracking-[0.02em] text-justify"
                        >
                            "To revolutionize the digital landscape by delivering innovative, reliable, and user-centric technology solutions that empower businesses and individuals worldwide."
                        </motion.p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 h-auto ">

                    {/* Column 1 (Revenue & Open Collaboration) */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 lg:gap-6">
                        {/* Revenue Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 bg-white rounded-3xl p-4 md:p-5 flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow relative overflow-hidden h-[180px] md:h-auto"
                        >
                            {/* Decoration Icon */}
                            <div className="absolute -top-6 md:-top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-53 md:h-53">
                                <img src="/about-gear.png" alt="Gear" className="w-[180%] h-full object-contain" />
                            </div>

                            <div className="mt-14 md:mt-20 flex flex-col justify-end h-full ">
                                <p className="text-[10px] md:text-sm font-bold text-gray-900 mb-1 leading-tight">Powered by smart integrations</p>
                                <h3 className="text-2xl md:text-[50px] font-bold text-[#111827] mb-1">$ <Counter from={0} to={3.2} decimals={1} /> <span className="text-lg md:text-2xl text-[#616161] font-medium">M+</span></h3>
                                <p className="text-[10px] md:text-xs text-[#616161] font-medium leading-tight">Revenue optimized for our clients</p>
                            </div>
                        </motion.div>

                        {/* Open for Collab Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="min-h-[3rem] md:h-16 bg-white rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 flex items-center justify-center gap-2 md:gap-3 border border-gray-300 shadow-sm"
                        >
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_7_17197)">
                                        <path d="M20 10V10.5C19.9375 11.125 19.875 11.75 19.75 12.375C19.25 14.5 18.0625 16.3125 16.4375 17.6875C16.375 17.75 16.25 17.8125 16.1875 17.875C15.625 18.3125 15 18.6875 14.3125 19C14.1875 19.0625 14.0625 19.125 13.9375 19.1875C13.6875 19.3125 13.4375 19.375 13.1875 19.4375C12.875 19.5625 12.5625 19.625 12.25 19.6875C11.5 19.9375 10.75 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10Z" fill="#26AD5F" />
                                        <path d="M20 10.5C19.9375 11.125 19.875 11.75 19.75 12.375C19.25 14.5 18.0625 16.3125 16.4375 17.6875C16.375 17.75 16.25 17.8125 16.1875 17.875C15.625 18.3125 15 18.6875 14.3125 19C14.1875 19.0625 14.0625 19.125 13.9375 19.1875C13.6875 19.3125 13.4375 19.375 13.1875 19.4375C13.1875 19.4375 7.74997 14 7.68747 13.9375L4.49997 10.3125C4.12497 9.87502 4.12497 9.18752 4.62497 8.75002C5.06247 8.37502 5.74997 8.37502 6.18747 8.87502C6.24997 8.93752 8.68747 11.375 8.74997 11.4375L13.875 5.93752C14.3125 5.50002 15 5.50002 15.4375 5.87502C15.4375 5.93752 20 10.5 20 10.5Z" fill="#00A053" />
                                        <path d="M8.49997 14.375C8.18747 14.375 7.87497 14.25 7.68747 14L4.49997 10.375C4.12497 9.93752 4.12497 9.25002 4.62497 8.81252C5.06247 8.43752 5.74997 8.43752 6.18747 8.93752L8.56247 11.6875L13.875 6.00002C14.3125 5.56252 15 5.56252 15.4375 5.93752C15.875 6.37502 15.875 7.06252 15.5 7.50002L9.37497 14.0625C9.06247 14.25 8.81247 14.375 8.49997 14.375Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7_17197">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <span className="font-bold text-[#616161] text-[10px] md:text-sm leading-tight">Open for collaboration</span>
                        </motion.div>
                    </div>

                    {/* Column 2 (Trusted & Performance) */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 lg:gap-6">
                        {/* Trusted Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="min-h-[3rem] md:h-16 bg-white rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 flex items-center gap-2 md:gap-3 border border-gray-300 shadow-sm"
                        >
                            {/* Avatar Stack */}
                            <div className="flex -space-x-1.5 md:-space-x-2 shrink-0">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" />
                                    </div>
                                ))}
                            </div>
                            <span className="font-bold text-gray-600 text-[10px] md:text-sm whitespace-normal leading-tight">Trusted by 500+ CEOs</span>
                        </motion.div>

                        {/* Performance Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex-1 bg-white rounded-3xl p-4 md:p-5 flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow md:h-auto"
                        >
                            <div>
                                <p className="text-[10px] md:text-sm font-bold text-gray-800 leading-snug">
                                    Seamless and <br />
                                    Reliable performance
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-1"><Counter from={0} to={98} /><span className="text-2xl md:text-6xl">%</span></h3>
                                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-bold">Performance up time</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Column 3 (Purple Description Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="col-span-2 lg:col-span-5 bg-[#59257A] rounded-3xl p-10 flex flex-col justify-between text-white relative overflow-hidden group"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                        <div className="relative z-10">
                            <p className="text-white mb-6 text-sm lg:text-base leading-tight">
                                At Ellipza Technologies, our mission is to transform ideas into impactful solutions by combining cutting-edge technology with exceptional design and development expertise. We strive to exceed expectations, foster innovation, and provide tailored software, mobile, and web solutions that drive growth and efficiency for our clients.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between mt-auto pt-8 ">
                            <div>
                                <h3 className="text-6xl font-bold mb-1"><Counter from={0} to={49} />+</h3>
                                <p className="text-white text-sm font-medium mt-3">Projects completed <br /> successfully</p>
                            </div>

                            <button className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                More <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
