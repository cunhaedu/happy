import { OrphanagesRepository } from '../../repositories/implementations/OrphanagesRepository';
import { CreateOrphanageController } from './CreateOrphanageController';
import { CreateOrphanageUseCase } from './CreateOrphanageUseCase';

const orphanagesRepository = new OrphanagesRepository();

const createOrphanageUseCase = new CreateOrphanageUseCase(orphanagesRepository);

const createOrphanageController = new CreateOrphanageController(createOrphanageUseCase);

export { createOrphanageUseCase ,createOrphanageController }
