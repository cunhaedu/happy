import Orphanage from '../../entities/Orphanage';
import { IOrphanagesRepository } from '../../repositories/IOrphanagesRepository';

export class FindOrphanagesUseCase {
  constructor(
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  async execute(): Promise<Orphanage[]> {
    const orphanages = await this.orphanagesRepository.find([
      'images'
    ]);

    return orphanages;
  }
}
