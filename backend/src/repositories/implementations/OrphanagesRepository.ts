import { getRepository } from 'typeorm';
import Orphanage from '../../entities/Orphanage';
import { IOrphanagesRepository } from '../IOrphanagesRepository';

export class OrphanagesRepository implements IOrphanagesRepository {

  async find(relations?: string[]): Promise<Orphanage[]> {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations
    });

    return orphanages;
  }

  async findById(id: number, relations?: string[]): Promise<Orphanage> {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations
    });

    return orphanage;
  }

  async save(orphanage: Orphanage): Promise<void> {
    const orphanagesRepository = getRepository(Orphanage);

    const createOrphanage = orphanagesRepository.create(orphanage);

    await orphanagesRepository.save(createOrphanage);
  }
}
