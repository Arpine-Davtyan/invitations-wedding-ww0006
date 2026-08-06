"use client";

import { motion } from "motion/react";
import { CheckCircleIcon } from "@phosphor-icons/react";

import {
    successContainer,
    successIcon,
    successText,
} from "@/lib/animations";

type SuccessProps = {
    attendance: boolean;
};

export default function Success({
    attendance
}: SuccessProps) {
    return (
        <motion.div
            variants={successContainer}
            initial="hidden"
            animate="visible"
            className="flex-col-center mt-4"
        >
            <motion.div
                variants={successIcon}
                className="my-2 flex-center"
            >
                <CheckCircleIcon
                    size={80}
                    weight="duotone"
                    className="text-gold"
                />
            </motion.div>

            <motion.p
                variants={successText}
                className="uppercase text-center text-gold"
            >
                {attendance
                    ? "Thank you for confirming your attendance."
                    : "Thank you for letting us know."}
            </motion.p>
        </motion.div>
    );
}