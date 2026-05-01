export const CornerOrnament = ({ className }: { className?: string }) => (
    <svg
        className={`pointer-events-none opacity-40 text-[#D4AF37] ${className}`}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Elegant corner vine replacing the abstract shapes */}
        <path d="M0,0 Q100,0 200,50 Q100,50 50,200 Q0,100 0,0" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10,10 Q80,10 120,60 Q60,60 30,120 Q10,80 10,10" stroke="currentColor" strokeWidth="1" fill="none" />

        {/* Rose / Petal silhouettes */}
        <path d="M100,25 Q115,10 130,25 Q115,40 100,25" fill="currentColor" />
        <path d="M50,70 Q65,55 80,70 Q65,85 50,70" fill="currentColor" />
        <path d="M25,100 Q40,85 55,100 Q40,115 25,100" fill="currentColor" />
        <path d="M150,55 Q165,40 180,55 Q165,70 150,55" fill="currentColor" />
        <path d="M55,150 Q70,135 85,150 Q70,165 55,150" fill="currentColor" />

        {/* Floating accent dots */}
        <circle cx="10" cy="10" r="3" fill="currentColor" />
        <circle cx="180" cy="80" r="2" fill="currentColor" />
        <circle cx="80" cy="180" r="2" fill="currentColor" />
        <circle cx="120" cy="120" r="1.5" fill="currentColor" />
    </svg>
);
