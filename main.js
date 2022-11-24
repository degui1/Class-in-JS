class Car {
    constructor(name, color, year){
        this.name = name;
        this.color = color;
        this.year = year;
        this.km = 0;
        this.direction = ''
        this.directionMessage = ''
        this.kmMessage = ''
    }
    moveForward(meters){
        this.km += (meters/1000);
        this.direction = 'Forward'
        this.directionMessage = `Your car moved ${meters} m forward`;
        this.kmMessage = `These are how many kilometers your car moved: ${this.km.toFixed(2)} km`;
    }
    moveBack(meters){
        this.km += (meters/1000);
        this.direction = "back"
        this.directionMessage = `Your car moved ${meters} m back`;
        this.kmMessage = `These are how many kilometers your car moved: ${this.km.toFixed(2)} km`;
    }
    turnRight(meters){
        this.km += (meters/1000);
        this.direction = "Right"
        this.directionMessage = `Your car turn ${meters} m right`;
        this.kmMessage = `These are how many kilometers your car moved: ${this.km.toFixed(2)} km`;
    }
    turnLeft(meters){
        this.km += (meters/1000);
        this.direction = "Left"
        this.directionMessage = `Your car turn ${meters} m left`;
        this.kmMessage = `These are how many kilometers your car moved: ${this.km.toFixed(2)} km`;
    }
}

const form = document.querySelector('[data-form]')
var newCar;
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const carName = document.querySelector('[data-carName]').value
    const carColor = document.querySelector('[data-carColor]').value
    const carYear = document.querySelector('[data-carYear]').value
    
    newCar = new Car(carName, carColor, carYear)
    if (newCar.name != '' || newCar.color != '' || newCar.year != ''){
        document.querySelector('.popUp').style = 'display:inline-block;'
    }
})
let objDirection = {
    Forward: () => {
        return newCar.moveForward(300)
    },
    Back: () => {
        return newCar.moveBack(300)
    },
    Left: () => {
        return newCar.turnLeft(300)
    },
    Right: () => {
        return newCar.turnRight(300)
    }
}
const directions = document.querySelector('[data-directions]')
for (let i = 0; i < directions.childNodes.length; i++) {
    const child = directions.childNodes[i];

    child.addEventListener('click', (e => {
        if (newCar == null) alert("Select a car");
        // console.log(e.target.textContent)
        let event = e.target.textContent
        objDirection[event]()

        setInfo()
    }))
    
}

function setInfo() {
    const info = document.querySelector('#infoCar');
    info.children[0].textContent = newCar.name;
    info.children[1].textContent = newCar.color;
    info.children[2].textContent = newCar.year;
    info.children[3].textContent = newCar.direction;

    setLogs()
}

function setLogs() {
    const logs = document.querySelector('#logs')
    logs.children[0].textContent = newCar.directionMessage;
    logs.children[1].textContent = newCar.kmMessage;

    updateKm()
}

function updateKm() {
    const infoKm = document.querySelector('#infoKm')
    infoKm.textContent = newCar.km.toFixed(2);
}