class traveler {
    constructor (name, food, isHeatlthy) {
        /*name, which must be provided as a parameter to the constructor.
        an amount of food, with an initial value of 1.
        an isHealthy property, with an initial value of true, 
        which indicates whether a traveler is sick.*/        
        this.name = name
        this.food = 1
        this.isHeatlthy = true
    }
    hunt () {
        //hunt() – Increases the traveler's food by 2.
        this.food += 2
    }   
    eat () {
        /*Consumes 1 unit of the traveler's food. 
        If the traveler doesn't have any food left to eat, 
        the traveler is no longer healthy (set isHealthy to false).*/

        if (this.food < 1) {
            return this.isHeatlthy = false
        }
        else {
            this.food -= 1
        }
    }   
}

class wagon {
    constructor (capacity, passengers) {
        /*a capacity, which must be provided to the constructor: 
        this is the maximum number of passengers a wagon can hold.
        a passengers list, which is initially an empty array.*/
        this.capacity = capacity
        this.passengers = []
        
    }
    getAvailableSeatCount () {
        /*Returns the number of empty seats, 
        determined by the capacity set when the wagon was created, 
        subtracted by the number of passengers currently on board.*/
        let AvailableSeatCount = this.capacity - this.passengers.length
        return AvailableSeatCount
    }   
    join (traveler) {
        /*Adds the traveler to the wagon if there is space. 
        If the wagon is already at maximum capacity, don't add them.*/
        if(this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
            
        }

    }   
    shouldQuarantine () {
        /*Returns true if there is at least one unhealthy person in the wagon. Return false if not.*/
        let healthyPassenger = this.passengers.some(traveler => traveler.isHeatlthy === false)
        return healthyPassenger
          
    }

    totalFood () {
        /*Returns the total amount of food among all passengers in the wagon.*/
        let meals = 0
        for(let index = 0; index < this.passengers.length; index += 1) {
            meals += this.passengers[index].food
        }
        return meals
    }
}

//TESTER CODE PART ONE

// let wagon = new Wagon(2)
// // Create three travelers
// let henrietta = new Traveler('Henrietta')
// let juan = new Traveler('Juan')
// let maude = new Traveler('Maude')
// console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
// wagon.join(henrietta)
// console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
// wagon.join(juan)
// wagon.join(maude)  // There is no room for her!
// console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
// henrietta.hunt()   // Henrietta goes in search of food.
// juan.eat()         // Juan eats – as Juan does. 🤣
// juan.eat()         // Juan has run out of food!
// console.log(juan)
// console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
// console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)


class Doctor extends traveler {
    heal () {
    //set the traveler's isHealthy property to true.
    this.isHeatlthy = true
    }
}


class Hunter extends traveler {

    hunt () {
        // Increase the hunter's food by 5. (A normal traveler gains only 2.)
        this.food += 5
    }

    eat () {
        //Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, 
        //they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
        if (this.food < 2) {
            this.food <= 1
        }
        else {
            return this.isHeatlthy = false
        }

    }

    giveFood(traveler, numOfFoodUnits){
        //Transfers numOfFoodUnits from the hunter to the traveler. 
        //If the hunter doesn't have enough food, then no food should be transferred.
        this.numOfFoodUnits = this.food + this.numOfFoodUnits
        this.traveler = traveler
        if (this.food < 5) {
            this.food <= 1
        }
        else {
            return this.isHeatlthy = false
        }

    }
}

//TESTER CODE PART TWO

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);



