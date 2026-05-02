"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const targetDate = new Date("2026-05-10T10:35:00").getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const Item = ({ label, value }: { label: string, value: number }) => (
        <div className="flex flex-col items-center mx-2 md:mx-6">
            <div className="font-serif text-3xl md:text-5xl text-[#F3E5AB] w-20 md:w-28 h-20 md:h-28 flex items-center justify-center border border-[#D4AF37]/30 rounded-full bg-[#0A2617]/50 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.05)] mb-4">
                {value < 10 ? `0${value}` : value}
            </div>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#D4AF37]">{label}</span>
        </div>
    );

    return (
        <section className="py-24 px-4 bg-[#0D311F] relative overflow-hidden flex flex-col items-center isolate">
            {/* Background Ornament */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="z-10"
            >
                <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[#D4AF37] text-center">Countdown to Forever</h2>
                <div className="flex justify-center flex-wrap gap-y-8">
                    <Item label="Days" value={timeLeft.days} />
                    <Item label="Hours" value={timeLeft.hours} />
                    <Item label="Mins" value={timeLeft.minutes} />
                    <Item label="Secs" value={timeLeft.seconds} />
                </div>
            </motion.div>
        </section>
    );
}
