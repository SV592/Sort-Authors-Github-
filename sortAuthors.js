//Package Imports
const shell = require(`shelljs`);
const fs = require(`fs`);

//Period for data retrieval
let startDate = "Dec 9 2021";
let endDate = "Jun 9 2022"

//Authors sorted by most commits from git repo
const data = shell.exec(`git shortlog head -sne --since="${startDate}" --until="${endDate}"`);

//Spliting string line by line and storing it into a new variable
const info = data.split(`\n`);

//Saving top 12 authors from git repo data
function sortAuthors(info) {
    //Number of authors to return 
    let count = 12;

    //Looping through the 12 most popular authors of the repo 
    for (let i = 0; i < count; i++) {
        fs.appendFileSync("authors.txt", `\n ${info[i]}`, (err) => {
            if (err) {
                return console.log(err); //Returning error if operation fails 
            }
        });
    };
    console.log("\n Authors saved sucessfully");
}

//Passing strings in sorting function 
sortAuthors(info);






