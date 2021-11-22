class Car {
    speed;
    speedMax;
    acc; 
    distance;

    constructor(speedMax, acc) {
        this.speedMax = speedMax;
        this.acc = acc;
        this.speed = 0;
        this.distance = 0;
    }

    accelerate() {
        this.speed = this.speed + this.acc;
        if(this.speedMax <= this.speed) { this.speed = this.speedMax}
        this.distance = this.distance + this.speed;
    }
}


class Race {
    distance;
    instant;
    cars = [new Car(200,5), new Car(220,4)];
    results = [];

    constructor(distance) {
        this.distance = distance;
    }

    start(){

        let timer = setInterval(() => {

           if( this.results.length === this.cars.length ) clearInterval(timer);
        }, 1000);


        while(this.results.length === this.cars.length) {
            this.instant++;
            this.cars.map((car) => {
                car.accelerate();
                if(car.distance >= this.distance) {
                    this.results.push({instant:this.instant, car});
                }
            })
        }
    }

}


race = new Race(200);
race.start();
console.log(race.results);