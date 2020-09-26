/* eslint-disable no-undef */
import { remove } from '../lambdas/deleteUser'

const mockedUser = {
  pathParameters: {
    id: 'e34e1840-f999-11ea-b199-4f3d1fb81a54'
  },
  requestContext: {
    identity: {
      cognitoIdentityId: 'USER-SUB-1234'
    }
  }
}

const context = {}
let result
describe('deleteUser', () => {
  beforeEach(() => {
    process.env.tableName = 'easy_help_app_db'
    result = remove(mockedUser, context)
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
