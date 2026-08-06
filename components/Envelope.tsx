"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Letter from "./Letter";
import { weddingInfo } from "@/lib/contstants";

const Envelope = () => {
    const [opened, setOpened] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);

    const router = useRouter();

    const handleOpen = async () => {
        if (opened) return;

        setOpened(true);
        setTimeout(() => {
            setShowOverflow(true);
        }, 100);

        setTimeout(() => {
            router.push("/invitation");
        }, 2500);
    };

    return (
        <>
            <h2 
                className={`${showOverflow ? "opacity-0" : "opacity-100"}`}
            >
                You're Invited
            </h2>
            <motion.div
                onClick={handleOpen}
                animate={{
                    opacity: opened ? 0 : 1,
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.5,
                }}
                className={`envelope
                ${showOverflow ? "overflow-visible" : "overflow-hidden"}
            `}
            >

                {/* Shadow */}
                <div className="envelope-shadow" />

                {/* Back */}
                <div className="envelope-back" />

                {/* Letter */}

                <Letter opened={opened} />

                {/* Left Triangle */}
                <div className="envelope-l-triangle" />

                {/* Right Triangle */}
                <div className="envelope-r-triangle" />

                {/* Bottom Triangle */}
                <div className="envelope-b-triangle" />

                {/* Seal */}
                <div className={`envelope-seal ${opened ? "opacity-0" : "opacity-100"}`}>
                    {`${weddingInfo.name1[0]}${weddingInfo.name2[0]}`}
                </div>

                {/* Top Flap */}
                <motion.div
                    animate={{
                        rotateX: opened ? -180 : 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                        transformOrigin: "top",
                        transformStyle: "preserve-3d",
                    }}
                    className={`envelope-t-flap
                    ${opened ? "z-1" : "z-40"}
                `}
                />
            </motion.div>
        </>
    );
}

export default Envelope