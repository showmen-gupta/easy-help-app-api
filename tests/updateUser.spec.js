/* eslint-disable no-undef */
import { update } from '../lambdas/updateUser'

const mockedUser = {
  body: '{"username":"showmen das","password":"123456"}',
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
describe('updateUser', () => {
  beforeEach(() => {
    process.env.tableName = 'easy_help_app_db'
    result = update(mockedUser, context)
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
      expect(data.status).not.toBe(undefined)
    })
  })
})
