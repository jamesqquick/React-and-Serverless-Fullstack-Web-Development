const Airtable = require('airtable');
Airtable.configure({
    apiKey: '<API_KEY>',
});
const base = Airtable.base('<BASE_ID>');
const table = base.table('<TABLE_NAME>');

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
