import SearchAuthor from "../Searcher/searchAuthor";

const AuthorsSection = (authorId) => {
    /* 
    AuthorsSection receives one or various author ids and converts them into
    JSX––a line of text that has all authors' names that have hyperlinks leading
    to each of their profile. This is then returned.
    ________________________________________

    'authorId' is one or many author ids––unique numbers each author possesses. These
    numbers (or this number) will be converted into names. 'authorId' is formatted as such:

        Single-author: 
        authorId is a number: the author's id 
        (For example: 10)

        Multi-author:
        authorId is a list of numbers: the authors' ids
        (For example: [3, 15, 9])
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