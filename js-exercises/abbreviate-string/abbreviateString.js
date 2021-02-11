function abbreviateString(str) {
    if(!str || typeof str != 'string') throw new Error('Invalid Parameters');

    let splitArr = str.split(' ');
    if(splitArr.length > 1)
        return splitArr[0] + ' ' + splitArr[splitArr.length - 1][0].toUpperCase() + '.';
    
    return str;
}

export { abbreviateString };
