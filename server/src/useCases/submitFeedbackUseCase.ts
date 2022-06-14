import { FeedbacksRepository } from "../contracts/repositories/feedbacksRepository"
import { MailService } from "../contracts/services/mailService"

interface SubmitFeedbackUseCaseRequest {
    type: string
    comment: string
    screenshot?: string
}

export class SubmitFeedbackUseCase {

    constructor (
        private feedbackRepository: FeedbacksRepository,
        private mailService: MailService
    ) {}

    async submit(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request

        if (!type) {
            throw new Error('Type is required')
        }

        if (!comment) {
            throw new Error('Comment is required')
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.')
        }

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailService.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #171717;">`,
                `<h2>Dados do feedback</h2>`,
                `<p>Tipo: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot && `<img src=${screenshot} alt="screenshot" />`,
                `</div>`,
            ].join('\n')
        })
    }
}