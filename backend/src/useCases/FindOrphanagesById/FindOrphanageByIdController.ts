import { Request, Response } from 'express';
import { FindOrphanageByIdUseCase } from './FindOrphanageByIdUseCase';
import { FindOrphanagesView } from './FindOrphanagesView';

export class FindOrphanageByIdController {
  constructor(
    private findOrphanageByIdUseCase: FindOrphanageByIdUseCase,
    private findOrphanagesView: FindOrphanagesView
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const orphanage = await this.findOrphanageByIdUseCase.execute(Number(id));

    return response.json(this.findOrphanagesView.render(orphanage));
  }
}
