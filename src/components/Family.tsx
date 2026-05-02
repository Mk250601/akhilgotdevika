"use client";
import { motion } from "framer-motion";

export default function Family() {
    return (
        <section className="py-24 px-8 bg-[#0D311F] text-[#F3E5AB] flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl w-full text-center"
            >
                <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[#D4AF37]">With the Blessings Of</h2>

                <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32">
                    <div>
                        <h3 className="font-sans tracking-widest text-[#D4AF37] uppercase text-sm mb-6">Bride's Parents</h3>
                        <p className="font-serif text-2xl leading-relaxed">Jella Laxminarayana</p>
                        <p className="font-serif text-2xl leading-relaxed">& Padmavathi</p>
                    </div>

                    <div>
                        <h3 className="font-sans tracking-widest text-[#D4AF37] uppercase text-sm mb-6">Groom's Parents</h3>
                        <p className="font-serif text-2xl leading-relaxed">Sri Cheedalla Yadagiri</p>
                        <p className="font-serif text-2xl leading-relaxed">& Smt. Sunitha</p>
                    </div>
                </div>

                <div className="mt-24 font-cursive text-4xl md:text-5xl text-[#D4AF37]">
                    With Best Compliments from <br className="md:hidden" /> Near & Dear
                </div>
            </motion.div>
        </section>
    );
}
