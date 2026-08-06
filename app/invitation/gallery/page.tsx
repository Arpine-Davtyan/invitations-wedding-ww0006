"use client";

import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import GalleryItems from "@/components/GalleryItems";

import {
    galleryContainer,
    galleryItem,
    galleryDivider,
} from "@/lib/animations";

const Gallery = () => {
    return (
        <section className="section">
            <motion.div
                className="frame-cream"
                variants={galleryContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h5
                    variants={galleryItem}
                    className="text-gold"
                >
                    Moments together
                </motion.h5>

                <motion.h3 variants={galleryItem}>
                    Gallery
                </motion.h3>

                <motion.div variants={galleryDivider}>
                    <Divider />
                </motion.div>

                <GalleryItems />
            </motion.div>
        </section>
    );
};

export default Gallery;