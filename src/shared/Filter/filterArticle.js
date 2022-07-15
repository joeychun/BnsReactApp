import AllArticles from '../../content/Articles.json';

const FilterArticle = (authorId) => {
    return AllArticles.filter((element) => {
        if (typeof (element.authorId) === "number") {
            return element.authorId === parseInt(authorId);
        } else { // List
            return element.authorId.includes(parseInt(authorId));
        }
    })
}

export default FilterArticle;