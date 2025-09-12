import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const JumpingChameleon = () => {
    const [color, setColor] = useState("#1abc9c");
    const [isChangingColor, setIsChangingColor] = useState(false);
    const [isJumping, setIsJumping] = useState(true);

    // Color palette
    const colors = ["#1abc9c", "#3498db", "#9b59b6", "#e74c3c", "#f1c40f", "#2ecc71"];

    const changeColor = () => {
        if (isChangingColor) return;

        setIsChangingColor(true);

        let colorIndex = 0;
        const interval = setInterval(() => {
            colorIndex = (colorIndex + 1) % colors.length;
            setColor(colors[colorIndex]);
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            setIsChangingColor(false);
        }, 3000);
    };

    // Toggle jumping animation on double click
    const toggleJumping = () => {
        setIsJumping(!isJumping);
    };

    // Jumping animation
    const jumpVariants = {
        jump: {
            y: [0, -15, 0],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            },
        },
        still: {
            y: 0
        }
    };

    // Spin animation on right click (prevent context menu)
    const handleRightClick = (e) => {
        e.preventDefault();
        const spinAnim = {
            rotate: [0, 360],
            transition: { duration: 0.8 }
        };

        // Apply animation directly
        e.currentTarget.animate(
            [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ],
            {
                duration: 800,
                easing: 'ease-in-out'
            }
        );
    };

    return (
        <motion.div
            className="cursor-pointer fixed"
            style={{ top: "400px", left: "5px", zIndex: 50 }}
            variants={jumpVariants}
            animate={isJumping ? "jump" : "still"}
            onClick={changeColor}
            onDoubleClick={toggleJumping}
            onContextMenu={handleRightClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
            {/* Placeholder for SVG */}
            <div style={{ width: "96px", height: "96px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                <linearGradient id="AXcV_GK9ghWmPNeO~_E~Ya_ztKGqjsWmeBH_gr1" x1="15.865" x2="15.865" y1="45.837" y2="40.453" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Ya_ztKGqjsWmeBH_gr1)" d="M23.5,38C23,41,21,42,18,42c-4.71,0-8.18-4.31-9.45-11c-0.04-0.16-0.07-0.33-0.1-0.5	c-0.03-0.16-0.06-0.33-0.08-0.5c-0.05-0.33-0.1-0.66-0.14-1h2.38c0.01,0.33,0.02,0.66,0.06,1c0.01,0.16,0.03,0.33,0.05,0.5	c0.02,0.16,0.04,0.33,0.07,0.5C11,32.31,11.4,33.67,12,35c2.5,5.5,5.5,5,6,5s3,0,3-2.5c0-1-1-3-1.5-4c-1,0-2,0.5-3,1.5	c0.5,2,2,1.5,1.5,0c2,1,1,2.5-0.5,2.5c-1,0-2.5-1.5-2.5-3c0.5-1,2-2,3-2.5c1.5,0,2.5,0,3.5,1C22.5,34.5,23.5,36.5,23.5,38z"></path><radialGradient id="AXcV_GK9ghWmPNeO~_E~Yb_ztKGqjsWmeBH_gr2" cx="41.411" cy="9.997" r="7.826" gradientTransform="matrix(.7738 .6335 -.8491 1.0372 17.857 -26.604)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f9f9f9"></stop><stop offset=".26" stop-color="#f0f1f2"></stop><stop offset=".678" stop-color="#d9dcdf"></stop><stop offset="1" stop-color="#c2c8cc"></stop></radialGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yb_ztKGqjsWmeBH_gr2)" d="M40,7c2.5,0,4,1,4,4s-2.5,6.5-5,7s-6-3-6-3s-0.5-3.5,1-5S38,7,40,7z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yc_ztKGqjsWmeBH_gr3" x1="39.087" x2="42.543" y1="10.087" y2="13.543" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d6d6d"></stop><stop offset=".126" stop-color="#626262"></stop><stop offset=".886" stop-color="#464646"></stop><stop offset="1" stop-color="#454545"></stop></linearGradient><circle cx="41" cy="12" r="1" fill="url(#AXcV_GK9ghWmPNeO~_E~Yc_ztKGqjsWmeBH_gr3)"></circle><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yd_ztKGqjsWmeBH_gr4" x1="34.5" x2="34.5" y1="32.239" y2="30.771" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yd_ztKGqjsWmeBH_gr4)" d="M32,29.9c0.417,0.4,0.833,1.6,2.5,1.6s2.5-2,2.5-2h-5V29.9z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Ye_ztKGqjsWmeBH_gr5" x1="18.11" x2="18.11" y1="28.938" y2="26.318" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Ye_ztKGqjsWmeBH_gr5)" d="M19.72,25.37c-0.01,0.17-0.02,0.34-0.03,0.5C19.62,26.5,19.5,27,19.5,27L18,27.5L16.5,27	c0,0,0.5-0.5,1-1c0.11-0.11,0.21-0.23,0.31-0.38c0.1-0.14,0.19-0.3,0.26-0.46c0.06-0.16,0.11-0.32,0.13-0.48	c0.03-0.26-0.02-0.5-0.2-0.68c0,0,0,0,1.5,0c0.12,0.24,0.18,0.55,0.21,0.87C19.72,25.04,19.72,25.21,19.72,25.37z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yf_ztKGqjsWmeBH_gr6" x1="17.938" x2="27.244" y1="6.406" y2="31.975" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yf_ztKGqjsWmeBH_gr6)" d="M41,21c0,1-4.5,4.5-9,2.5C28.5,25,25,24,25,24c-2,1-8.5,2-11-2c-2.22,0.95-3.43,3.71-3.39,7	H8.23C8.08,27.74,8,26.4,8,25c0-9,5-15,11-15s8.09,3.92,16,5.5C40,16.5,41,20,41,21z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yg_ztKGqjsWmeBH_gr7" x1="23.12" x2="23.12" y1="26.598" y2="29.439" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffcf7b"></stop><stop offset=".196" stop-color="#fecd76"></stop><stop offset=".439" stop-color="#fac666"></stop><stop offset=".709" stop-color="#f3bc4d"></stop><stop offset=".995" stop-color="#eaad2a"></stop><stop offset="1" stop-color="#eaad29"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yg_ztKGqjsWmeBH_gr7)" d="M42.74,29.53L40,30H4c-0.28,0-0.5-0.22-0.5-0.5v-1.19c0-0.19,0.11-0.36,0.28-0.45l1.61-0.81	C5.46,27.02,5.54,27,5.62,27H40l2.74,0.47V29.53z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yh_ztKGqjsWmeBH_gr8" x1="23" x2="23" y1="22.978" y2="29.716" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffcf7b"></stop><stop offset=".196" stop-color="#fecd76"></stop><stop offset=".439" stop-color="#fac666"></stop><stop offset=".709" stop-color="#f3bc4d"></stop><stop offset=".995" stop-color="#eaad2a"></stop><stop offset="1" stop-color="#eaad29"></stop></linearGradient><rect width="34" height="1.5" x="6" y="28.5" fill="url(#AXcV_GK9ghWmPNeO~_E~Yh_ztKGqjsWmeBH_gr8)"></rect><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yi_ztKGqjsWmeBH_gr9" x1="18.901" x2="28.25" y1="6.017" y2="31.703" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yi_ztKGqjsWmeBH_gr9)" d="M23.897,21.992C23.334,22.774,23.5,25.5,25,27c1,1,0,4,1.5,4s0.5-1.382,0.5-2.5	c0-0.5,1-1,1.5-1.5c0-1-1-1.5-2,0c-1-0.5-1.5-2-0.5-5C24.5,22,23.897,21.992,23.897,21.992z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yj_ztKGqjsWmeBH_gr10" x1="8.303" x2="17.659" y1="9.919" y2="35.622" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yj_ztKGqjsWmeBH_gr10)" d="M14,22c-0.5,0.5-1.5,2.5,0,4.5c-1,0.5-2,1-2,2s2,2,3.5,2s-1-1-1.5-2s1-1.5,2-1.5	c-0.5-0.5-2-2.5,0-4.5c-1-1-2-1-2-1V22z"></path><radialGradient id="AXcV_GK9ghWmPNeO~_E~Yk_ztKGqjsWmeBH_gr11" cx="28.897" cy="9.38" r="9.497" gradientTransform="matrix(.9962 -.0867 .1094 1.2571 -.917 .093)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f9f9f9"></stop><stop offset=".26" stop-color="#f0f1f2"></stop><stop offset=".678" stop-color="#d9dcdf"></stop><stop offset="1" stop-color="#c2c8cc"></stop></radialGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yk_ztKGqjsWmeBH_gr11)" d="M29,5c-2,0-5,2-5,7s3,7.5,6,7.5c2,0,5-2.5,5-6.5C35,9.5,33,5,29,5z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yl_ztKGqjsWmeBH_gr12" x1="25.924" x2="30.255" y1="10.924" y2="15.255" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d6d6d"></stop><stop offset=".126" stop-color="#626262"></stop><stop offset=".886" stop-color="#464646"></stop><stop offset="1" stop-color="#454545"></stop></linearGradient><circle cx="28.5" cy="13.5" r="1.5" fill="url(#AXcV_GK9ghWmPNeO~_E~Yl_ztKGqjsWmeBH_gr12)"></circle><linearGradient id="AXcV_GK9ghWmPNeO~_E~Ym_ztKGqjsWmeBH_gr13" x1="4.375" x2="4.375" y1="24.853" y2="30.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f9f9f9"></stop><stop offset=".26" stop-color="#f0f1f2"></stop><stop offset=".678" stop-color="#d9dcdf"></stop><stop offset="1" stop-color="#c2c8cc"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Ym_ztKGqjsWmeBH_gr13)" d="M7.161,28.177c-0.103,0.205-0.113,0.445-0.027,0.658L7.6,30H1.5C1.224,30,1,29.776,1,29.5	v-1.19c0-0.19,0.107-0.363,0.276-0.448L2.89,27.05c0.06-0.014,0.151-0.036,0.211-0.05H7.75L7.161,28.177z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yn_ztKGqjsWmeBH_gr14" x1="5.391" x2="1.397" y1="28.5" y2="28.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f09ca2"></stop><stop offset="1" stop-color="#eb6773"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yn_ztKGqjsWmeBH_gr14)" d="M4.254,28.508L5,30H1.5C1.224,30,1,29.776,1,29.5v-1.19c0-0.19,0.107-0.363,0.276-0.448	L2.89,27.05c0.06-0.014,0.151-0.036,0.211-0.05H5l-0.599,0.599C4.162,27.838,4.102,28.205,4.254,28.508z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yo_ztKGqjsWmeBH_gr15" x1="43.239" x2="43.239" y1="24.853" y2="30.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f9f9f9"></stop><stop offset=".26" stop-color="#f0f1f2"></stop><stop offset=".678" stop-color="#d9dcdf"></stop><stop offset="1" stop-color="#c2c8cc"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yo_ztKGqjsWmeBH_gr15)" d="M46.71,28.85l-3.97,0.68L40,30h-0.5c0,0-0.057-0.757,0-1c0.064-0.272,0.436-0.728,0.5-1	c0.057-0.243,0-1,0-1l2.74,0.47l3.97,0.68C47.1,28.22,47.1,28.78,46.71,28.85z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yp_ztKGqjsWmeBH_gr16" x1="41.946" x2="45.831" y1="28.5" y2="28.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d6d6d"></stop><stop offset=".126" stop-color="#626262"></stop><stop offset=".886" stop-color="#464646"></stop><stop offset="1" stop-color="#454545"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yp_ztKGqjsWmeBH_gr16)" d="M46.71,28.85l-3.97,0.68c0.18-0.58,0.18-1.48,0-2.06l3.97,0.68	C47.1,28.22,47.1,28.78,46.71,28.85z"></path><linearGradient id="AXcV_GK9ghWmPNeO~_E~Yq_ztKGqjsWmeBH_gr17" x1="24.948" x2="34.286" y1="3.814" y2="29.471" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4aaf50"></stop><stop offset=".185" stop-color="#43ad50"></stop><stop offset=".405" stop-color="#38aa50"></stop><stop offset=".613" stop-color="#27a550"></stop><stop offset=".818" stop-color="#14a150"></stop><stop offset="1" stop-color="#0a9e50"></stop></linearGradient><path fill="url(#AXcV_GK9ghWmPNeO~_E~Yq_ztKGqjsWmeBH_gr17)" d="M36.5,27c0,0-2,0-3,0S33,29,32,29s-0.5-1.5,0-2c-0.8-0.53-1.45-1.21-1.97-1.87	c-0.12-0.15-0.23-0.3-0.33-0.45c-0.11-0.16-0.21-0.31-0.3-0.46c-0.16-0.26-0.29-0.5-0.4-0.72l2.5-0.5c0,0,0.1,0.24,0.25,0.6	c0.05,0.14,0.11,0.29,0.18,0.46c0.08,0.18,0.16,0.38,0.24,0.58c0.29,0.68,0.61,1.42,0.83,1.86C34.5,25.5,36,26.5,36.5,27z"></path><path d="M35.23,8.95c-0.14,0.1-0.28,0.21-0.41,0.32c-0.14,0.11-0.27,0.22-0.4,0.34C34.81,10.73,35,11.91,35,13c0,4-3,6.5-5,6.5 c-3,0-6-2.5-6-7.5c0-0.32,0.01-0.63,0.03-0.93c-0.16-0.08-0.32-0.14-0.48-0.2c-0.16-0.07-0.32-0.13-0.48-0.18 C23.02,11.1,23,11.54,23,12c0,5.58,3.52,8.5,7,8.5c2.51,0,6-2.85,6-7.5C36,11.73,35.75,10.3,35.23,8.95z" opacity=".05"></path><path d="M34.82,9.27c-0.14,0.11-0.27,0.22-0.4,0.34C34.81,10.73,35,11.91,35,13c0,4-3,6.5-5,6.5c-3,0-6-2.5-6-7.5 c0-0.32,0.01-0.63,0.03-0.93c-0.16-0.08-0.32-0.14-0.48-0.2C23.52,11.23,23.5,11.6,23.5,12c0,5.5,3.37,8,6.5,8 c2.24,0,5.5-2.73,5.5-7C35.5,11.84,35.28,10.51,34.82,9.27z" opacity=".07"></path><path d="M19.71,24.87c-0.5-0.03-1.01-0.09-1.51-0.19c-0.02,0.16-0.07,0.32-0.13,0.48c-0.07,0.16-0.16,0.32-0.26,0.46 c0.59,0.13,1.22,0.22,1.88,0.25c0.01-0.16,0.02-0.33,0.03-0.5C19.72,25.21,19.72,25.04,19.71,24.87z M31.93,24.06 c-0.07-0.17-0.13-0.32-0.18-0.46c-0.8,0.32-1.6,0.51-2.35,0.62c0.09,0.15,0.19,0.3,0.3,0.46c0.1,0.15,0.21,0.3,0.33,0.45 c0.68-0.12,1.34-0.31,1.97-0.55c0.06,0.02,0.11,0.04,0.17,0.06C32.09,24.44,32.01,24.24,31.93,24.06z" opacity=".05"></path><path d="M19.71,24.87c-0.5-0.03-1.01-0.09-1.51-0.19c-0.02,0.16-0.07,0.32-0.13,0.48c0.52,0.11,1.07,0.18,1.65,0.21 C19.72,25.21,19.72,25.04,19.71,24.87z M31.75,23.6c-0.8,0.32-1.6,0.51-2.35,0.62c0.09,0.15,0.19,0.3,0.3,0.46 c0.78-0.13,1.52-0.33,2.23-0.62C31.86,23.89,31.8,23.74,31.75,23.6z" opacity=".07"></path><path d="M10.79,31H8.55c-0.04-0.16-0.07-0.33-0.1-0.5c-0.03-0.16-0.06-0.33-0.08-0.5h2.3	c0.01,0.16,0.03,0.33,0.05,0.5C10.74,30.66,10.76,30.83,10.79,31z" opacity=".05"></path><path d="M10.72,30.5H8.45c-0.03-0.16-0.06-0.33-0.08-0.5h2.3C10.68,30.16,10.7,30.33,10.72,30.5z" opacity=".07"></path>
            </svg>
            </div>
        </motion.div>
    );
};

export default JumpingChameleon;