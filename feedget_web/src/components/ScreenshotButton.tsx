import { Camera, Trash } from "phosphor-react"
import html2canvas from 'html2canvas'
import { useState } from "react"
import { LoadingSpin } from "./LoadingSpin"

interface ScreenshotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
    screenshot, 
    onScreenshotTook
}:ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')

        onScreenshotTook(base64image)

        setIsTakingScreenshot(false)
    }

    return screenshot ? (
        <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end 
            items-end text-zinc-800 dark:text-zinc-400 hover:text-zinc-600 
            dark:hover:text-zinc-100 transition-colors"
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'bottom right',
                backgroundSize: 180
            }}
            onClick={e => onScreenshotTook(null)}
        >
            <Trash weight="fill"/>
        </button>
    ) : (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md 
            border-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
            dark:focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {isTakingScreenshot ? <LoadingSpin/> : <Camera className="w-6 h-6" />}
        </button>
    )
}