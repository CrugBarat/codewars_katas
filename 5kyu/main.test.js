const moveZeros = require('./main.js')

describe("Move Zeros to End", () => {

  test('T1', () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,"a"])).toStrictEqual([false,1,1,2,1,3,"a",0,0])
  })

})
