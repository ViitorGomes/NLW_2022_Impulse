import express  from "express";
import { PrismaFeedbacksRepository } from "./contracts/repositories/prisma/feedbackRepositoryImplement";
import { NodemailerMailService } from "./contracts/services/nodemailer/mainServiceImplement";
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase";

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailService = new NodemailerMailService()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailService
    )

    await submitFeedbackUseCase.submit({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})

routes.use((req, res, next) => {
    res.status(404).send('Not found')
})