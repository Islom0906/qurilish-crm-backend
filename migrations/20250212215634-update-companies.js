module.exports = {
    /**
     * @param db {import('mongodb').Db}
     * @param client {import('mongodb').MongoClient}
     * @returns {Promise<void>}
     */
    async up(db, client) {
        await db.collection('companies').updateMany(
            {},
            [
                {
                    $set: {
                        logo: { $ifNull: ["$logo", null] } // Agar `logo` yo‘q bo‘lsa, `null` qo‘yadi
                    }
                }
            ]
        )

        // update company
        await db.collection('companies').updateMany(
            {
                $or: [
                    {image: {$type: "string"}},
                    {logo: {$type: "string"}},

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
                        logo: {
                            $convert: {
                                input: "$logo",
                                to: "objectId",
                                onError: "$logo",
                                onNull: "$logo"
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
