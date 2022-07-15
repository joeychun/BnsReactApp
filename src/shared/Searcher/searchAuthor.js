import AllMembers from '../../content/Members.json';

const SearchAuthor = (id) => {
    return AllMembers.find((element) => element.id === parseInt(id))
}

export default SearchAuthor;