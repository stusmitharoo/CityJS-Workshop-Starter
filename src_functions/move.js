xports.handler = function (event, context, callback) {
  let response = {
    statusCode: 400,
    body: 'nope'
  };

  if (event.queryStringParameters.board) {
    const board = JSON.parse(event.queryStringParameters.board);

    response = {
      statusCode: 200,
      body: board.indexOf(0).toString()
    }
  }

  callback(null, response);
}
