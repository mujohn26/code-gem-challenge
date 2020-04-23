
/**
 * class helps to remove duplication in array
 */
class DuplicationRemover {
  /**
     *
     * @param {Array} arr
     * @param {*} comp
     * @returns {Array} returns data
     */
  static async getUnique(arr, comp) {
    const unique = arr
      .map((e) => e[comp])

    // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
      .filter((e) => arr[e]).map((e) => arr[e]);

    return unique;
  }
}

export default DuplicationRemover;
