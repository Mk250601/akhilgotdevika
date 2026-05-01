"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax effects
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background container for potential video/image */}
            <div className="absolute inset-0 bg-[#0D311F] opacity-90 z-0"></div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="z-10 text-center px-4 flex flex-col items-center"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-[#F3E5AB] mb-6"
                >
                    Together with our families
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                    className="font-cursive text-[5.5rem] md:text-[10rem] leading-none text-[#D4AF37] mb-8 drop-shadow-[0_0_35px_rgba(212,175,55,0.6)] px-2"
                >
                    Devika & Akhil
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="mt-8"
                >
                    <div className="flex items-center justify-center gap-4 text-[#F3E5AB] font-serif italic text-xl md:text-2xl mb-8">
                        <span>May 10th, 2026</span>
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                        <span>Miryalaguda, TS</span>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex flex-col items-center mt-12"
                    >
                        <p className="font-sans text-[10px] tracking-widest uppercase mb-2 text-[#D4AF37]/80">
                            Scroll to Explore
                        </p>
                        <div className="w-[1px] h-12 bg-[#D4AF37]/50"></div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
