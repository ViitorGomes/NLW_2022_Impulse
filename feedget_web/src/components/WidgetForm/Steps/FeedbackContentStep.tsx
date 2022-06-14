import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../libs/api"
import { CloseButton } from "../../CloseButton"
import { LoadingSpin } from "../../LoadingSpin"
import { ScreenshotButton } from "../../ScreenshotButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent
}:FeedbackContentStepProps) {

    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [ screenshot, setScreenshot ] = useState<string | null>(null)
    const [ comment, setComment ] = useState<string>('')
    const [ isSendingFeedback, setIsSendingFeedback ] = useState<boolean>(false)

    async function handleSubmitFeedback(e: FormEvent) {
        e.preventDefault()
        setIsSendingFeedback(true)

        try {
            const feedback = {
                type: feedbackType,
                comment,
                screenshot: screenshot
            }
    
            await api.post('/feedbacks', feedback) 
            setIsSendingFeedback(false)
            onFeedbackSent()
    
        } catch (err) {
            console.log('Error ao tentar enviar o feedback')
        }
        
    }

    return (
        <>
            <header>
                <button 
                    type="button"
                    className="top-5 left-5 absolute text-[#a1a1aa] hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft/>
                </button>
                <span className="text-xl leading-6 font-medium flex items-center gap-2">
                    <img 
                        className="w-6 h-6" 
                        src={feedbackTypeInfo.image.source} 
                        alt={feedbackTypeInfo.image.alt} 
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>
            <form 
                className="my-4 w-full"
                onSubmit={handleSubmitFeedback}
            >
                <textarea
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)}
                    className="min-w-[304px] w-full min-h-[112px] p-1 text-sm 
                    placeholder-zinc-400 text-zinc-100 border border-zinc-600 
                    bg-transparent rounded-md scrollbar-thumb-zinc-700 
                    scrollbar-track-transparent scrollbar-thin focus:border-brand-500 
                    focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
                    placeholder={feedbackTypeInfo.placeholder}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton 
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        disabled={comment === '' || isSendingFeedback ? true : false}
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1
                        flex justify-center items-center text-sm hover:bg-brand-300 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors
                        disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        {isSendingFeedback ? (
                            <LoadingSpin
                                size="large"
                            />
                        ) : (
                            'Enviar feedback'
                        )}
                    </button>
                </footer>
            </form>
        </>
    )
}