import { XIcon } from "@phosphor-icons/react";
import Image from "next/image";

const GalleryModal = ({ selectedImage, setSelectedImage }: any) => {
    return (
        <div
            onClick={() => setSelectedImage(null)}
            className="gallery-modal"
        >
            <button
                onClick={() => setSelectedImage(null)}
                className="gallery-close-button"
            >
                <XIcon size={38} weight="light" />
            </button>

            <div
                onClick={(e) => e.stopPropagation()}
                className="gallery-modal-image-container"
            >
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={1600}
                    height={1200}
                    className="gallery-modal-image"
                />
            </div>

            <h3 className="absolute bottom-3 text-ivory">
                {selectedImage.title}
            </h3>
        </div>
    )
}

export default GalleryModal