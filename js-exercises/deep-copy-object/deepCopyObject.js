const deepCopyObject = objToCopy => {
    if(objToCopy == null || typeof objToCopy !== 'object') {
        return objToCopy;
    }

    const clone = {};
    for(const key in objToCopy){
        if(typeof objToCopy[key] === 'object' && objToCopy[key] !== null){
            clone[key] = deepCopyObject(objToCopy[key]);
        }
        else{
            clone[key] = objToCopy[key];
        }
    }

    return clone;
};

export { deepCopyObject };
