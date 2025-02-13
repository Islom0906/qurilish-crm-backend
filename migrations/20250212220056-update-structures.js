module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    //   structure update
    await db.collection('structures').updateMany(
        {
          $or: [
            {floorImage: {$type: "string"}},
            {apartmentImage: {$type: "string"}},
            {images: {$type: "array"}},

          ]
        },
        [
          {
            $set: {
              floorImage: {
                $convert: {
                  input: "$floorImage",
                  to: "objectId",
                  onError: "$floorImage",
                  onNull: "$floorImage"
                }
              },
              apartmentImage: {
                $convert: {
                  input: "$apartmentImage",
                  to: "objectId",
                  onError: "$apartmentImage",
                  onNull: "$apartmentImage"
                }
              },
              images: {
                $map: {
                  input: "$images",
                  as: "imageId",
                  in: {
                    $convert: {
                      input: "$$imageId",
                      to: "objectId",
                      onError: "$$imageId",
                      onNull: "$$imageId"
                    }
                  }
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
