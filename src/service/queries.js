import { Op } from 'sequelize';
import db from '../database/models';
/**
 * class for responses
 */
class Queries {
  /**
 * creating user query
 * @param {string} table comments table in database.
 * @param {string} data the data to be inputed in database.
 * @returns {array} data the data to be returned.
 */
  static async create(table, data) {
    try {
      const datas = await table.create(data);
      return datas;
    } catch (error) {
      return error;
    }
  }

  /**
 * Get comments by type
 * @param {object} table table to be searching from
 * @param {integer} commentType comment type
 * @returns {array} data to be returned.
 */
  static async findCommentByType(table, commentType) {
    try {
      const commentData = await table.findAll({

        where: {
          [Op.or]: [
            { commentType: { [Op.eq]: commentType } },
            { commentTopic: { [Op.eq]: commentType } }
          ]
        }
      });
      return commentData;
    } catch (error) {
      return error;
    }
  }

  /**
 * Get comments category
 * @param {object} table table to be searching from
 * @returns {array} data to be returned.
 */
  static async findCommentCategory(table) {
    try {
      const commentData = await table.findAll();
      return commentData;
    } catch (error) {
      return error;
    }
  }
}
export default Queries;
