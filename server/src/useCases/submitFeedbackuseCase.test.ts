import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.submit({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.submit({
            type: '',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.submit({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without a valid screenshot format', async () => {
        await expect(submitFeedback.submit({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })
})