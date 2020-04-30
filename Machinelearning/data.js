const brain = require('brain.js');
const data = require('./data.json');





const network = new brain.recurrent.LSTM();



const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));



network.train(trainingData,{
    iterations: 2000
});



const output = network.run(`I fixed the power supply`);
const output2 = network.run(`Computer monitor`);
const output3 = network.run(`code`)

console.log(`Category: ${output}`);
console.log(`Category: ${output2}`);
console.log(`Category: ${output3}`);