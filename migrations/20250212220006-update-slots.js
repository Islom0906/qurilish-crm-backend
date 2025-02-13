module.exports = {
    /**
     * @param db {import('mongodb').Db}
     * @param client {import('mongodb').MongoClient}
     * @returns {Promise<void>}
     */
    async up(db, client) {
        //   slot update
        await db.collection('slots').updateMany(
            {image: {$type: "string"}},
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
