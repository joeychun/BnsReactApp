import React from 'react';
import SneakPeak from './sneakpeak';
import DateSorter from '../SortComparer/dateCmp';

const DateMin = (dateList) => {
    let min = "Far Away, 9999";
    for (let ind = 0; ind < dateList.length; ind++) {
        const element = dateList[ind];
        if (DateSorter(element, min) === 1) {
            min = element;
        }
    }
    return min;
}

const SneakpeaksBanner = ({ contentJsons, allFiles, contentFunc, linkFunc, includeMargin, hrefcontent }) => {
    /* 
    SneakpeaksBanner receives content information from 'contentJsons', then
    returns JSX: a banner of appropriately styled various sneakpeaks.
    ________________________________________

    'contentJsons' is a JSON or a filtered JSON that
    contains all of the content info.

    'allFiles' can be Articles, Videos, 
    a portion of either, a mix of each portion, etc.
    It is a variable that has already been processed by Reader functions.
    
    'contentFunc' is a function that returns the processed version of
    the content in the JSON file. Namely, in the case of articles,
    it returns an excerpt of the text, surrounded in <p>.

    'linkFunc' is a function that returns the sneakpeak's link based on its ID.
    Namely, in the case of articles, it returns `/articles/${articleId}`

    'includeMargin' has to do with css––a boolean about whether this
    component should have a top margin.

    'hrefcontent' is a boolean or boolean-returning function about whether the content 
    should, along with the title, be a hyperlink. Default is false.
    */

    // If hrefcontent is passed as a boolean, convert that to a function
    let hrefContent = hrefcontent;
    if (hrefcontent === undefined || hrefcontent === false) {
        hrefContent = () => false;
    } else if (hrefcontent === true) {
        hrefContent = () => true;
    }

    // Not clean code, but can obtain the id of the oldest-dated content
    let oldestDateId = Object.keys(
        DateMin(
            contentJsons.map(({ id, date }) => {
                return { [id.toString()]: date };
            })
        )
    )[0];

    const allSneaks = contentJsons.map(({ type, id, title, authorId, filename, date }) => {
        const parsedFilename = filename.replace('.txt', '').replace('.json', ''); // In case file format is added
        const content = contentFunc(allFiles[parsedFilename]);
        const doHref = hrefContent(allFiles[parsedFilename])
        return <SneakPeak key={id} sourceId={id} title={title} authorId={authorId}
            content={content} date={date} type={type}
            linkFunc={(contentId, type) => linkFunc(contentId, type)}
            hrefcontent={doHref} isBorderless={id === parseInt(oldestDateId)} />;
    })

    const sortedAllSneaks = allSneaks.sort((a, b) => {
        return (
            DateSorter(a.props.date, b.props.date)
        );
    })

    return (
        <div className="SneakpeaksBox" style={{ marginTop: includeMargin ? 50 : 0 }} >
            {sortedAllSneaks}
        </div>

    )
}

export default SneakpeaksBanner;