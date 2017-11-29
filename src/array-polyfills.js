Array.prototype.contains = function (array) {
    for (let i = 0; i < array.length; i++)
        if (!this.includes(array[i])) return false
    return true
}