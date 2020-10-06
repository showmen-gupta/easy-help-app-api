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
      fullname: data.fullname,
      email: data.email,
      age: data.age,
      phone: data.phone,
      gender: data.gender,
      address: data.address,
      attachment: data.attachment,
      lat: data.lat,
      long: data.long,
      userType: data.userType,
      createdAt: Date.now()
    }
  }
  try {
    await dynamoDb.put(params)
  } catch (error) {
    return error
  }
  return params.Item
})
