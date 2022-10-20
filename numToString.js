const numList = (number, numLength) => {
  let numberVal = ''
  if (number === '0' && numLength === 1) {
    numberVal = 'Zero'
  } else if (number === '1') {
    numberVal = 'One'
  } else if (number === '2') {
    numberVal = 'Two'
  } else if (number === '3') {
    numberVal = 'Three'
  } else if (number === '4') {
    numberVal = 'Four'
  } else if (number === '5') {
    numberVal = 'Five'
  } else if (number === '6') {
    numberVal = 'Six'
  } else if (number === '7') {
    numberVal = 'Seven'
  } else if (number === '8') {
    numberVal = 'Eight'
  } else if (number === '9') {
    numberVal = 'Nine'
  }
  return numberVal
}

const divByTen = (number) => {
  let tenNumberVal = ''
  if (number === '10') {
    tenNumberVal = 'Ten'
  } else if (number === '20') {
    tenNumberVal = 'Twenty'
  } else if (number === '30') {
    tenNumberVal = 'Thirty'
  } else if (number === '40') {
    tenNumberVal = 'Forty'
  } else if (number === '50') {
    tenNumberVal = 'Fifty'
  } else if (number === '60') {
    tenNumberVal = 'Sixty'
  } else if (number === '70') {
    tenNumberVal = 'Seventy'
  } else if (number === '80') {
    tenNumberVal = 'Eighty'
  } else if (number === '90') {
    tenNumberVal = 'Ninety'
  }
  return tenNumberVal
}

const specialNum = (number) => {
  let specialNumVal = ''
  if (number === '11') {
    specialNumVal = 'Eleven'
  } else if (number === '12') {
    specialNumVal = 'Twelve'
  } else if (number === '13') {
    specialNumVal = 'Thirteen'
  } else if (number === '14') {
    specialNumVal = 'Fourteen'
  } else if (number === '15') {
    specialNumVal = 'Fifteen'
  } else if (number === '16') {
    specialNumVal = 'Sixteen'
  } else if (number === '17') {
    specialNumVal = 'Seventeen'
  } else if (number === '18') {
    specialNumVal = 'Eighteen'
  } else if (number === '19') {
    specialNumVal = 'Nineteen'
  }
  return specialNumVal
}

