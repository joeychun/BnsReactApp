import AllVideos from '../../content/Videos.json';

const FilterVideo = (authorId) => {
    const filteredVideos = AllVideos.filter((element) => {
        if (typeof (element.authorId) === "number") {
            return element.authorId === parseInt(authorId);
        } else { // List
            return element.authorId.includes(parseInt(authorId));
        }
    })
    return filteredVideos.map((element) => {
        return { type: "video", ...element }
    })
}

export default FilterVideo;