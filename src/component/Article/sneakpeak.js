import React from 'react';
import AllMembers from '../../content/Members.json';

const searchAuthor = (id) => {
    return AllMembers.find((element) => element.authorId == id)
}

const txtReader = (txt) => {

}

const stringExcerpt = (str) => {
    const strArr = str.trim().split(/\s+/);

    let returnStr = "";
    for (let i = 0; i < 25; ++i) {
        returnStr += strArr[i];
        returnStr += " ";
    }
    return returnStr;
}

const SneakPeak = ({ title, authorId, txt, date }) => {
    const author = searchAuthor(authorId);
    console.log("author:")
    console.log(author);
    const sneakText = stringExcerpt(txt);
    return (
        <div>
            <h2>{title}</h2>
            <p>{sneakText}</p>
            {/* <p>{author.name}</p> */}
        </div>
    )
}

export default SneakPeak
