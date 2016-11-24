const table = require('tty-table');

module.exports = {
    table(header, data) {
        let _data = [];
        // header
        header = header.map((headerItem) => {
            return {
                value: headerItem
            }
        });
        for (let dataKey in data) {
            _data.push([dataKey, data[dataKey]]);
        }

        return table(header, _data, {
            borderStyle: 1,
            paddingBottom: 0,
            headerAlign: "center",
            align: "center",
            color: "white"
        }).render();
    }
}