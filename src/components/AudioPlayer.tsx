"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

interface AudioProps {
    isPlaying: boolean;
    setIsPlaying: (val: boolean) => void;
}

export default function AudioPlayer({ isPlaying, setIsPlaying }: AudioProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => setIsPlaying(false));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, setIsPlaying]);

    useEffect(() => {
        const pauseAudio = () => setIsPlaying(false);
        document.addEventListener('pause-bg-audio', pauseAudio);
        return () => document.removeEventListener('pause-bg-audio', pauseAudio);
    }, [setIsPlaying]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} src="/Song.mp3" loop />
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-[#D4AF37] text-[#0A2617] shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
            >
                {isPlaying ? <Music size={24} className="animate-pulse" /> : <VolumeX size={24} />}
            </motion.button>
        </div>
    );
}
