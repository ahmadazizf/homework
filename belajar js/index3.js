class coffeeMachine {
    #voltage = 10;
    #waterTemperature = 90;
    #waterVolume = 1;
    #time = 2;

    #takeVoltage() {
        console.log("Taking electricity")
    }
    #fillWater() {
        console.log("filling water with", this.#waterVolume,"litre")
    }
    #boilCoffee() {
        console.log("heating water until", this.#waterTemperature, "degrees for", this.#time)
    }

    start {
        this.#takeVoltage();
        this.#fillWater();
        this.#boilCofee();
        console.log("Coffee is finished");
    }
}
coffeeMachine.start();