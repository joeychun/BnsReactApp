import AllArticles from '../../content/Articles.json';
import AllVideos from '../../content/Videos.json';

const Filter_ = (allSources, sourceType, authorId) => {
    /*
    'allSources' refers to a list of objects (JSON file) containing sources' information,
    such as its id, title, and filename. For example, 'allSources' can be AllArticles.

    'sourceType', a string, refers to the type of the source to check whether
    there is the author's works and filter. For example, 'sourceType' can be "article".

    'authorId' is the id (unique number) of the author Filter_ will check over.
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
    'sourceType', a string, refers to the type of the source to check whether
    there is the author's works and filter. For example, 'sourceType' can be "article".

    'authorId' is the id (unique number) of the author OneFilter will check over.
    */
    switch (sourceType) {
        case "article":
        case "articles":
            return Filter_(AllArticles, "article", authorId);
        case "video":
        case "videos":
            return Filter_(AllVideos, "video", authorId);
        default:
            return null;
    }
}

const Filter = (sourceTypes, authorId, doCombine = true) => {
    /*
    'sourceTypes' is a list of all sourceTypes to go over and check whether
    there is the author's works. For example, 'sourceTypes' can be ["article", "video"].

    'authorId' is the id (unique number) of the author Filter will check over.
    */
    let filteredSources = {};
    sourceTypes.forEach((type) => {
        filteredSources[type] = OneFilter(type, authorId);
    });

    return filteredSources;
}

export default Filter;

