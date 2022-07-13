import AllArticles from '../../content/Articles.json';

const SearchArticle = (id) => {
    return AllArticles.find((element) => element.id === parseInt(id))
}

export default SearchArticle;