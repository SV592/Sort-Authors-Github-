//Package Imports
const shell = require(`shelljs`);
const fs = require(`fs`);
const readline = require(`readline`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {

    //Stores user entries
    let inputs = [];
    //Count for question cycle 
    let i = 0;

    let question = ``;
    let cli = {};

    //Welcome message 
    console.log(`\n\x1b[35m%s\x1b[0m`, `Welcome To Sort Git Authors CLI`);

    cli.askQuestion = function () {
        //Iterating questions
        if (i === 0) {
            question = `Please enter the repository full path as using this format \n"C:/Users/shaqu/Desktop/...": `;
        } else if (i === 1) {
            question = `Please enter the starting date using this format 'Dec 20 2021': `;
        } else if (i === 2) {
            question = `Please enter the ending date using this format 'Jul 21 2022': `;
        } else if (i === 3) {
            question = `Please enter the number of authors you'd like returned: `;
        }

        //Readline question function 
        reader.question(`${question}`, ans => {
            if (!ans) {
                return console.log("Please enter a value with the proper format");
            } else {
                //Incrementing count
                i++;

                //Logging user entries
                console.log(`\x1b[32m%s\x1b[0m`, `${ans} saved! \n`);

                //Pushing answers to array
                inputs.push(ans);

                if (i < 4) {
                    //Running readline question for 4 iterations
                    cli.askQuestion();
                } else {
                    //Passing strings in sorting function
                    sortAuthors(inputs);
                }
            }

        });
    }

    //Initiating function the first time
    cli.askQuestion();

}

getUserInput();


//Saving top 12 authors from git repo data
function sortAuthors(inputs) {

    //Repository full path
    let repo = inputs[0].toString();

    //Time period
    let startDate = inputs[1].toString();
    let endDate = inputs[2].toString();

    //Authors sorted by most commits from git repo
    const data = shell.exec(`git -C ${repo} shortlog head -sne --since="${startDate}" --until="${endDate}"`);

    //Spliting string line by line and storing it into a new variable
    const info = data.split(`\n`);

    //Number of authors to return 
    let count = parseInt(inputs[3]);

    //Looping through the 12 most popular authors of the repo 
    for (let i = 1; i <= count; i++) {
        fs.appendFileSync(`authors.txt`, `\n ${info[i]}`, (err) => {
            if (err) {
                return console.log(err); //Returning error if operation fails 
            }
        });
    };
    console.clear();
    console.log(`\x1b[32m%s\x1b[0m`, `\n Authors saved sucessfully!`);
    reader.close();
}
















