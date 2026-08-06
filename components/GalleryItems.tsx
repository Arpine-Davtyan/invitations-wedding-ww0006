"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { galleryItems } from "@/lib/contstants";
import GalleryModal from "./GalleryModal";

import {
    galleryGrid,
    galleryImage,
} from "@/lib/animations";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<
        (typeof galleryItems)[0] | null
    >(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <>
            <motion.div
                className="gallery-grid"
                variants={galleryGrid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {galleryItems.map((image, index) => (
                    <motion.div
                        key={index}
                        variants={galleryImage}
                        onClick={() => setSelectedImage(image)}
                        className="group gallery-item"
                    >
                        <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className="gallery-image"
                        />

                        <div className="gallery-overlay" />

                        <p className="gallery-title">
                            {image.title}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {selectedImage && (
                <GalleryModal
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            )}
        </>
    );
}