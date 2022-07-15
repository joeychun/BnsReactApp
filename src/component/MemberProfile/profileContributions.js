import React from 'react';
// import SearchAuthor from '../../shared/Searcher/searchAuthor';
import SneakPeak from '../ArticleBanners/Sneakpeak/sneakpeak';
import FilterArticle from '../../shared/Filter/filterArticle';
import TxtReader from '../../shared/TxtReader/txtreader';
import DateSorter from '../../shared/SortComparer/dateCmp';

const ProfileContributions = ({ id }) => {
    const articles = FilterArticle(parseInt(id));
    console.log(articles)
    const articlePaths = articles.map((element) => `./${element.filename}`);
    const allTextFiles = TxtReader(articlePaths);

    const allSneaks = articles.map(({ id, title, authorId, filename, date }) => {
        const parsedFilename = filename.replace('.txt', '').replace('.json', ''); // In case file format is added
        return <SneakPeak key={id} articleId={id} title={title} authorId={authorId}
            txt={allTextFiles[parsedFilename].text} date={date} />;
    })

    const sortedAllSneaks = allSneaks.sort((a, b) => {
        return (
            DateSorter(a.props.date, b.props.date)
        );
    })
    return (
        <div>
            {articles.length !== 0 &&
                <div className="SneakpeaksBox ProfileSneaks">
                    {sortedAllSneaks}
                </div>

            }
        </div>
    )
}

export default ProfileContributions;
