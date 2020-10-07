import handler from '../libs/handler-lib'
import dynamoDb from '../libs/dynamodb-lib'

export const remove = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,

    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      email: event.pathParameters.email
    }
  }
  await dynamoDb.delete(params)

  return { status: true }
})
