import * as uuid from 'uuid'
import handler from '../libs/handler-lib'
import dynamoDb from '../libs/dynamodb-lib'

export const create = handler(async (event, context) => {
  const data = JSON.parse(event.body)
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      locationId: uuid.v1(),
      username: data.username,
      password: data.password,
      long: data.long,
      lat: data.lat,
      address: data.address,
      userType: data.userType,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  }
  await dynamoDb.put(params)
  return params.Item
})
