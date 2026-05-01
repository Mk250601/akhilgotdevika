"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashEntry({ onOpen }: { onOpen: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (isOpen) return;
        setIsOpen(true);
        setTimeout(() => {
            onOpen();
        }, 1000); // Wait for exit animation to complete
    };

    // Auto-close after 5 seconds if no interaction
    useEffect(() => {
        const timer = setTimeout(() => {
            handleOpen();
        }, 4500);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    animate={{ y: 0 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A2617] text-[#D4AF37]"
                >
                    {/* Subtle animated border ornament for splash */}
                    <div className="absolute inset-4 border border-[#D4AF37]/20 pointer-events-none rounded-lg"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-center flex flex-col items-center z-10"
                    >
                        <p className="font-sans tracking-[0.3em] text-sm uppercase mb-6 text-[#F3E5AB]">
                            The Wedding Celebration of
                        </p>
                        <h1 className="font-cursive text-7xl md:text-8xl mb-16 text-[#D4AF37] px-4">
                            Devika & Akhil
                        </h1>
                        <button
                            onClick={handleOpen}
                            className="px-10 py-4 outline outline-1 outline-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A2617] transition-colors duration-500 font-sans tracking-[0.2em] uppercase text-xs cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                        >
                            Open Invitation
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
