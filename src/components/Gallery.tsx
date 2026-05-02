"use client";
import { motion } from "framer-motion";

export default function Gallery() {
    const allImages = Array.from({ length: 9 }).map((_, i) => `/i${i + 1}.JPG`);
    const topRow = allImages.slice(0, 5);
    // Ensure exactly 5 images in the bottom row to perfectly balance the math with the top row
    const bottomRow = [...allImages.slice(4, 9), allImages[0]].slice(0, 5);

    return (
        <section className="py-24 bg-[#0A2617] relative flex flex-col items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center z-10"
            >
                <p className="font-sans tracking-[0.3em] text-sm md:text-sm uppercase text-[#F3E5AB] mb-6">
                    Treasured
                </p>
                <h2 className="font-serif text-5xl md:text-6xl mb-16 text-[#D4AF37]">Captured Moments</h2>

                {/* Cinematic Filmstrip Marquee Effect */}
                <div className="flex flex-col gap-6 md:gap-12 w-full overflow-hidden relative py-4">

                    {/* Top Row - Scrolling Left */}
                    <div className="w-full flex items-center">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="flex w-max shrink-0"
                        >
                            {[1, 2].map((set) => (
                                <div key={set} className="flex gap-4 md:gap-8 px-2 md:px-4">
                                    {topRow.map((src, idx) => (
                                        <div key={idx} className="w-56 h-72 md:w-80 md:h-[450px] shrink-0 border-[6px] md:border-8 border-[#FDFBF7] shadow-xl relative rotate-[-2deg] hover:rotate-[-1deg] transition-transform duration-500">
                                            <img src={src} alt="Gallery" className={`w-full h-full object-cover ${src === '/i5.JPG' ? 'object-left' : 'object-center'}`} loading="lazy" onError={(e) => e.currentTarget.style.display = 'none'} />
                                            {/* Subtle golden overlay */}
                                            <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"></div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom Row - Scrolling Right */}
                    <div className="w-full flex items-center">
                        <motion.div
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="flex w-max shrink-0"
                        >
                            {[1, 2].map((set) => (
                                <div key={set} className="flex gap-4 md:gap-8 px-2 md:px-4">
                                    {bottomRow.map((src, idx) => (
                                        <div key={idx} className="w-56 h-72 md:w-80 md:h-[450px] shrink-0 border-[6px] md:border-8 border-[#FDFBF7] shadow-xl relative rotate-[2deg] hover:rotate-[1deg] transition-transform duration-500">
                                            <img src={src} alt="Gallery" className={`w-full h-full object-cover ${src === '/i5.JPG' ? 'object-left' : 'object-center'}`} loading="lazy" onError={(e) => e.currentTarget.style.display = 'none'} />
                                            <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"></div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Edges for seamless fade-in/fade-out onto the background */}
                    <div className="absolute inset-y-0 left-0 w-8 md:w-48 bg-gradient-to-r from-[#0A2617] to-transparent pointer-events-none z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-8 md:w-48 bg-gradient-to-l from-[#0A2617] to-transparent pointer-events-none z-10"></div>

                </div>
            </motion.div>
        </section>
    );
}
