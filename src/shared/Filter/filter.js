import AllArticles from '../../content/Articles.json';
import AllVideos from '../../content/Videos.json';

const _Filter = (allSources, sourceType, authorId) => {
    /*
    _Filter is a supporting function for OneFilter. 
    _Filter filters all sources by two standards. It checks if the source type matches
    'sourceType' ("article", for example) and if the the source is the author's work.
    ________________________________________

    'allSources' refers to a list of objects (JSON file) containing sources' information,
    such as its id, title, and filename. For example, 'allSources' can be AllArticles.

    'sourceType', a string, refers to the type of the source to check whether
    there is the author's works and filter. For example, 'sourceType' can be "article".

    'authorId' is the unique numeric id of the author _Filter will check over.
    ________________________________________

    _Filter returns a list of objects that has information about one
    source as value. For example,
    [
        {
            "type": "video",
            "id": 1,
            "title": "For Testing",
            "authorId": [2, 7, 8, 10]
            "filename": "test1.json",
            "date": "April 6, 2022"
        {
            "type": "video",
            "id": 2,
            "title": "Another testing video.",
            "authorId": [3, 8],
            "filename": "fortest.json",
            "date": "June 22, 2022"
        }
    ]
    */
    const filteredArticles = allSources.filter((element) => {
        if (typeof (element.authorId) === "number") {
            return element.authorId === parseInt(authorId);
        } else { // List
            return element.authorId.includes(parseInt(authorId));
        }
    })
    return filteredArticles.map((element) => {
        return { type: sourceType, ...element };
    })
}

const OneFilter = (sourceType, authorId) => {
    /*
    OneFilter is a supporting function for Filter.
    ________________________________________

    'sourceType', a string, refers to the type of the source to check whether
    there is the author's works and filter. For example, 'sourceType' can be "article".

    'authorId' is the unique numeric id of the author OneFilter will check over.
    ________________________________________

    OneFilter returns what _Filter does.
    */
    switch (sourceType) {
        case "article":
        case "articles":
            return _Filter(AllArticles, "article", authorId);
        case "video":
        case "videos":
            return _Filter(AllVideos, "video", authorId);
        default:
            return null;
    }
}

const Filter = (sourceTypes, authorId) => {
    /*
    Filter filters all sources by two standards: by the source's type(s) and the source's author.
    ________________________________________

    'sourceTypes' is a list of all sourceTypes to go over and check whether
    there is the author's works. For example, 'sourceTypes' can be ["article", "video"].

    'authorId' is the unique numeric id of the author Filter will check over.
    ________________________________________

    Filter returns an object that has source type as key and a list of objects that
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
    */
    let filteredSources = {};
    sourceTypes.forEach((type) => {
        filteredSources[type] = OneFilter(type, authorId);
    });

    return filteredSources;
}

export default Filter;

