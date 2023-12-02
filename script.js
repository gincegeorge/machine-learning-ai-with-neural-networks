const config = {
    inputSize: 3,
    hiddenLayers: [4, 5],
    outputSize: 2,
}
//intial data
const data = [
    { input: { r: 0, g: 0, b: 0 }, output: [1] }, { input: { r: 1, g: 1, b: 1 }, output: [0] }, { input: { r: 0, g: 0, b: 0 }, output: [1] }, { input: { r: 1, g: 1, b: 1 }, output: [0] }, { input: { r: 0.2893912535699783, g: 0.6978151734453348, b: 0.6648490813140073 }, output: [1] }, { input: { r: 0.03494001198549057, g: 0.12375864266627867, b: 0.7487359833654894 }, output: [1] }, { input: { r: 0.05981489239612858, g: 0.7718564818589229, b: 0.3286625886889556 }, output: [0] }, { input: { r: 0.9852046284601084, g: 0.7933232053220185, b: 0.7521660289140493 }, output: [0] }, { input: { r: 0.49536519744023777, g: 0.04752596582560864, b: 0.15976623916617605 }, output: [1] }, { input: { r: 0.8872382457961503, g: 0.22985078321950203, b: 0.1564608746997933 }, output: [1] }, { input: { r: 0.7544610295408567, g: 0.9637789873300366, b: 0.15723229938538674 }, output: [0] }, { input: { r: 0.8202891419720075, g: 0.8603218968499569, b: 0.10812688918352831 }, output: [0] }, { input: { r: 0.3954751056981174, g: 0.8246366593679353, b: 0.9060888671439471 }, output: [0] }, { input: { r: 0.31345622465712686, g: 0.8644944925399847, b: 0.5964027745007223 }, output: [0] }, { input: { r: 0.2361028760556596, g: 0.23837752354117137, b: 0.42732398774098823 }, output: [1] }, { input: { r: 0.12738018528126194, g: 0.4400236892318268, b: 0.5906429025543436 }, output: [1] }, { input: { r: 0.9839943779921194, g: 0.8219427758480193, b: 0.15296626772943722 }, output: [0] }, { input: { r: 0.32698794033622747, g: 0.5126225909456741, b: 0.5764018609210826 }, output: [1] }, { input: { r: 0.09320509778702823, g: 0.3085582008037675, b: 0.3861220162237473 }, output: [1] }, { input: { r: 0.6517166546323023, g: 0.2818065342327736, b: 0.2540222033666184 }, output: [1] }, { input: { r: 0.0332230337129058, g: 0.6551918900737821, b: 0.7679032588765773 }, output: [1] }, { input: { r: 0.10855477717614082, g: 0.48000605671895435, b: 0.3544968645654567 }, output: [1] }, { input: { r: 0.7774112108847429, g: 0.0011602181628114216, b: 0.5302533213811089 }, output: [1] }, { input: { r: 0.8210890692425947, g: 0.8976958618787145, b: 0.28285127858801884 }, output: [0] }, { input: { r: 0.38460765025666, g: 0.5308707570555182, b: 0.7891367895466348 }, output: [1] }, { input: { r: 0.07226555031254711, g: 0.9964338724621951, b: 0.8575430172171683 }, output: [1] }, { input: { r: 0.917304373473355, g: 0.46609714906976696, b: 0.936775976018134 }, output: [0] }, { input: { r: 0.47160504768908007, g: 0.9510870445841153, b: 0.64390220450861 }, output: [0] }, { input: { r: 0.8066689489301548, g: 0.01559262427833108, b: 0.9155879202874435 }, output: [1] }, { input: { r: 0.6050894798123105, g: 0.09298508208526357, b: 0.38400053205151163 }, output: [1] }, { input: { r: 0.5167605810753753, g: 0.6443563971133128, b: 0.789891179263241 }, output: [1] }, { input: { r: 0.8920735766225565, g: 0.3284546707239713, b: 0.6990982306655824 }, output: [0] }, { input: { r: 0.013130294947489851, g: 0.43469344029440027, b: 0.7654360159781051 }, output: [1] }, { input: { r: 0.07332822610346978, g: 0.2821778771660315, b: 0.060866395676736795 }, output: [1] }, { input: { r: 0.5475803369302372, g: 0.12995787104298628, b: 0.9905093093266315 }, output: [1] }, { input: { r: 0.936856174381886, g: 0.420540031946538, b: 0.7197225374451561 }, output: [0] }, { input: { r: 0.5549588638943974, g: 0.18396414500268854, b: 0.0013180530509036004 }, output: [1] }, { input: { r: 0.9199390135748853, g: 0.8580664622080965, b: 0.3871053844676411 }, output: [0] }, { input: { r: 0.3828795974683401, g: 0.08586312313505329, b: 0.7695999978968686 }, output: [1] }, { input: { r: 0.26375896645638, g: 0.6465076371113221, b: 0.4122991038169581 }, output: [1] }, { input: { r: 0.16198812679342134, g: 0.5776982098182444, b: 0.27609360040928954 }, output: [0] }, { input: { r: 0.10727737016892602, g: 0.45569171451017243, b: 0.37447705120436825 }, output: [1] }, { input: { r: 0.9737279201865634, g: 0.5611938429969205, b: 0.33826567253881645 }, output: [0] }, { input: { r: 0.11411175318962608, g: 0.49051036976159734, b: 0.27232517538381185 }, output: [1] }, { input: { r: 0.948495959378659, g: 0.7457046553051914, b: 0.15518062355099982 }, output: [0] }, { input: { r: 0.853382976333541, g: 0.5106405613324545, b: 0.5191262793582716 }, output: [0] }, { input: { r: 0.7169733875629245, g: 0.9995603321837254, b: 0.06432918837431778 }, output: [0] }, { input: { r: 0.21531043599348232, g: 0.6258896027341883, b: 0.046197725909324694 }, output: [1] }, { input: { r: 0.44702742695863007, g: 0.6971239800722473, b: 0.0239479272418599 }, output: [0] }, { input: { r: 0.5451020299739204, g: 0.5074970779272625, b: 0.7217573759363067 }, output: [1] }, { input: { r: 0.6898791239176831, g: 0.30661228584515476, b: 0.07789062572751337 }, output: [1] }, { input: { r: 0.9848036326343306, g: 0.7793612668337673, b: 0.6374528040474339 }, output: [0] }, { input: { r: 0.3309603270223884, g: 0.23489019817580292, b: 0.2543289854721946 }, output: [1] }, { input: { r: 0.9209717023159412, g: 0.6163316029574464, b: 0.45511210081375264 }, output: [0] }, { input: { r: 0.6630776231082955, g: 0.588404929084537, b: 0.31270223067917424 }, output: [0] }, { input: { r: 0.7761758566482586, g: 0.04304893209198135, b: 0.7308443145280779 }, output: [1] }, { input: { r: 0.5086761946533866, g: 0.9997762175358935, b: 0.9482693146132288 }, output: [0] }
]

//pass cofig to new network 
const net = new brain.NeuralNetwork()
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

//creating click events
whiteBtn.addEventListener('click', () => {
    chooseColor(1)
})
blackBtn.addEventListener('click', () => {
    chooseColor(0)
})
printBtn.addEventListener('click', print)

//method to choose color white or black
function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}

//method to print data to console
function print() {
    console.log(JSON.stringify(data))
    document.getElementById('dataWrap').innerHTML = JSON.stringify
}

//set a random color and make the ai guess color
function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0]

    guessE1.style.color = guess > .5 ? "#fff" : "#000"

    colorE1.style.backgroundColor = `rgba(${color.r * 255},${color.g * 255},${color.b * 255})`
}
