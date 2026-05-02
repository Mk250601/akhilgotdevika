"use client";
import { motion } from "framer-motion";

export default function Events() {
    return (
        <section className="py-24 px-8 bg-[#0A2617] text-[#D4AF37] flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl w-full text-center relative z-10"
            >
                <p className="font-sans tracking-[0.2em] text-sm uppercase text-[#F3E5AB] mb-4">
                    Sumuhurtham
                </p>
                <h2 className="font-serif text-5xl md:text-6xl mb-6">Ceremony Details</h2>

                <div className="border border-[#D4AF37]/30 p-8 md:p-16 relative mt-12 bg-[#0D311F]/60 rounded-sm shadow-2xl backdrop-blur-sm">
                    <h3 className="font-cursive text-5xl mb-6 text-[#D4AF37]">Karkataka Lagnam</h3>
                    <p className="font-serif text-2xl text-[#F3E5AB] mb-2">Sunday 10th May 2026</p>
                    <p className="font-sans text-lg mb-8 text-[#F3E5AB]/80">at 10:35 a.m.</p>

                    <div className="w-24 h-[1px] bg-[#D4AF37]/50 mx-auto my-10"></div>

                    <h4 className="font-sans tracking-widest text-[#D4AF37] uppercase text-sm mb-3">Venue</h4>
                    <p className="font-serif text-2xl mb-1 text-[#F3E5AB]">Bandi Convention Hall</p>
                    <p className="font-sans text-[15px] text-[#F3E5AB]/70 mb-8 leading-relaxed max-w-sm mx-auto">
                        Chinthapally Bypass, Miryalaguda
                    </p>

                    <a
                        href="https://maps.app.goo.gl/MuS2CENRjuFhQdrK9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 mb-10 outline outline-1 outline-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A2617] transition-all duration-500 font-sans tracking-[0.2em] uppercase text-xs cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    >
                        Get Directions
                    </a>

                    <h4 className="font-sans tracking-widest text-[#D4AF37] uppercase text-sm mb-3">Lunch</h4>
                    <p className="font-serif text-2xl text-[#F3E5AB]">at 12:30 p.m.</p>
                </div>
            </motion.div>
        </section>
    );
}
