import { OrphanagesRepository } from '../../repositories/implementations/OrphanagesRepository';
import { FindOrphanagesController } from './FindOrphanagesController';
import { FindOrphanagesUseCase } from './FindOrphanagesUseCase';
import { FindOrphanagesView } from './FindOrphanagesView';

const orphanagesRepository = new OrphanagesRepository();
const findOrphanagesView = new FindOrphanagesView();

const findOrphanagesUseCase = new FindOrphanagesUseCase(orphanagesRepository);

const findOrphanagesController = new FindOrphanagesController(
  findOrphanagesUseCase,
  findOrphanagesView
);

export { findOrphanagesUseCase ,findOrphanagesController }
