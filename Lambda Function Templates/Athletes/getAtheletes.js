'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region: "us-west-1"});



exports.handler = async (event, context) => {
    // const dynamoDb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
    const dynamoDb = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

    
    const params = {
        TableName: "Athletes",
        Key:{
            id: "1"
        }
    }

    try {
        const data = await dynamoDb.get(params).promise(); 
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}