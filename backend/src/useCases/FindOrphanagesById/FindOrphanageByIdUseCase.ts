import Orphanage from '../../entities/Orphanage';
import { IOrphanagesRepository } from '../../repositories/IOrphanagesRepository';

export class FindOrphanageByIdUseCase {
  constructor(
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  async execute(id: number): Promise<Orphanage> {
    const orphanage = await this.orphanagesRepository.findById(id, [
      'images'
    ]);

    return orphanage;
  }
}
