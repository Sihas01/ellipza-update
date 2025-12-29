"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="solution" className="py-24 bg-white relative overflow-hidden font-sans">
            {/* Background Wave */}
            <div className="absolute top-0 left-0 w-full pointer-events-none opacity-100 z-0">
                <img src="/services-wave.png" alt="" className="w-full h-auto opacity-60" />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24  relative z-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-[16px] mb-4 uppercase pl-3 border-l-4 border-[#59257A]"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-[#b4b4b4] leading-tight"
                        >
                            <svg width="478" height="32" viewBox="0 0 478 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-6">
                                <g filter="url(#filter0_i_7_25196)">
                                    <path d="M21.2666 30.5977L19.0107 23.4199H8.61328L6.35742 30.5977H0L10.2744 1.00488H17.5547L27.8496 30.5977H21.2666ZM13.7402 6.66504L9.94629 18.7852H17.6777L13.8838 6.66504H13.7402ZM49.5264 16.7959H43.9688C43.6201 14.4785 42.082 12.8379 39.6211 12.8379C36.668 12.8379 34.8223 15.3398 34.8223 19.585C34.8223 23.9121 36.668 26.373 39.6416 26.373C42.041 26.373 43.5996 24.9375 43.9688 22.5381H49.5469C49.2393 27.7266 45.3633 31.0693 39.5801 31.0693C32.9561 31.0693 28.752 26.7627 28.752 19.585C28.752 12.5303 32.9561 8.1416 39.5391 8.1416C45.4863 8.1416 49.2598 11.8125 49.5264 16.7959ZM72.4131 16.7959H66.8555C66.5068 14.4785 64.9688 12.8379 62.5078 12.8379C59.5547 12.8379 57.709 15.3398 57.709 19.585C57.709 23.9121 59.5547 26.373 62.5283 26.373C64.9277 26.373 66.4863 24.9375 66.8555 22.5381H72.4336C72.126 27.7266 68.25 31.0693 62.4668 31.0693C55.8428 31.0693 51.6387 26.7627 51.6387 19.585C51.6387 12.5303 55.8428 8.1416 62.4258 8.1416C68.373 8.1416 72.1465 11.8125 72.4131 16.7959ZM85.1895 12.5713C82.5645 12.5713 80.6777 14.5605 80.4727 17.3086H89.8037C89.6807 14.499 87.8555 12.5713 85.1895 12.5713ZM89.8857 23.8711H95.3818C94.7256 28.1777 90.7881 31.0693 85.3535 31.0693C78.5859 31.0693 74.5254 26.7422 74.5254 19.708C74.5254 12.6943 78.627 8.1416 85.1279 8.1416C91.5264 8.1416 95.5664 12.4688 95.5664 19.1543V20.9795H80.4111V21.3486C80.4111 24.4863 82.4004 26.6396 85.4561 26.6396C87.6504 26.6396 89.332 25.5527 89.8857 23.8711ZM98.8066 30.5977V1.00488H104.795V30.5977H98.8066ZM118.699 12.5713C116.074 12.5713 114.188 14.5605 113.982 17.3086H123.313C123.19 14.499 121.365 12.5713 118.699 12.5713ZM123.396 23.8711H128.892C128.235 28.1777 124.298 31.0693 118.863 31.0693C112.096 31.0693 108.035 26.7422 108.035 19.708C108.035 12.6943 112.137 8.1416 118.638 8.1416C125.036 8.1416 129.076 12.4688 129.076 19.1543V20.9795H113.921V21.3486C113.921 24.4863 115.91 26.6396 118.966 26.6396C121.16 26.6396 122.842 25.5527 123.396 23.8711ZM132.173 30.5977V8.61328H137.956V12.5713H138.079C138.858 9.78223 140.725 8.26465 143.309 8.26465C144.006 8.26465 144.601 8.36719 145.011 8.49023V13.7607C144.519 13.5557 143.698 13.4121 142.837 13.4121C139.884 13.4121 138.161 15.2168 138.161 18.3135V30.5977H132.173ZM155.429 26.6191C158.033 26.6191 160.187 24.917 160.187 22.5381V20.9385L155.552 21.2256C153.316 21.3896 152.045 22.3945 152.045 23.9531C152.045 25.5938 153.398 26.6191 155.429 26.6191ZM153.46 30.9463C149.276 30.9463 146.098 28.2393 146.098 24.2812C146.098 20.2822 149.174 17.9648 154.649 17.6367L160.187 17.3086V15.8525C160.187 13.8018 158.751 12.6123 156.495 12.6123C154.26 12.6123 152.845 13.7197 152.558 15.3398H147.082C147.308 11.0742 150.938 8.1416 156.762 8.1416C162.401 8.1416 166.072 11.0537 166.072 15.4834V30.5977H160.289V27.2344H160.166C158.936 29.5723 156.208 30.9463 153.46 30.9463ZM171.548 3.54785H177.536V8.61328H181.597V13.125H177.536V23.6455C177.536 25.3271 178.356 26.127 180.12 26.127C180.653 26.127 181.207 26.0859 181.576 26.0244V30.4336C180.961 30.5771 179.936 30.6797 178.726 30.6797C173.558 30.6797 171.548 28.957 171.548 24.6709V13.125H168.451V8.61328H171.548V3.54785ZM194.414 12.5713C191.789 12.5713 189.902 14.5605 189.697 17.3086H199.028C198.905 14.499 197.08 12.5713 194.414 12.5713ZM199.11 23.8711H204.606C203.95 28.1777 200.013 31.0693 194.578 31.0693C187.811 31.0693 183.75 26.7422 183.75 19.708C183.75 12.6943 187.852 8.1416 194.353 8.1416C200.751 8.1416 204.791 12.4688 204.791 19.1543V20.9795H189.636V21.3486C189.636 24.4863 191.625 26.6396 194.681 26.6396C196.875 26.6396 198.557 25.5527 199.11 23.8711ZM229.831 30.5977H216.727V1.00488H229.605C235.163 1.00488 238.649 3.85547 238.649 8.3877C238.649 11.6279 236.229 14.335 233.092 14.8066V14.9707C237.111 15.2783 240.064 18.2109 240.064 22.1279C240.064 27.3369 236.147 30.5977 229.831 30.5977ZM222.92 5.61914V13.3096H227.37C230.672 13.3096 232.559 11.8535 232.559 9.35156C232.559 6.97266 230.897 5.61914 228.006 5.61914H222.92ZM222.92 25.9834H228.252C231.82 25.9834 233.748 24.4658 233.748 21.6357C233.748 18.8672 231.759 17.3906 228.108 17.3906H222.92V25.9834ZM263.382 8.61328V30.5977H257.599V26.6396H257.476C256.389 29.4082 254.215 31.0078 250.893 31.0078C246.135 31.0078 242.977 27.9111 242.977 22.7842V8.61328H248.965V21.5332C248.965 24.4658 250.421 26.0244 253.066 26.0244C255.732 26.0244 257.394 24.1172 257.394 21.2051V8.61328H263.382ZM266.909 15.0732C266.909 10.8896 270.539 8.1416 276.179 8.1416C281.695 8.1416 285.284 10.9307 285.366 15.1963H279.85C279.727 13.4326 278.312 12.3457 276.097 12.3457C274.025 12.3457 272.672 13.2891 272.672 14.7041C272.672 15.791 273.615 16.5293 275.543 16.9805L279.747 17.8828C284.156 18.8672 285.94 20.6104 285.94 23.8916C285.94 28.2188 281.962 31.0693 276.158 31.0693C270.293 31.0693 266.684 28.2393 266.355 23.9531H272.2C272.487 25.7988 273.943 26.8652 276.322 26.8652C278.599 26.8652 279.973 25.9629 279.973 24.5273C279.973 23.4199 279.234 22.8047 277.266 22.333L273.205 21.4307C269.042 20.4873 266.909 18.3135 266.909 15.0732ZM289.037 30.5977V8.61328H295.025V30.5977H289.037ZM292.031 6.19336C290.227 6.19336 288.832 4.81934 288.832 3.09668C288.832 1.35352 290.227 0 292.031 0C293.836 0 295.23 1.35352 295.23 3.09668C295.23 4.81934 293.836 6.19336 292.031 6.19336ZM299.024 30.5977V8.61328H304.808V12.5303H304.931C306.1 9.80273 308.417 8.20312 311.801 8.20312C316.682 8.20312 319.43 11.2793 319.43 16.4268V30.5977H313.441V17.6777C313.441 14.8066 312.088 13.166 309.401 13.166C306.715 13.166 305.013 15.1348 305.013 17.9854V30.5977H299.024ZM333.088 12.5713C330.463 12.5713 328.576 14.5605 328.371 17.3086H337.702C337.579 14.499 335.754 12.5713 333.088 12.5713ZM337.784 23.8711H343.28C342.624 28.1777 338.687 31.0693 333.252 31.0693C326.484 31.0693 322.424 26.7422 322.424 19.708C322.424 12.6943 326.525 8.1416 333.026 8.1416C339.425 8.1416 343.465 12.4688 343.465 19.1543V20.9795H328.31V21.3486C328.31 24.4863 330.299 26.6396 333.354 26.6396C335.549 26.6396 337.23 25.5527 337.784 23.8711ZM346.192 15.0732C346.192 10.8896 349.822 8.1416 355.462 8.1416C360.979 8.1416 364.567 10.9307 364.649 15.1963H359.133C359.01 13.4326 357.595 12.3457 355.38 12.3457C353.309 12.3457 351.955 13.2891 351.955 14.7041C351.955 15.791 352.898 16.5293 354.826 16.9805L359.03 17.8828C363.439 18.8672 365.224 20.6104 365.224 23.8916C365.224 28.2188 361.245 31.0693 355.441 31.0693C349.576 31.0693 345.967 28.2393 345.639 23.9531H351.483C351.771 25.7988 353.227 26.8652 355.605 26.8652C357.882 26.8652 359.256 25.9629 359.256 24.5273C359.256 23.4199 358.518 22.8047 356.549 22.333L352.488 21.4307C348.325 20.4873 346.192 18.3135 346.192 15.0732ZM367.849 15.0732C367.849 10.8896 371.479 8.1416 377.118 8.1416C382.635 8.1416 386.224 10.9307 386.306 15.1963H380.789C380.666 13.4326 379.251 12.3457 377.036 12.3457C374.965 12.3457 373.611 13.2891 373.611 14.7041C373.611 15.791 374.555 16.5293 376.482 16.9805L380.687 17.8828C385.096 18.8672 386.88 20.6104 386.88 23.8916C386.88 28.2188 382.901 31.0693 377.098 31.0693C371.232 31.0693 367.623 28.2393 367.295 23.9531H373.14C373.427 25.7988 374.883 26.8652 377.262 26.8652C379.538 26.8652 380.912 25.9629 380.912 24.5273C380.912 23.4199 380.174 22.8047 378.205 22.333L374.145 21.4307C369.981 20.4873 367.849 18.3135 367.849 15.0732ZM429.044 8.61328L423.22 30.5977H416.842L412.863 15.0527H412.74L408.782 30.5977H402.486L396.642 8.61328H402.671L405.993 24.917H406.116L410.013 8.61328H415.755L419.672 24.917H419.795L423.138 8.61328H429.044ZM431.484 30.5977V8.61328H437.473V30.5977H431.484ZM434.479 6.19336C432.674 6.19336 431.279 4.81934 431.279 3.09668C431.279 1.35352 432.674 0 434.479 0C436.283 0 437.678 1.35352 437.678 3.09668C437.678 4.81934 436.283 6.19336 434.479 6.19336ZM443.071 3.54785H449.06V8.61328H453.12V13.125H449.06V23.6455C449.06 25.3271 449.88 26.127 451.644 26.127C452.177 26.127 452.73 26.0859 453.1 26.0244V30.4336C452.484 30.5771 451.459 30.6797 450.249 30.6797C445.081 30.6797 443.071 28.957 443.071 24.6709V13.125H439.975V8.61328H443.071V3.54785ZM456.545 30.5977V1.00488H462.431V12.5303H462.554C463.723 9.76172 466.122 8.20312 469.465 8.20312C474.346 8.20312 477.135 11.3613 477.135 16.4473V30.5977H471.146V17.7188C471.146 14.8887 469.752 13.166 467.024 13.166C464.194 13.166 462.533 15.1553 462.533 18.0469V30.5977H456.545Z" fill="#D2D2D2" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_7_25196" x="0" y="0" width="477.135" height="32.0693" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_25196" />
                                    </filter>
                                </defs>
                            </svg>

                            <span className="text-[#0f172a] inline-flex items-center gap-2">
                                Premium
                                <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                                    <g filter="url(#filter0_d_11_13)">
                                        <g clip-path="url(#clip0_11_13)">
                                            <path d="M28.9576 0.520836L5.41316 6.82955C4.41252 7.09767 3.81922 8.12531 4.08734 9.12595L10.3961 32.6704C10.6642 33.671 11.6918 34.2643 12.6924 33.9962L36.2369 27.6875C37.2375 27.4194 37.8308 26.3917 37.5627 25.3911L31.254 1.84666C30.9859 0.846022 29.9582 0.252715 28.9576 0.520836Z" fill="#166C71" />
                                            <path d="M27.5314 0.902997L5.29997 6.85988C4.85154 6.98353 4.46977 7.27868 4.23718 7.68153C4.0046 8.08438 3.93988 8.56257 4.05701 9.01275L9.99569 31.1762C10.2446 32.1141 11.2062 32.6693 12.144 32.4204L34.3573 26.4684C35.2952 26.2195 35.8504 25.2579 35.6015 24.32L29.6616 2.15202C29.4363 1.22969 28.5035 0.664351 27.5812 0.889652L27.5314 0.902997Z" fill="#34A3A8" />
                                            <path opacity="0.3" d="M12.2241 7.16416C12.0846 6.64347 11.6799 6.58205 9.6153 7.20805C7.8903 7.74305 7.08462 8.17731 6.73377 8.95072C6.38293 9.72413 6.59286 11.0509 6.98271 12.5965C7.27389 13.6831 7.54686 14.7019 8.11283 14.5502C8.88255 14.344 8.40333 12.5555 8.77032 11.3895C9.46507 9.09239 12.4061 7.84333 12.2241 7.16416Z" fill="#FAFAFA" />
                                            <path d="M14.818 26.9623L16.5657 26.428L14.9627 21.1846L13.2149 21.719L14.818 26.9623ZM23.3521 25.3087L20.6206 25.5323L17.8758 25.7121C17.7188 25.7285 17.561 25.6887 17.4306 25.5998C17.2973 25.5159 17.1997 25.3858 17.1564 25.2345L16.0877 21.7389C16.0445 21.5885 16.0525 21.428 16.1107 21.2828C16.1734 21.1388 16.2808 21.0188 16.417 20.9407L20.4366 19.148L24.4622 17.3439L24.7429 17.7932L25.0209 18.2337C25.0725 18.3942 25.0752 18.5663 25.0288 18.7282C24.9917 18.8941 24.9041 19.0444 24.7781 19.1585L23.1639 20.1297L21.5497 21.101L23.1417 21.245L24.7398 21.3775L26.5525 20.2117L28.2995 19.0183C28.4578 18.9224 28.6473 18.8919 28.8277 18.9333C28.9178 18.9514 29.0031 18.9879 29.0784 19.0405C29.1537 19.0931 29.2173 19.1607 29.2652 19.2391L29.637 19.8612L30.0148 20.4719C30.1052 20.6259 30.1337 20.8085 30.0945 20.9827C30.0504 21.1598 29.94 21.3133 29.786 21.4114L26.881 23.2551L23.976 25.0989C23.8757 25.1443 23.7699 25.1767 23.6614 25.1951C23.5652 25.2497 23.4607 25.2881 23.3521 25.3087ZM15.5193 10.5032L14.3059 12.7853L13.0925 15.0674L15.3746 16.2808L17.6567 17.4943L18.0814 16.6955L18.5061 15.8968L17.0227 15.1081L15.5394 14.3193L16.3281 12.836L17.1168 11.3526L16.3181 10.9279L15.5193 10.5032ZM20.7626 8.90013L20.3379 9.69887L19.9133 10.4976L21.3966 11.2863L22.88 12.0751L22.0913 13.5584L21.3026 15.0418L22.1013 15.4665L22.9 15.8912L24.1135 13.6091L25.3269 11.327L23.0448 10.1136L20.7626 8.90013Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_11_13" x="-0.414307" y="1.61627e-05" width="42.5017" height="43.4974" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="5" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_13" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_13" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_11_13">
                                            <rect x="3.58569" y="7.2914" width="28.1718" height="28.1657" rx="2" transform="rotate(-15 3.58569 7.2914)" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                Services
                            </span>
                        </motion.h2>
                    </div>

                    <div className="max-w-xl pt-2 ">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#616161]  text-sm lg:text-base font-medium tracking-[0.02em] text-justify"
                        >
                            Ellipza Technologies is a forward-thinking IT company dedicated to crafting high-quality technology solutions tailored to the unique needs of our clients. We specialize in the following key areas:
                        </motion.p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col gap-8">

                    {/* Top Row: Mobile (Left) + Software/Web (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Mobile App Development - Vertical Tall Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-5 bg-gray-50 rounded-[2.5rem] p-10 pb-0 flex flex-col justify-between overflow-hidden relative group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-[32px] font-bold text-[#111827] mb-6">Mobile App <br /> Development</h3>
                                <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                    Our team creates feature-rich iOS and Android applications that combine advanced functionality with intuitive design for an engaging user experience.
                                </p>
                            </div>

                            {/* Fixed: Use margin-top (mt-12) instead of translate-y-12 to strictly occupy layout space and prevent overlap */}
                            <div className="relative w-full flex justify-center mt-auto pt-8">
                                <div className="w-[85%] mt-12">
                                    <img src="/mobileImg.png" alt="Mobile App" className="w-full h-auto object-contain drop-shadow-2xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Software + Web */}
                        <div className="lg:col-span-7 flex flex-col gap-8">

                            {/* Software Development - Text Top, Image Bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex-1 bg-gray-50 rounded-[2.5rem] p-10 pb-0 flex flex-col justify-between gap-6 overflow-hidden relative group"
                            >
                                <div className="w-full relative z-10">
                                    <h3 className="text-[32px] font-bold text-[#111827] mb-6">Software Development</h3>
                                    <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                        We deliver robust, scalable, and secure software solutions—from enterprise applications to custom builds—ensuring high performance and seamless integration.
                                    </p>
                                </div>
                                <div className="w-full flex justify-center items-end mt-auto">
                                    <img src="/softwareDevImg.png" alt="Software Development" className="h-48 lg:h-52 w-auto object-contain" />
                                </div>
                            </motion.div>

                            {/* Web Development - Text Top, Image Bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex-1 bg-gray-50 rounded-[2.5rem] p-10 pb-0 flex flex-col justify-between gap-6 overflow-hidden relative group"
                            >
                                <div className="w-full relative z-10">
                                    <h3 className="text-[32px] font-bold text-[#111827] mb-6">Web Development</h3>
                                    <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                        We develop responsive, SEO-friendly websites ranging from high-speed static pages to dynamic web applications and comprehensive e-commerce platforms.
                                    </p>
                                </div>
                                <div className="w-full flex justify-center items-end mt-auto">
                                    <img src="/webDevImg.png" alt="Web Development" className="h-48 lg:h-52 w-auto object-contain" />
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Bottom Grid: 2x2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Networking */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-full relative z-10 mb-4">
                                <h3 className="text-[32px] font-bold text-[#111827] mb-6">Networking & Infrastructure</h3>
                                <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                    We provide expert physical infrastructure solutions, including professional firewall installations and AP switch configurations to ensure secure, high-speed connectivity.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/networkingImg.png" alt="Networking" className="w-full h-auto object-contain max-h-[200px]" />
                            </div>
                        </motion.div>

                        {/* Artificial Intelligence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative z-10">
                                <h3 className="text-[32px] font-bold text-[#111827] mb-6">Artificial  Intelligence</h3>
                                <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                    We leverage machine learning and natural language processing to build smart systems that enhance decision-making and provide predictive business insights.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/aiImg.png" alt="AI" className="w-full h-auto object-contain max-h-[200px]" />
                            </div>
                        </motion.div>

                        {/* UI/UX Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative z-10">
                                <h3 className="text-[32px] font-bold text-[#111827] mb-6">UI/UX  Design</h3>
                                <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                    Our design-first approach ensures every interface is visually appealing and user-friendly, aligning with your brand to maximize satisfaction and engagement.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/uiuxImg.png" alt="UI/UX" className="w-full h-auto object-contain max-h-[200px]" />
                            </div>
                        </motion.div>

                        {/* Digital Marketing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative z-10 ">
                                <h3 className="text-[32px] font-bold text-[#111827] mb-6">Digital Marketing</h3>
                                <p className="text-[#616161] text-[15px] leading-[19px] mb-6">
                                    Our data-driven marketing strategies focus on SEO and brand identity to amplify your online presence and drive measurable growth for your business.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/marketingImg.png" alt="Marketing" className="w-full h-auto object-contain opacity-90 max-h-[200px]" />
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
