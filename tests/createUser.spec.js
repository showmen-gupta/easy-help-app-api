/* eslint-disable no-undef */
import { create } from '../lambdas/createUser'

const mockedUser = {
  body: '{"username":"showmen","password":"12345", "long":20.87951, "lat":85.45789, "address":"stavanger","userType":1, "attachment":"test.png", "createdAt":1487800950620}',
  requestContext: {
    identity: {
      cognitoIdentityId: 'TEST-SUB-1234'
    }
  }
}

const context = {}
let result
describe('createUser', () => {
  beforeEach(() => {
    process.env.tableName = 'easy_help_app_db'
    result = create(mockedUser, context)
  })

  it('should return with a body', () => {
    return result.then(data => {
      expect(data.body).not.toBe(undefined)
    })
  })

  it('should return with headers', () => {
    return result.then(data => {
      expect(data.headers).not.toBe(undefined)
    })
  })

  it('should return with status', () => {
    return result.then(data => {
      expect(data.statusCode).not.toBe(undefined)
    })
  })
})
