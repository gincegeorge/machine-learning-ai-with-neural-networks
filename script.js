const config = {
    inputSize: 3,
    hiddenLayers: [4, 5],
    outputSize: 2,
}
//intial data
const data = [
    {
        input: { r: 0, g: 0, b: 0 },
        output: [1]
    },
    {
        input: { r: 1, g: 1, b: 1 },
        output: [0]
    },
]

//pass cofig to new network 
const net = new brain.NeuralNetwork(config)
net.train(data)

//visualize the algorithm
const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')

const whiteBtn = document.getElementById('white-button')
const blackBtn = document.getElementById('black-button')
const printBtn = document.getElementById('print-button')

let color;
setRandomColor()

whiteBtn.addEventListener('click', () => {
    chooseColor(1)
})
blackBtn.addEventListener('click', () => {
    chooseColor(0)
})
printBtn.addEventListener('click', print)

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })

    console.log({
        input: color,
        output: [value]
    });
    setRandomColor()
}

function print() {
    console.log(JSON.stringify(data))
}

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0]

    guessE1.style.color = guess > .5 ? "#fff" : "#000"

    // console.log(color);
    colorE1.style.backgroundColor = `rgba(${color.r * 255},${color.g * 255},${color.b * 255})`
}

console.log(net.run({ r: 0, g: .5, b: 1 }))