function abbreviateString(str) {
    let result = '';
    let splitArr = str.split(' ');
    result = splitArr[0] + ' ' + splitArr[splitArr.length - 1][0].toUpperCase() + '.';
    return result;
}

export { abbreviateString };
