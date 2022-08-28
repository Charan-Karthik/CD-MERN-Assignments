class Ninja {
    constructor(name){
        this.name = name;
        this.health = 80;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Name:", this.name);
    }

    showStats(){
        console.log("Name:", this.name+",", "Health:", this.health+",", "Speed:", this.speed+",", "Strength:", this.strength);
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        if(this.wisdom > 0){     
            this.drinkSake();
            console.log("What one programmer can do in one month, two programmers can do in two months.");
        }
    }
}

const superSensei = new Sensei("Master Splinter");
// superSensei.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
