exports.handler = async (event) => {
    // TODO implement
    var response=''
    if(event && event.queryStringParameters && event.queryStringParameters.keyword)
        response = {
            statusCode: 200,
            //body: JSON.stringify('Hello from Lambda!'),
            body:JSON.stringify(event.queryStringParameters.keyword),
        };
    if(event && (!event.queryStringParameters || !event.queryStringParameters.keyword)){
        response = {
            statusCode: 400,
            //body: JSON.stringify('Hello from Lambda!'),
            body:JSON.stringify("Error occured"),
            
        }
    }
    
    return response;
};
