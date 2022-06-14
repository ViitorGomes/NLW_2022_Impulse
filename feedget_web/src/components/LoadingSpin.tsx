import { CircleNotch } from "phosphor-react";

interface LoadingSpinProps {
    size?: "small" | "large"
}

export function LoadingSpin({ size="small" } : LoadingSpinProps) {
    return (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <CircleNotch weight="bold" className={`${size === "large" ? "w-6 h-6" : "w-4 h-4"} animate-spin`}/>
        </div>
    )
}