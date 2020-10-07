module.exports = function toReadable(number) {
    dataArray = Array.from(number.toString()),
        first = +dataArray[0],
        second = +dataArray[1],
        third = +dataArray[2],
        fourd = +(dataArray[1] + dataArray[2]);
    const mapNumbers = new Map([
        [0, ''],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety']

    ]);


    if (number === 0) {
        return ('zero');
    }
    if (dataArray.length === 1) {
        return (mapNumbers.get(number));
    }

    if (dataArray.length === 2 && number < 20) {
        return (mapNumbers.get(number));
    }

    if (number >= 20 && number < 100) {
        return (((mapNumbers.get(number - dataArray[1])) + " " + (mapNumbers.get(second)).trim()).trim());
    }

    if (fourd > 10 && fourd < 20 && number >= 100) {
        return (mapNumbers.get(first) + " " + "hundred" + " " + mapNumbers.get(fourd));
    }

    if (fourd <= 10 && number >= 100) {
        return ((mapNumbers.get(first) + " " + "hundred" + " " + mapNumbers.get(fourd)).trim());
    }

    if (number >= 100 && fourd >= 20) {
        return ((((mapNumbers.get(first)) + " " + "hundred" + " " + (mapNumbers.get(second * 10)).trim()).trim() + " " + (mapNumbers.get(third)).trim()).trim());
    }
}