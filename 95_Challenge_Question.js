// Write a Car Class with properties like make, model, and methods like start and stop.

// A method start that logs
// >>Car already running (if running)  Or Car started (if not running) 
// A method stop that logs
// >> Car already stopped (if stopped)  Or Car stopped (if not stopped)

// class >>Car
// properties like make, model
// methods like start and stop.

// Approach:
// 
// class Car{}
// constructor(make,model){
    // this keyword 
    // this.make=make;
    // this.model=model;
    // this.isRunning=false
// }

//methods
// start()
// >> if condition >>running >>Car already running ||not running >> Car started 
// this.make and this.model

// stop()
// >> if condition >>stopped >>Car already stopped ||not stopped >>Car stopped
// this.make and this.model

// getCarDetails() >>make and model >>// this.make and this.model

// Create an instance >> new keyword
// let myCar=new Car("Suzuki",Swift)

// myCar.start()
// myCar.stop()
// myCar.getCarDetails()

class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
        this.isRunning=false;
    }
    start(){
        if(this.isRunning){
            console.log(`${this.make} ${this.model} is already running`)
        }else{
            this.isRunning=true
            console.log(`${this.make} ${this.model} started`)
        }
    }  

    stop(){
        if(!this.isRunning){
            console.log(`${this.make} ${this.model} is already stopped`)
        }else{
            this.isRunning=false
            console.log(`${this.make} ${this.model} stopped`)
        }
    }

  getCarDetails(){
    console.log(`${this.make} ${this.model}`)
  }
}

let myCar=new Car("Suzuki","Swift")
console.log(myCar)

myCar.getCarDetails()
myCar.start()
myCar.stop()
myCar.stop()
myCar.start()
myCar.start()













