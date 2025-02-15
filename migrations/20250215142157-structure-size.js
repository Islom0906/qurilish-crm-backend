module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    const structures = await db.collection('structures').find({ size: { $type: "string" } }).toArray();

    for (const structure of structures) {
      const numericSize = Number(structure.size);
      if (!isNaN(numericSize)) {
        await db.collection('structures').updateMany(
            { _id: structure._id },
            { $set: { size: numericSize } }
        );
      }
    }
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
