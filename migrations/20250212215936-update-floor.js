module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    // update floor
    await db.collection('floors').updateMany(
        {
          $or: [
            {image: {$type: "string"}},
            {houseId: {$type: "string"}},

          ]
        },
        [
          {
            $set: {
              image: {
                $convert: {
                  input: "$image",
                  to: "objectId",
                  onError: "$image",
                  onNull: "$image"
                }
              },
              houseId: {
                $convert: {
                  input: "$houseId",
                  to: "objectId",
                  onError: "$houseId",
                  onNull: "$houseId"
                }
              }
            }
          }
        ]
    );
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
