import AllArticles from '../../content/Articles.json';

const SearchArticle = (id) => {
    return AllArticles.find((element) => element.id == id)
}

export default SearchArticle;