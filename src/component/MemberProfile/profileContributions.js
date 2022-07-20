import React from 'react';
import SneakpeaksBanner from '../../shared/Sneakpeak/sneakpeaksBanner';
import FilterArticle from '../../shared/Filter/filterArticle';
import TxtReader from '../../shared/Reader/txtreader';

const stringExcerpt = (str) => {
    return str.split(" ").slice(0, 50).join(" ") + "....";
}

const ProfileContributions = ({ id }) => {
    const articles = FilterArticle(parseInt(id));

    const articlePaths = articles.map((element) => `./${element.filename}`);

    const allTextFiles = TxtReader(articlePaths);
    const contentFunc = (unprocessedContent) => {
        return <p>{stringExcerpt(unprocessedContent.text)}</p>;
    }

    return (
        <div>
            {articles.length !== 0 &&
                <div className="ProfileSneaks">
                    <SneakpeaksBanner contentJsons={articles} allFiles={allTextFiles}
                        contentFunc={(c) => contentFunc(c)} includeMargin={false} />
                </div>

            }
        </div>
    )
}

export default ProfileContributions;
