import express from 'express';
import commentsRoute from './commentsRoute';

const Router = express.Router();
Router.use('/comments', commentsRoute);

export default Router;
