function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((chunkedArray, value, index) => {
    if (index % chunkSize === 0) {
      chunkedArray.push(array.slice(index, index + chunkSize));
    }
    return chunkedArray;
  }, []);
}

export {
  chunkArrayInGroups,
};