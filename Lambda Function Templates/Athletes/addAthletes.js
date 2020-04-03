"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
  // const dynamoDb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });


  const params = {
    TableName: "Athletes",
    Item: {
      id: "4",
      playerName: "Michael Jordan",
      playerPosition: "Shooting Guard",
      playerSport: "NBA"
    }
  };

  try {
    const data = await dynamoDb.put(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
