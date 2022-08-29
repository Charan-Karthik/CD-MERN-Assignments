class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        // reduce target res by power
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target){
        if(this.stat === "resilience"){
            target.res += this.mag;
        }
        if(this.stat === "power"){
            target.power += this.mag;
        }
    }
}

var redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
var blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

console.log(redBeltNinja);
console.log(blackBeltNinja);

console.log();

// testing attack
redBeltNinja.attack(blackBeltNinja);
console.log("A red belt ninja attacks a black belt ninja!")
console.log(blackBeltNinja);

console.log();

var hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3)
var rejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
var pairProgram = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)

// testing "Hard Algorithm" Effect Card
// console.log(blackBeltNinja);
// console.log(hardAlgo);
hardAlgo.play(blackBeltNinja);
console.log("The 'Hard Algorithm' Effect Card is played on the black belt ninja!")
console.log(blackBeltNinja);

console.log();

// testing "Unhandled Promise Rejection" Effect Card
// console.log(redBeltNinja);
// console.log(rejection);
rejection.play(redBeltNinja);
console.log("The 'Unhandled Promise Rejection' Effect Card is played on the red belt ninja!")
console.log(redBeltNinja);

console.log();

// testing "Pair Programming" Effect Card
// console.log(blackBeltNinja);
// console.log(pairProgram);
pairProgram.play(blackBeltNinja);
console.log("The 'Pair Programming' Effect Card is played on the black belt ninja!")
console.log(blackBeltNinja);