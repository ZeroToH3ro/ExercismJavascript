/*
1. Handle condition input 
   MP-W-D-L-P

const input =
'Allegoric Alaskans;Blithering Badgers;loss\n' +
'Devastating Donkeys;Allegoric Alaskans;loss\n' +
'Courageous Californians;Blithering Badgers;draw\n' +
'Allegoric Alaskans;Courageous Californians;win';
*/
//2. Format result
const tournament = (input) => {
    //just the header if no input
    if (input) return "Team                           | MP |  W |  D |  L |  P";
    let result = {};
    let arrayInput = input.split("\n");

    let header = '| MP |  W |  D |  L |  P';
    //Handle for each input line
    arrayInput.forEach(line => {
        let teams = line.split(";");
        //Set initial value for team 1-2, if they don't have
        if (result[teams[0]] == undefined) result[teams[0]] = [0, 0, 0, 0, 0];
        if (result[teams[1]] == undefined) result[teams[1]] = [0, 0, 0, 0, 0];

        //Increate match play for each team
        result[teams[0]][0]++;
        result[teams[1][0]]++;

        //Handle the result from teams[2]
        //Win: result[teams[0]][1] + 1 -- result[teams[1]][3] + 1 -- result[teams[0]][4] + 3
        //Lose: result[teams[0]][3] + 1 -- result[teams[1]][1] + 1 -- result[teams[1]][4] + 3
        //Tie: result[teams[0]][2] + 1 -- result[teams[1]][2] + 1 -- result[teams[0]][4] + 1 -- result[teams[1]][4] + 1 
        if (teams[2] == "win") {
            result[teams[0]][1] += 1;
            result[teams[1]][3] += 1;
            result[teams[0]][4] += 3;
        }
        if (teams[2] == "draw") {
            result[teams[0]][2] += 1;
            result[teams[1]][2] += 1;
            result[teams[0]][4] += 1;
            result[teams[1]][4] += 1;
        }
        if (teams[2] == "lose") {
            result[teams[0]][3] += 1;
            result[teams[1]][1] += 1;
            result[teams[1]][4] += 3;
        }
    });

    // Handle Format For Result
    let results = "";
    let sortable = [];
    //Pass variable into format array
    for (var team in result) {
        sortable.push([team, result[team]]);
    }
    /*
    this code sorts the sortable array based on the value at index [1][4]
    in ascending order. If multiple elements have the same value at [1][4],
    it falls back to a secondary comparison that sorts them in descending order
    based on the value at index [0]
    */
    sortable.sort(function (team1, team2) {
        if (team1[1][4] - team2[1][4]) {
            return team2[0].localeCompare(team1[0]); //descending
        } else return team1[1][4] - team2[1][4];     //ascending
    });

    let objSorted = {};
    //Convert data from array into object
    sortable.forEach(function (item) {
        objSorted[item[0]] = item[1];
    })

    for (const [key, points] of Object.entries(objSorted)) {
        let pointLine = "";
        //Handle point of each team
        points.forEach(point => {
            let spaces = 3 - point.toString().length;
            let spacePoint = ' '.repeat(spaces) + point;
            pointLine = `${spacePoint} |${spacePoint}`;
        });

        let spaces = ' '.repeat(30 - key.length);
        results = `\n${key}${spaces}${pointLine}${results}`;
    }

    return `Team ${' '.repeat(26)}${header}${results}`;
}