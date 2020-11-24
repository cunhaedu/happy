import { Request, Response } from 'express';
import { CreateOrphanageUseCase } from './CreateOrphanageUseCase';

export class CreateOrphanageController {
  constructor(
    private createOrphanageUseCase: CreateOrphanageUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      whatsapp,
      opening_hours,
      open_on_weekends
    } = request.body;

    const requestImages = request.files as Express.Multer.File[]

    const images = requestImages.map(image => {
      return { path: image.filename } as any
    })

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      whatsapp,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images
    };

    try {
      await this.createOrphanageUseCase.execute(data);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unexpected error'
      })
    }
  }
}
