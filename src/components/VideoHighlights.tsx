"use client";
import { motion } from "framer-motion";

export default function VideoHighlights() {
    return (
        <section className="py-24 px-4 bg-[#0A2617] relative flex flex-col items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-5xl w-full text-center z-10"
            >
                <p className="font-sans tracking-[0.3em] text-sm uppercase text-[#F3E5AB] mb-6">
                    Pre-Wedding
                </p>
                <h2 className="font-serif text-5xl md:text-6xl mb-12 text-[#D4AF37]">Engagement Highlights</h2>

                <div className="relative w-full max-h-[85vh] flex justify-center rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-black">
                    <video
                        controls
                        preload="metadata"
                        className="max-w-full max-h-[85vh] object-contain"
                        onPlay={() => document.dispatchEvent(new Event('pause-bg-audio'))}
                        poster="https://placehold.co/1920x1080/0A2617/D4AF37?text=Engagement+Video"
                    >
                        <source src="/Engagement.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </motion.div>
        </section>
    );
}
