import express from 'express';
import commentsController from '../controllers/comments.controller';


const router = express.Router();


router.post('/', commentsController.saveComments);
router.get('/', commentsController.getComments);
router.get('/getComments', commentsController.getCommentsSelection);

export default router;
