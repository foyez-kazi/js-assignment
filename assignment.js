function feetToMile(feet) {
  if (feet < 0) return 'Feet can not be a negative value'

  const mile = feet / 5280

  return feet + ' feet = ' + mile + ' miles'
}

function woodCalculator(noOfChairs, noOfTables, noOfBeds) {
  if (noOfChairs < 0 || noOfTables < 0 || noOfBeds < 0) {
    return 'Number of chair, table or bed need to be positive'
  }

  const woodForChair = noOfChairs
  const woodForTable = noOfTables * 3
  const woodForBed = noOfBeds * 5

  const wood = woodForChair + woodForTable + woodForBed

  return 'Total need ' + wood + ' cubic wood'
}

function brickCalculator(level) {
  if (level < 0) return 'Please provide a positive level number.'

  const bricksForOneFoot = 1000
  let noOfBricks

  if (level > 20) {
    const rest = level - 20
    const first20Level = 10 * bricksForOneFoot * (15 + 12)
    const restLevel = rest * bricksForOneFoot * 10
    noOfBricks = first20Level + restLevel
  } else if (level > 10) {
    const rest = level - 10
    const first10Level = 10 * bricksForOneFoot * 15
    const restLevel = rest * bricksForOneFoot * 12
    noOfBricks = first10Level + restLevel
  } else {
    noOfBricks = level * bricksForOneFoot * 15
  }

  return 'Total needed ' + noOfBricks + ' bricks'
}

function tinyFriend(friends) {
  if (!Array.isArray(friends)) return 'Please provide an array of friends'
  if (!friends.length) return 'Provided an empty array'

  let tiny = 0
  for (let i = 1; i < friends.length; i++) {
    if (friends[i].length < friends[tiny].length) {
      tiny = i
    }
  }

  return friends[tiny]
}
