const Airtable = require('airtable');
Airtable.configure({
    apiKey: 'keyv6QkaOAF9n0Z7P',
});
const base = Airtable.base('app5gROwosGXhhMsu');
const table = base.table('TABLE1');

exports.handler = async (event) => {
    try {
        const records = await table.select({}).firstPage();
        const formattedRecords = records.map((record) => ({
            id: record.id,
            fields: record.fields,
        }));
        return {
            statusCode: 200,
            body: JSON.stringify(formattedRecords),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                err: 'Failed to query records in  Airtable',
            }),
        };
    }
};
