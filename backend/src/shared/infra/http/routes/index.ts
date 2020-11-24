import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../../../config/uploads'

import { createOrphanageController } from '../../../../useCases/CreateOrphanage';
import { findOrphanagesController } from '../../../../useCases/FindOrphanages';
import { findOrphanageByIdController } from '../../../../useCases/FindOrphanagesById';

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', (req, res) => {
  return findOrphanagesController.handle(req, res);
});

routes.get('/orphanages/:id', (req, res) => {
  return findOrphanageByIdController.handle(req, res);
})

routes.post('/orphanages', upload.array('images') , (req, res) => {
  return createOrphanageController.handle(req, res);
});

export default routes;
