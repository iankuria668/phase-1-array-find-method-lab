// code your solution here
const records = [
    { year: "1978", result: "W"},
    { year: "1977", result: "L"},
    { year: "1976", result: "L"},
    { year: "1975", result: "L"},
    { year: "1974", result: "N/A"},
    ]  

const superbowlWin = function(record) {
  for (let i = 0; i < record.length; i++) {
    if (record[i].result === "W") {
      return record[i].year
    }
  }
}