'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });
  let responseBody = "";
  let statusCode = 0;

  const { id, metaCritic } = JSON.parse(event.body)
  const intId = parseInt(id)

  const params = {
    TableName: "Movies",
    Key: {
      id: intId
    },
    UpdateExpression: "set metaCritic = :n",
    ExpressionAttributeValues: {
        ":n": metaCritic
    }
  };

  try {
    const data = await dynamoDb.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch(err) {
    responseBody = `Unable to update product: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: responseBody
  };

  return response;
};