function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }


            if (headsCount === 5) {
                resolve("Getting 5 heads in a row took " + attempts + " attempts.")
            }
            if (attempts > 100) {
                reject("More than 100 tries later, we didn't get 5 heads in a row... Better luck next time!")
            }
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");


// console.log(tossCoin());

// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");