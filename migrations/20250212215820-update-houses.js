module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    // //   house update
    await db.collection('houses').updateMany(
        {
          $or: [
            {image: {$type: "string"}},
            {slotId: {$type: "string"}},

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
              slotId: {
                $convert: {
                  input: "$slotId",
                  to: "objectId",
                  onError: "$slotId",
                  onNull: "$slotId"
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
