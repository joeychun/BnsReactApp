import AllMembers from '../../content/Members.json';

const SearchAuthor = (id) => {
    /*
    SearchAuthor finds and returns information of an author with a certain id.
    ________________________________________

    'id' is a unique numeric id that each author possesses. The author of this 'id'
    is dealt in this function.

    AllMembers is formatted as such:
    [
        {
            "id": 1,
            "name": "Junseo Lee",
            "picture": "Junseo.png",
            "description": "Founder & Editor In Chief"
        },
        {
            "id": 2,
            "name": "Steven Kim",
            "picture": "Steven.jpeg",
            "description": "Founder & Chief Video Productions"
        },
        {
            "id": 3,
            "name": "Kris Son",
            "picture": "Kris.jpeg",
            "description": "Founder & Chief Public Relations"
        }
    ]
    ________________________________________

    SearchAuthor returns information about an author, as such:
    {
        "id": 2,
        "name": "Steven Kim",
        "picture": "Steven.jpeg",
        "description": "Founder & Chief Video Productions"
    }
    */
    return AllMembers.find((element) => element.id === parseInt(id))
}

export default SearchAuthor;