import SearchAuthor from "../Searcher/searchAuthor";

const AuthorsSection = (authorId) => {
    /* authorId format:

    If the article is single-author: 
    authorId is a Number, the author's id 
    (ex: 10)

    If the article is multi-author:
    authorId is a list of Numbers, the authors' ids
    (ex: [3, 15, 9])
    */
    let authors;
    if (typeof (authorId) === "number") {
        authors = [
            <a href={`/profile/${authorId}`}>
                <b>{SearchAuthor(authorId).name}</b>
            </a>
        ];
    } else if (authorId.length === 2) {
        authors = authorId.map((id, ind) => {
            return (
                <div style={{ display: "inline" }}>
                    <a href={`/profile/${id}`}>
                        <b>{SearchAuthor(id).name}</b>
                    </a>
                    {ind === 0 &&
                        " and "
                    }

                </div>
            );
        })
    }
    else {
        authors = authorId.map((id, ind) => {
            return (
                <div style={{ display: "inline" }}>
                    <a href={`/profile/${id}`}>
                        <b>{SearchAuthor(id).name}</b>
                    </a>
                    {ind !== authorId.length - 1 &&
                        ", "
                    }
                    {ind === authorId.length - 2 &&
                        "and "
                    }
                </div>
            );
        })
    }

    return authors;
}

export default AuthorsSection;