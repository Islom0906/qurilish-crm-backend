module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('apartments').updateMany(
        {
          $or: [
            {slotId: {$type: "string"}},
            {floorId: {$type: "string"}},
            {houseId: {$type: "string"}},
            {structureId: {$type: "string"}}
          ]
        },
        [
          {
            $set: {
              slotId: {
                $convert: {
                  input: "$slotId",
                  to: "objectId",
                  onError: "$slotId",
                  onNull: "$slotId"
                }
              },
              floorId: {
                $convert: {
                  input: "$floorId",
                  to: "objectId",
                  onError: "$floorId",
                  onNull: "$floorId"
                }
              },
              houseId: {
                $convert: {
                  input: "$houseId",
                  to: "objectId",
                  onError: "$houseId",
                  onNull: "$houseId"
                }
              },
              structureId: {
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

  }
};
