import { Router } from "express";
import {getAll,create,remove} from '../controllers/servers.js'
const router = Router();

router.get('/api/server', getAll);

router.post('/api/server',create)
// router.get('/api/server', (req, res)=> {
//   res.json({test:42})
// })

router.delete('/api/server:id',remove)

export default router