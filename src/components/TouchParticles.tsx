"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TouchParticles() {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        let idCounter = 0;

        const handleTouch = (e: TouchEvent) => {
            // Don't fire too many particles, check if we want to throttle slightly or just fire on touchmove
            const touch = e.touches[0];
            if (!touch) return;

            const newParticle = { id: idCounter++, x: touch.clientX, y: touch.clientY };
            setParticles(prev => [...prev, newParticle].slice(-12)); // keep max 12 particles alive to avoid lag

            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 800);
        };

        window.addEventListener("touchmove", handleTouch, { passive: true });
        return () => {
            window.removeEventListener("touchmove", handleTouch);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {particles.map(p => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 1, scale: 0.5, x: p.x, y: p.y }}
                        animate={{
                            opacity: 0,
                            scale: 2,
                            y: p.y - Math.random() * 40 - 20, /* drift upwards slightly */
                            x: p.x + (Math.random() * 40 - 20) /* drift left/right */
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute rounded-full w-2 h-2 bg-[#D4AF37] blur-[1px] shadow-[0_0_15px_#D4AF37]"
                        style={{ willChange: "transform, opacity" }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
