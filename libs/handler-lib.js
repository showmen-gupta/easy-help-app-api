export default function handler (lambda) {
  return async function (event, context) {
    let body, status

    try {
      // Run the lambda function
      body = await lambda(event, context)
      status = 200
    } catch (e) {
      body = { error: e.message }
      status = 500
    }

    return {
      status,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
    }
  }
}
