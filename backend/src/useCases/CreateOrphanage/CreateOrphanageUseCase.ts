import Orphanage from '../../entities/Orphanage';
import { IOrphanagesRepository } from '../../repositories/IOrphanagesRepository';
import { ICreateOrphanageRequestDTO } from './CreateOrphanageDTO';

import { schema } from './CreateOrphanageValidator';

export class CreateOrphanageUseCase {
  constructor(
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  async execute(data: ICreateOrphanageRequestDTO) {
    await schema.validate(data, {
      abortEarly: false
    });

    await this.orphanagesRepository.save(data as Orphanage);
  }
}
