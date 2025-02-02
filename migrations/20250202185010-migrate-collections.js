module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    // update companies
    await db.collection('companies').updateMany({},{$set:{isPriceSqm:true}})

    // floor
    await db.collection('floors').updateMany({},{$set:{priceSqm:null}})

  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('houses').updateMany({},{$unset:{squarePrices:""}})

  }
};
