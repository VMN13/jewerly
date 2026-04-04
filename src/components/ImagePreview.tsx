 "use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImagePreviewProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImagePreview({ src, alt, width, height, className }: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");

  const openPreview = (imageSrc: string) => {
    setCurrentSrc(imageSrc);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>

      <div 
        className="image-preview-wrapper cursor-pointer w-full h-full"
        onClick={() => openPreview(src)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openPreview(src)}
      >
        <Image src={src} alt={alt || ''} width={width || 300} height={height || 300} className={className ? `${className} w-full h-full object-cover` : "w-full h-full object-cover"} />
      </div>

      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <button
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <Image
              src={currentSrc}
              alt="Full size preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

