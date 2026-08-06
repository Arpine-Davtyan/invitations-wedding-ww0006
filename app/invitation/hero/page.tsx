"use client";

import { motion } from "framer-motion";
import { weddingInfo } from "@/lib/contstants";
import Divider from "@/components/Divider";
import CountdownTimer from "@/components/CountDownTimer";

import {
  heroContainer,
  heroTitle,
  heroDivider,
  heroCountdown,
  heroSubtitle,
} from "@/lib/animations";

const Hero = () => {
  return (
    <section className="section max-h-screen">
      <motion.div
        className="frame-cream gap-3 sm:gap-5"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h5
          variants={heroSubtitle}
          className="text-gold"
        >
          Together with their families
        </motion.h5>

        <motion.h1 variants={heroTitle}>
          {weddingInfo.name1}{" "}
          <span className="text-gold-accent">&</span>{" "}
          {weddingInfo.name2}
        </motion.h1>

        <motion.div variants={heroDivider}>
          <Divider />
        </motion.div>

        <motion.h5
          variants={heroSubtitle}
          className="text-gold text-2xl"
        >
          {weddingInfo.date}
        </motion.h5>

        <motion.div
          variants={heroSubtitle}
          className="flex-col-center gap-1"
        >
          <h6>{weddingInfo.locationName}</h6>
          <p className="simple-text">{weddingInfo.location}</p>
        </motion.div>

        <motion.div variants={heroDivider}>
          <Divider />
        </motion.div>

        <motion.h5 variants={heroSubtitle}>
          Counting down to forever
        </motion.h5>

        <motion.div variants={heroCountdown}>
          <CountdownTimer />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;