// code your solution here
const records = [
    { year: "2015", result: "w"},
    { year: "2016", result: "L"},
    { year: "2017", result: "L"},
    { year: "2018", result: "L"},
    { year: "2019", result: "N/A"},
    ]  

function superbowlWin(record) {
    const winningRecord = records.find(record => record.result == 'W');
    if (winningRecord) {
        return winningRecord.year
    }  else{
        return undefined
    }
}