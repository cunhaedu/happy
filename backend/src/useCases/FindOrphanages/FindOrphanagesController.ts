import { Request, Response } from 'express';
import { FindOrphanagesUseCase } from './FindOrphanagesUseCase';
import { FindOrphanagesView } from './FindOrphanagesView';

export class FindOrphanagesController {
  constructor(
    private findOrphanagesUseCase: FindOrphanagesUseCase,
    private findOrphanagesView: FindOrphanagesView
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const orphanages = await this.findOrphanagesUseCase.execute();

    return response.json(this.findOrphanagesView.renderMany(orphanages));
  }
}
