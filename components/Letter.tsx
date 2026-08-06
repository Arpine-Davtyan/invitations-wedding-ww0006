"use client";

import { weddingInfo } from "@/lib/contstants";
import { motion } from "motion/react";
import Divider from "./Divider";

type Props = {
    opened: boolean;
};

export default function Letter({ opened }: Props) {
    return (
        <motion.div
            initial={false}
            animate={
                opened
                    ? {
                        y: -120,
                        scale: 1,
                    }
                    : {
                        y: 0, 
                        scale: 1,
                    }
            }
            transition={{
                duration: 1.2,
                ease: "easeInOut",
            }}
            className="letter"
        >
            <div className="flex-col-center h-full px-8">
                <p className="letter-title">{weddingInfo.name1} & {weddingInfo.name2}</p>

                <Divider />

                <h5>Are getting married</h5>
            </div>
        </motion.div>
    );
}