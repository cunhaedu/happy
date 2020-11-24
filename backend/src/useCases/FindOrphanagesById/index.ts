import { OrphanagesRepository } from '../../repositories/implementations/OrphanagesRepository';
import { FindOrphanageByIdController } from './FindOrphanageByIdController';
import { FindOrphanageByIdUseCase } from './FindOrphanageByIdUseCase';
import { FindOrphanagesView } from './FindOrphanagesView';

const orphanagesRepository = new OrphanagesRepository();
const findOrphanagesView = new FindOrphanagesView();

const findOrphanageByIdUseCase = new FindOrphanageByIdUseCase(orphanagesRepository);

const findOrphanageByIdController = new FindOrphanageByIdController(
  findOrphanageByIdUseCase,
  findOrphanagesView
);

export { findOrphanageByIdUseCase ,findOrphanageByIdController }
