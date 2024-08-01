module.exports = function toReadable (number) {
    function singleDigit(n) {
        switch (n) {
            case 0: return 'zero'
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            default: return '';
        }
    }

    function elevenToTwenty(n) {
        switch (n) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            default: return '';
        }
    }

    function twentyToNinety(n) {
        switch (n) {
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety';
            default: return '';
        }
    }

    function singleDigitToWord(n) {
        if (n === 0) {
            return 'zero';  
        } else if (n > 0 && n < 10) {
            return singleDigit(n);
        } else {
            return 'number is too big'
        }
    }

    function doubleDigitToWord(n) {
        if (n >= 0 && n < 10) {
            return singleDigitToWord(n);
        } else if (n >= 10 && n < 20) {
            return elevenToTwenty(n);
        } else if (n >= 20 && n < 100) {
            return n % 10 === 0 ? twentyToNinety(Math.floor(n / 10)) : twentyToNinety(Math.floor(n / 10)) + ' ' + singleDigit(n % 10); 
        } else {
            return 'number too big';
        }
    }

    function hundredsDigitToWord(n) {
        if (n < 100) {
            return doubleDigitToWord(n);
        } else if (n >= 100 && n < 1000) {
            return n % 100 === 0 ? singleDigit(Math.floor(n / 100)) + ' hundred' : singleDigit(Math.floor(n / 100)) + ' hundred' + ' ' + doubleDigitToWord(n % 100);
        } else {
            return 'number too big';
        }
    }

    function thousandsDigitToWord(n) {
        if (n < 1000) {
            return hundredsDigitToWord(n);
        } else if (n >= 1000 & n < 1000000) {
            return n % 1000 === 0 ? hundredsDigitToWord(Math.floor(n / 1000)) + ' thousand' : hundredsDigitToWord(Math.floor(n / 1000)) + ' thousand' + ' ' + hundredsDigitToWord(n % 1000);
        } else {
            return 'number too big'
        }
    }

    return thousandsDigitToWord(number);
}
