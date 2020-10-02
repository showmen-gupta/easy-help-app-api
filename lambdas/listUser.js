import handler from '../libs/handler-lib'
import dynamoDb from '../libs/dynamodb-lib'

export const list = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName
  }

  const res = await dynamoDb.scan(params)
  try {
    return res.Items
  } catch (e) {
    return e
  }
})
