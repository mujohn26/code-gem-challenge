import db from '../database/models';
import Queries from './queries';


/**
 * This class contains functions for all comment services.
 */
class CommentServices {
  /**
 * creating user query
 * @param {string} newComment comments table in database.
 * @returns {array} data the data to be returned.
 */
  static async createComment(newComment) {
    return Queries.create(db.comments, newComment);
  }

  /**
 * creating user query
 * @param {string} commentType comments type
 * @returns {array} data the data to be returned.
 */
  static async getComment(commentType) {
    return Queries.findCommentByType(db.comments, commentType);
  }

  /**
 * creating user query
 * @param {string} category comments category
 * @returns {array} data to be returned.
 */
  static async getCommentSelection() {
    return Queries.findCommentCategory(db.comments);
  }
}
export default CommentServices;
