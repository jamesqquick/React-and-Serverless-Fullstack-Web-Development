exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: 'Hello World',
        }),
    };
};
