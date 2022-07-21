import AllArticles from '../../content/Articles.json';

const FilterArticle = (authorId) => {
    const filteredArticles = AllArticles.filter((element) => {
        if (typeof (element.authorId) === "number") {
            return element.authorId === parseInt(authorId);
        } else { // List
            return element.authorId.includes(parseInt(authorId));
        }
    })
    return filteredArticles.map((element) => {
        return { type: "article", ...element };
    })
}

export default FilterArticle;