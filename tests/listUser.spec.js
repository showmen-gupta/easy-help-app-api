/* eslint-disable no-undef */
import { list } from '../lambdas/listUser'

const mockedUser = {
  requestContext: {
    identity: {
      cognitoIdentityId: 'USER-SUB-1234'
    }
  }
}

const context = {}
let result
describe('listUser', () => {
  beforeEach(() => {
    process.env.tableName = 'easy_help_app_db'
    result = list(mockedUser, context)
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
