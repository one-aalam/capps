module.exports = function(mapObj) {
    const keyMap = new Map();
    for (let key in mapObj) {
        keyMap.set(key, mapObj[key]);
    }
    return keyMap;
}