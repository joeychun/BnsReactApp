import AllVideos from '../../content/Videos.json';

const FilterVideo = (authorId) => {
    return AllVideos.filter((element) => {
        if (typeof (element.authorId) === "number") {
            return element.authorId === parseInt(authorId);
        } else { // List
            return element.authorId.includes(parseInt(authorId));
        }
    })
}

export default FilterVideo;