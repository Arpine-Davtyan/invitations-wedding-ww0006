"use client";

import { motion } from "framer-motion";
import { scheduleItems } from "@/lib/contstants";
import {
    MapPinIcon,
    ForkKnifeIcon,
    HeartIcon,
    MusicNotesIcon,
    PintGlassIcon,
    SparkleIcon,
} from "@phosphor-icons/react";

import {
    scheduleList,
    scheduleItem,
} from "@/lib/animations";

const icons = {
    heart: HeartIcon,
    glass: PintGlassIcon,
    utensils: ForkKnifeIcon,
    music: MusicNotesIcon,
    sparkle: SparkleIcon,
} as const;

const ScheduleItems = () => {
    return (
        <motion.div
            className="schedule-items"
            variants={scheduleList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <span className="absolute left-4.75 top-2 bottom-2 w-px bg-gold/30" />

            {scheduleItems.map((item, index) => {
                const Icon = icons[item.icon as keyof typeof icons];

                return (
                    <motion.div
                        className="schedule-item"
                        key={index}
                        variants={scheduleItem}
                    >
                        <div className="schedule-icon">
                            {Icon && (
                                <Icon
                                    size={16}
                                    className="text-gold"
                                />
                            )}
                        </div>

                        <div>
                            <p className="schedule-time">
                                {item.time}
                            </p>

                            <h4>{item.name}</h4>

                            <p className="schedule-text">
                                {item.title}
                            </p>

                            {item.mapUrl && (
                                <a
                                    href={item.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-map"
                                >
                                    <MapPinIcon
                                        size={16}
                                        weight="light"
                                    />
                                    Open in Maps
                                </a>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default ScheduleItems;