import AllArticles from '../../content/Articles.json';
import AllVideos from '../../content/Videos.json';

const Searcher = (type, id) => {
    /*
    Searcher searches for a certain source (an article or video, for example)
    based on the unique id each source posesses.
    ________________________________________

    'type', a string, refers to the type of sources to search over.
    For example, 'type' can be "article".
    
    'id', a number type or number surrounded in " ", refers to the unique id
    of the source that will be searched for.
    
    ________________________________________

    Searcher returns an object regarding various information of an article:
    For example,
    
    {
        title: "Hello World", // string
        authorId: [3, 5] // number OR list of numbers
        filename: "helloworld" // string; path of where file with specific
                                information, such as description (text), is located
        date: "March 12, 2022" // string; formated in MM DD, YY
    }
    */
    if (type === "article") {
        return AllArticles.find((element) => element.id === parseInt(id));
    } else if (type === "video") {
        return AllVideos.find((element) => element.id === parseInt(id));
    }
}

export default Searcher;