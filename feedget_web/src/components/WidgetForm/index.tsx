import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto'
        },
        placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lâmpada'
        },
        placeholder: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'

    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de um balão de pensamento'
        },
        placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer?'

    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

    function handleFeedbackTypeReset() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-white dark:bg-zinc-900 w-[calc(100vw-2rem)] md:w-auto p-4 relative 
        rounded-2xl mb-4 flex flex-col items-center shadow-lg">
            {feedbackSent ? (
                <FeedbackSuccessStep
                    onFeedbackRestartRequested={handleFeedbackTypeReset}
                />
            ) : (
                !feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ) : (
                    <FeedbackContentStep 
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleFeedbackTypeReset}
                        onFeedbackSent={() => setFeedbackSent(true)}
                    />
                )
            )}
            <footer>
                <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                    Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br">Rocketseat</a>
                </span>
            </footer>
        </div>
    )
}