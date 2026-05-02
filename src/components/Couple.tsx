"use client";
import { motion } from "framer-motion";

export default function Couple() {
    return (
        <section className="py-32 px-8 bg-[#0A2617] relative flex flex-col items-center overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl w-full text-center z-10"
            >
                <p className="font-sans tracking-[0.3em] text-sm uppercase text-[#F3E5AB] mb-6">Meet the</p>
                <h2 className="font-serif text-5xl md:text-6xl mb-24 text-[#D4AF37]">Happy Couple</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
                    {/* Groom Polaroid */}
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: 0 }}
                        className="flex flex-col items-center cursor-pointer rotate-[-3deg] transition-all duration-500"
                    >
                        <div className="w-64 p-3 md:w-72 md:p-4 pb-8 bg-[#FDFBF7] shadow-2xl relative">
                            <div className="w-full h-72 md:h-80 relative overflow-hidden border border-gray-200 pointer-events-none">
                                <motion.img
                                    animate={{ scale: [1.02, 1.08, 1.02] }}
                                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                    src="/Groom.jpg" alt="Akhil" className="object-cover w-full h-full"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800/0D311F/D4AF37?text=Groom" }}
                                />
                            </div>
                            <h3 className="font-cursive text-4xl md:text-5xl text-[#0A2617] mt-5 md:mt-6 text-center">Akhil</h3>
                            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-2">The Groom</p>
                        </div>
                    </motion.div>

                    {/* Separator / Ampersand */}
                    <div className="text-6xl md:text-7xl font-cursive text-[#D4AF37] md:-mt-16">&</div>

                    {/* Bride Polaroid */}
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: 0 }}
                        className="flex flex-col items-center cursor-pointer rotate-[3deg] transition-all duration-500"
                    >
                        <div className="w-64 p-3 md:w-72 md:p-4 pb-8 bg-[#FDFBF7] shadow-2xl relative">
                            <div className="w-full h-72 md:h-80 relative overflow-hidden border border-gray-200 pointer-events-none">
                                <motion.img
                                    animate={{ scale: [1.02, 1.08, 1.02] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    src="/Bride.jpg" alt="Devika" className="object-cover w-full h-full"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800/0A2617/D4AF37?text=Bride" }}
                                />
                            </div>
                            <h3 className="font-cursive text-4xl md:text-5xl text-[#0A2617] mt-5 md:mt-6 text-center">Devika</h3>
                            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-2">The Bride</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
