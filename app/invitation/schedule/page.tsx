"use client";

import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import ScheduleItems from "@/components/ScheduleItems";

import {
  sectionContainer,
  sectionItem,
  sectionDivider,
  scheduleItems,
} from "@/lib/animations";

const Schedule = () => {
  return (
    <section className="section">
      <motion.div
        className="frame-cream"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h5
          variants={sectionItem}
          className="text-gold"
        >
          The celebration
        </motion.h5>

        <motion.h3 variants={sectionItem}>
          Schedule
        </motion.h3>

        <motion.div variants={sectionDivider}>
          <Divider />
        </motion.div>

        <motion.div variants={scheduleItems}>
          <ScheduleItems />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Schedule;