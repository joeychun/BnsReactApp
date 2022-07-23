const NameSeperator = (name) => {
    return {
        first: name.split(" ").slice(0, -1).join(" "),
        last: name.split(" ").at(-1)
    };
}

const NameSorter = (name1, name2) => {
    /*
    NameSorter is a comparing function used for alphabetical sorting of names, 
    where the last name alphabetical order is prioritized.
    */
    const [nameObj1, nameObj2] = [NameSeperator(name1), NameSeperator(name2)];

    const lastsCmp = nameObj1.last.localeCompare(nameObj2.last);
    if (lastsCmp === 0) {
        return nameObj1.first.localeCompare(nameObj2.first);
    }
    return lastsCmp;
}

export default NameSorter;