const numtoString = (integer) => {
  if (Number.isNaN(integer || integer > 999999)) {
    console.log('Invalid input')
    process.exit(1)
  }
  const numStr = integer.toString()
  const numStrLength = numStr.length
  let finalStr = ''

  if (numStrLength > 1 && numStr[0] === '0') {
    let zeroFound = 0
    for (let i = 0; i < numStrLength; i += 1) {
      if (numStr[i] === 0) {
        zeroFound += 1
      }
    }
  }

  switch (numStrLength) {
    case 1: {
      finalStr = numList(numStr, numStr.length)
      break
    }
    case 2: {
      let newNum
      if (parseInt(numStr, 10) % 10 !== 0) {
        if (numStr !== '11' && numStr !== '12' && numStr !== '13'
        && numStr !== '14' && numStr !== '15' && numStr !== '16'
        && numStr !== '17' && numStr !== '18' && numStr !== '19') {
          newNum = Math.floor(parseInt(numStr, 10) / 10) * 10
          console.log(`${divByTen(newNum.toString())} ${numList(numStr[1], numStr.length)}`)
        } else {
          finalStr = specialNum(numStr)
        }
      } else if (parseInt(numStr, 10) % 10 === 0) {
        finalStr = divByTen(numStr)
      }
      break
    }
    case 3: {
      const joinStr = numStr[1] + numStr[2]
      let newNum

      if (parseInt(joinStr, 10) % 10 !== 0) {
        if (joinStr !== '11' && joinStr !== '12' && joinStr !== '13'
        && joinStr !== '14' && joinStr !== '15' && joinStr !== '16'
        && joinStr !== '17' && joinStr !== '18' && joinStr !== '19') {
          newNum = Math.floor(parseInt(joinStr, 10) / 10) * 10
          finalStr = `${numList(numStr[0], numStr.length)} hundred ${divByTen(newNum.toString())} ${numList(numStr[2], numStr.length)}`
        } else {
          finalStr = `${numList(numStr[0], numStr.length)} hundred ${specialNum(joinStr)}`
        }
      } else if (parseInt(joinStr, 10) % 10 === 0) {
        finalStr = `${numList(numStr[0], numStr.length)} hundred ${divByTen(joinStr)}`
      } else {
        finalStr = `${numList(numStr[0], numStr.length)} hundred ${numList(numStr[2], numStr.length)}`
      }
      break
    }
    case 4: {
      let newNum
      let joinStr = numStr[2] + numStr[3]
      if (parseInt(joinStr, 10) % 10 !== 10) {
        if (joinStr !== '11' && joinStr !== '12' && joinStr !== '13'
        && joinStr !== '14' && joinStr !== '15' && joinStr !== '16'
        && joinStr !== '17' && joinStr !== '18' && joinStr !== '19') {
          newNum = Math.floor(parseInt(joinStr, 10) / 10) * 10
          joinStr = `${divByTen(newNum.toString())} ${numList(numStr[3], numStr.length)}`
        } else {
          joinStr = specialNum(joinStr)
        }
      } else if (parseInt(joinStr, 10) % 10 === 10) {
        joinStr = divByTen(joinStr)
      }
      if (numStr[1] === '0') {
        finalStr = `${numList(numStr[0], numStr.length)} thousand ${numList(numStr[1], numStr.length)}${joinStr}`
      } else {
        finalStr = `${numList(numStr[0], numStr.length)} thousand ${numList(numStr[1], numStr.length)} hundred ${joinStr}`
      }
      break
    }
    case 5: {
      let newNum
      let joinStr1 = numStr[0] + numStr[1]
      let joinStr2 = numStr[3] + numStr[4]

      if (parseInt(joinStr1, 10) % 10 !== 0) {
        if (joinStr1 !== '11' && joinStr1 !== '12' && joinStr1 !== '13'
        && joinStr1 !== '14' && joinStr1 !== '15' && joinStr1 !== '16'
        && joinStr1 !== '17' && joinStr1 !== '18' && joinStr1 !== '19') {
          newNum = Math.floor(parseInt(joinStr1, 10) / 10) * 10
          joinStr1 = `${divByTen(newNum.toString())} ${numList(numStr[1], numStr.length)}`
        } else {
          joinStr1 = specialNum(joinStr1)
        }
      } else if (parseInt(joinStr1, 10) % 10 === 0) {
        joinStr1 = divByTen(joinStr1)
      }
      if (parseInt(joinStr2, 10) % 10 !== 0) {
        if (joinStr1 !== '11' && joinStr1 !== '12' && joinStr1 !== '13'
        && joinStr1 !== '14' && joinStr1 !== '15' && joinStr1 !== '16'
        && joinStr1 !== '17' && joinStr1 !== '18' && joinStr1 !== '19') {
          newNum = Math.floor(parseInt(joinStr2, 10) / 10) * 10
          joinStr2 = `${divByTen(newNum.toString())} ${numList(numStr[4], numStr.length)}`
        } else {
          joinStr2 = specialNum(joinStr2)
        }
      } else if (parseInt(joinStr2, 10) % 10 === 0) {
        joinStr2 = divByTen(joinStr2)
      } else {
        joinStr2 = numList(numStr[4], numStr.length)
      }
      if (numStr[2] === '0') {
        finalStr = `${joinStr1} thousand${numList(numStr[2], numStr.length)}${joinStr2}`
      } else {
        finalStr = `${joinStr1} thousand ${numList(numStr[2], numStr.length)} hundred ${joinStr2}`
      }
      break
    }
    case 6: {
      let newNum
      let joinStr1 = numStr[1] + numStr[2]
      let joinStr2 = numStr[4] + numStr[5]

      if (parseInt(joinStr1, 10) % 10 !== 0) {
        if (joinStr1 !== '11' && joinStr1 !== '12' && joinStr1 !== '13'
        && joinStr1 !== '14' && joinStr1 !== '15' && joinStr1 !== '16'
        && joinStr1 !== '17' && joinStr1 !== '18' && joinStr1 !== '19') {
          newNum = Math.floor(parseInt(joinStr1, 10) / 10) * 10
          joinStr1 = `${divByTen(newNum.toString())} ${numList(numStr[2], numStr.length)}`
        } else {
          joinStr1 = specialNum(joinStr1)
        }
      } else if (parseInt(joinStr1, 10) % 10 === 0) {
        joinStr1 = divByTen(joinStr1)
      }
      if (parseInt(joinStr2, 10) % 10 !== 0) {
        if (joinStr2 !== '11' && joinStr2 !== '12' && joinStr2 !== '13'
        && joinStr2 !== '14' && joinStr2 !== '15' && joinStr2 !== '16'
        && joinStr2 !== '17' && joinStr2 !== '18' && joinStr2 !== '19') {
          newNum = Math.floor(parseInt(joinStr2, 10) / 10) * 10
          joinStr2 = `${divByTen(newNum.toString())} ${numList(numStr[5], numStr.length)}`
        } else {
          joinStr2 = specialNum(joinStr2)
        }
      } else if (parseInt(joinStr2, 10) % 10 === 0) {
        joinStr2 = divByTen(joinStr2)
      } else {
        joinStr2 = numList(numStr[4])
      }
      if (numStr[3] === '0') {
        finalStr = `${numList(numStr[0], numStr.length)} hundred ${joinStr1} thousand ${numList(numStr[3], numStr.length)}${joinStr2}`
      } else {
        finalStr = `${numList(numStr[0], numStr.length)} hundred ${joinStr1} thousand ${numList(numStr[3], numStr.length)} hundred ${joinStr2}`
      }
      break
    }
    default:
      console.log('error max length reached');
  }
  return finalStr
}

console.log(numtoString(0))

