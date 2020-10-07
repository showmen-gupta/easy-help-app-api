import handler from '../libs/handler-lib'
import dynamoDb from '../libs/dynamodb-lib'

export const fetch = handler(async (event, context) => {
  console.log(event.pathParameters.id)
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: { S: event.pathParameters.id }
    }
  }
  const res = await dynamoDb.get(params)
  if (!res.Item) {
    throw new Error('User not found')
  }
  return res.Item
})
