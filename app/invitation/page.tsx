"use client";

import { motion } from "framer-motion";
import Hero from "./hero/page";
import Schedule from "./schedule/page";
import Gallery from "./gallery/page";
import RSVP from "./rsvp/page";

const InvitationPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Hero />
            <Schedule />
            <Gallery />
            <RSVP />
        </motion.main>
    )
}

export default InvitationPage