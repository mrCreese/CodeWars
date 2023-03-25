function roundMath(number) {
    let arr = String(number).split('.');
    let num = Number(arr[0]);
    let decimal = arr[1] ? Number(arr[1].slice(0, 1)) : 0;
    return decimal >= 5 ? num + 1 : num;
}

function floorMath(number) {
    let num = Number(String(number).split('.')[0]);
    return num;
}

function ceilMath(number) {
    return Math.floor(number) === number ? number : Math.floor(number) + 1;
}
module.exports = { roundMath, floorMath, ceilMath };
