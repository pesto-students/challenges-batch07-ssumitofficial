function dropElements(elements, predicate) {
    if(!elements || !predicate) return [];

    return elements.filter(predicate);
}

export { dropElements };
