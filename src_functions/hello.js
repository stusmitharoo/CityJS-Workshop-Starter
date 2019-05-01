import trainedNet from './trained-net';

exports.handler = function (event, context, callback) {
  let result = []
  let board = JSON.parse(event.body)
  const boardSum = board.reduce((a, b) => a + b, 0)

  result = trainedNet(board)
  console.log(result)

  const emptySpaces = board.map((space, index) => {
    return space === 0 ? result[index] : null
  }).filter(space => {
    return space !== null
  })

  const response = {
    index: result.indexOf(emptySpaces.sort(function (a, b) { return b - a })[0])
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })
}