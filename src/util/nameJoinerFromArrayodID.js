const nameJoinerFromArrayofID = (ids, data) => {
    const matchingNames = data.filter(person => ids.includes(person.id)).map(person => person.name);
    const namesString = matchingNames.join(", ");

    return namesString;
};

export default nameJoinerFromArrayofID;
