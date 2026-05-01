"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Petals() {
    const [petals, setPetals] = useState<any[]>([]);

    useEffect(() => {
        // Generate 35 romantic falling rose petals globally
        const newPetals = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // 0 to 100 vw
            delay: Math.random() * 12, // stagger the falls
            duration: 10 + Math.random() * 12, // 10-22 seconds to fall
            size: 15 + Math.random() * 25, // 15-40px sizes
            rotate: Math.random() * 360,
        }));
        setPetals(newPetals);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{ y: -50, x: `${petal.x}vw`, opacity: 0, rotate: petal.rotate }}
                    animate={{
                        y: "110vh",
                        x: [`${petal.x}vw`, `${petal.x + (Math.random() > 0.5 ? 20 : -20)}vw`],
                        opacity: [0, 0.8, 0.8, 0],
                        rotate: petal.rotate + 360,
                    }}
                    transition={{
                        duration: petal.duration,
                        delay: petal.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute"
                >
                    {/* A beautiful Rose Petal SVG Shape */}
                    <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="url(#roseGrad)" opacity="0.65" />
                        <defs>
                            <linearGradient id="roseGrad" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF8DA1" />
                                <stop offset="1" stopColor="#B91C1C" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
