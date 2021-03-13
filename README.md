# DeployAWSLambdaFunction_ITIS6177_Quiz09

This is an preliminary trial of using the AWS Lambda function and deploying it to my current NodeJS project. 

my-function: describes the actual AWS Lambda function code. This code receives a value for "keyword" parameter(Example JSON data = {"keyword" : "HelloWorld!"} , and outputs it in json format.

In AWS, I deployed this Lambda function into a Staging URL.

In Nodejs, I use a GET request '/say'( code in GET-request).  The GET request uses axios to call the Staging URL, along with an additional query(http://*/say?keyword=HelloWorld!).  The query parameter is passed to the AWS lambda function, and the response is then displayed in the browser. 

