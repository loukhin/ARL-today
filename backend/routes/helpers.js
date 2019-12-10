const calculatePrice = (originId, destinationId) => {
    return 15 + (Math.abs(originId - destinationId) - 1) * 5
}

const isHoliday = () => {
    return [0, 6].includes(new Date().getDay())
}

const sleep = (milliseconds) => {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

module.exports = {
    calculatePrice,
    isHoliday,
    sleep
}
