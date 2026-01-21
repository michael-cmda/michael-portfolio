"use client"

import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"
import { motion } from "framer-motion"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentImageIndex: number | null
  onImageClick: (index: number) => void
}

export function ImageModal({
  isOpen,
  onClose,
  images,
  currentImageIndex,
  onImageClick,
}: ImageModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg overflow-hidden">
          <div className="flex justify-end p-2">
            <button onClick={onClose}>
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="p-4">
            {currentImageIndex !== null ? (
              // Big Image View
              <motion.img
                src={images[currentImageIndex]}
                alt="Selected"
                className="w-full h-auto object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              // Gallery Thumbnails
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => onImageClick(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
