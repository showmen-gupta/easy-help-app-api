import handler from '../libs/handler-lib'
import dynamoDb from '../libs/dynamodb-lib'

export const fetch = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      email: event.pathParameters.email
    }
  }
  const res = await dynamoDb.get(params)
  if (!res.Item) {
    throw new Error('User not found')
  }
  return res.Item
})
