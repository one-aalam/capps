const got = require('got');

module.exports = {
    getStockQuote(symbol) {
        const url = `http://finance.google.com/finance/info?client=ig&q=${symbol}`;
        got(url)
            .then(res => {
                const stock = JSON.parse(res.body.substr(3));
                const quote = stock[0];
                console.log(`${quote.t} ${quote.l_cur} ${quote.c} (${quote.cp}%) as of ${quote.lt}`);
            })
            .catch(err => {
                console.log(err.response.body);
            });
    }
}