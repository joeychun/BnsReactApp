const Combiner = (filteredSources) => {
    /*
    Combiner combines filteredSources, formatted as an Object, into an
    array with no keys.
    ________________________________________
    
    'filteredSources' is an object that has source type as key and a list of objects that
    have information about one source as value. For example,
    {
        "article": [
            {
                "type": "article",
                "id": 2,
                "title": "Cryptocurrency: A Money Trap",
                "authorId": 7,
                "filename": "cryptocurrency_a_money_trap.json",
                "date": "June 29, 2022"
            },
        ],
        "video": [
            {
                "type": "video",
                "id": 1,
                "title": "For Testing",
                "authorId": [2, 7, 8, 10]
                "filename": "test1.json",
                "date": "April 6, 2022"
            }
        ]
    }
    ________________________________________

    Combiner returns an array that has information about sources. For example,
    [
        {
            "type": "article",
            "id": 7,
            "title": "Burnouts and Breaks",
            "authorId": 2
            "filename": "burnouts_and_breaks.json",
            "date": "September 12, 2021"
        },
        {
            "type": "video",
            "id": 1,
            "title": "For Testing",
            "authorId": [2, 7, 8, 10]
            "filename": "test1.json",
            "date": "April 6, 2022"
        }
    ]
    */
    return Object.values(filteredSources).flatMap(x => x);
}

export default Combiner;