import AllArticles from '../../content/Articles.json';
import AllVideos from '../../content/Videos.json';

const Searcher = (type, id) => {
    if (type === "article") {
        return AllArticles.find((element) => element.id === parseInt(id));
    } else if (type === "video") {
        return AllVideos.find((element) => element.id === parseInt(id));
    }
}

export default Searcher;