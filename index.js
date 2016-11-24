const readline = require('readline');
const stock = require('./lib/stock');
const mapify = require('./lib/mapify');
const stockSymbols = mapify(require('./data/symbols'));
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else {
        if (stockSymbols.has(str)) {
            console.log(stock.getStockQuote(str));
        } else {
            console.log('No symbol defined for "${str}" key')
        }
    }
});

console.log('Press any key...');