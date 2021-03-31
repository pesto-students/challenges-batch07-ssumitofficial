function rangeIter(lowerBoundry, upperBoundry) {
    if (typeof lowerBoundry !== 'number') {
        throw new TypeError(`Expected lowerBoundry of type number, but received ${typeof lowerBoundry}`);
    }
    if (typeof upperBoundry !== 'number') {
        throw new TypeError(`Expected upperBoundry of type number, but received ${typeof upperBoundry}`);
    }

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (lowerBoundry <= upperBoundry) {
                        return { value: lowerBoundry++, done: false };
                    }
                    return { value: lowerBoundry, done: true };
                },
            };
        },
    }
}

export { rangeIter };
