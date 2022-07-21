const Combiner = (filteredSources) => {
    return Object.values(filteredSources).flatMap(x => x);
}

export default Combiner;