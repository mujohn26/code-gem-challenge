import comments from '../helper/comments.json';
import CommentServices from '../service/comments.service';
import response from '../helper/response.helper';
import DuplicationRemover from '../helper/duplicationRemover';

/**
 * comments controllers
 */
class commentsController {
  /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {String} saves data in database and returns success message
     */
  static async saveComments(req, res) {
    try {
      comments.map((data) => {
        CommentServices.createComment(data);
      });
      response.successMessage(
        res,
        'comments was created succeffull',
        201
      );
    } catch (error) {
      return response.errorMessage(
        res,
        error.message,
        500,
      );
    }
  }

  /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {String} get comments from database by type
     */
  static async getComments(req, res) {
    try {
      const { commentType } = req.query;
      const commentData = await CommentServices.getComment(commentType);

      response.successMessage(
        res,
        'comments retrived successfully',
        200,
        commentData
      );
    } catch (error) {
      return response.errorMessage(
        res,
        error.message,
        500,
      );
    }
  }

  /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {String} get comments from database by type
     */
  static async getCommentsSelection(req, res) {
    try {
      const { category } = req.query;
      const type = [];
      const topic = [];
      const commentData = await CommentServices.getCommentSelection();
      commentData.map((data) => {
        type.push({ title: data.commentType });
        topic.push({ title: data.commentTopic });
      });
      const types = await DuplicationRemover.getUnique(type, 'title');
      const topics = await DuplicationRemover.getUnique(topic, 'title');
      if (category === 'type') {
        response.successMessage(
          res,
          `${category} retrived successfully`,
          200,
          types
        );
      } else {
        response.successMessage(
          res,
          `${category} retrived successfully`,
          200,
          topics
        );
      }
    } catch (error) {
      return response.errorMessage(
        res,
        error.message,
        500,
      );
    }
  }
}

export default commentsController;
