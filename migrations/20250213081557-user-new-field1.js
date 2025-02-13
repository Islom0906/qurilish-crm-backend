module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('users').updateMany(
        {},
        [
          {
            $set: {
              name: { $ifNull: ["$name", "$fullName"] },
              sur_name: { $ifNull: ["$sur_name", ""] },
              companyId: { $ifNull: ["$companyId", null] },
              image: { $ifNull: ["$image", null] },
              birthday: { $ifNull: ["$birthday", null] },
              gender: { $ifNull: ["$gender", ""] },
              phone: { $ifNull: ["$phone", ""] },
            },
          },
          {
            $unset: ["fullName"],
          },
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
