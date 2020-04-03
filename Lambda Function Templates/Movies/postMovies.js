"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
  // const dynamoDb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });


  console.log(response.body);
  const {id, metaCritic, movie, releaseYear} = JSON.parse(event.body);


  const params = {
    TableName: "Movies",
    Item: {
        id: id,
        MetaCritic: metaCritic,
        movie: movie,
        releaseYear: releaseYear
      }
  };

  try {
    const data = await dynamoDb.put(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

