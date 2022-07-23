const _Reader = (sources, type) => {
    /*
    _Reader is a supporting function for Reader.
    ________________________________________

    'sources', or file-sources, is a list of file-source––an object storing various 
    information such as the JSON text filename regarding an article or a video.
    All file-sources passed by the 'sources' argument must be the same 'type'.
    If 'sources' is null, the default is set to reading all sources of that type.

    'type', a string, refers to the type of the aforementioned file-sources. 
    For example, if 'type' is "article", it means all file-sources given are regarding articles.

    ________________________________________

    _Reader returns an object that has the aforementioned filename as key and 
    aforementioned object type file-source as value. For example,
    
    {
        "cryptocurrency_and_its_danger": {
            "type": "article",
            "text": "Investing in cryptocurrency is...(further text ommitted)"
        },
        "rather_smile_than_frown": {
            "type": "article",
            "text": "Research maintains that the act of smiling...(further text ommitted)"
        }
    }
    */
    let context;
    if (sources === undefined || sources === null) {
        // Unfortunately, the code here is a bit rigid because require.context only takes literals
        if (type === "article") {
            context = require.context('../../content/articles', true, /.json$/).keys();
        } else if (type === "video") {
            context = require.context('../../content/videos', true, /.json$/).keys();
        }
    } else {
        context = sources.map((element) => {
            if (element.filename.substring(0, 2) === "./") {
                // Already formatted correctly
                return element.filename;
            } else {
                // Need to format it appropriately
                return `./${element.filename}`;
            }
        });
    }

    const all = {};
    context.forEach((key) => {
        const fileName = key.replace('./', '');
        const resource = require(`../../content/${type}s/${fileName}`);
        const namespace = fileName.replace('.json', '');
        all[namespace] = { type: type, ...JSON.parse(JSON.stringify(resource)) };

    });
    return all;
}

const Reader = (sources) => {
    /*
    Reader receieves sources and reads over their file-source information, then proceeds 
    to format them appropriately and return them. File-source is defined below.
    ________________________________________

    'sources' is a object that contains keys––the type (ex: article) of file-sources––and
    values––file-sources (list of file-source). Here, a single file-source, which is mentioned above
    in the function _Reader, is referring to an object storing various information such as 
    the JSON text filename about an article or a video, for example.
    ________________________________________

    Reader returns an object that has the source type as key and what _Reader returns as value.
    For example,
    {
        article: {
            "cryptocurrency_and_its_danger": {
                "type": "article",
                "text": "Investing in cryptocurrency is...(further text ommitted)"
            },
            "rather_smile_than_frown": {
                "type": "video",
                "text": "Research maintains that the act of smiling...(further text ommitted)"
            }
        },
        video: {
            "the_power_of_compliments": {
                "type": "video",
                "text": "A single compliment may not seem like much, but...(further text ommitted)",
                "videoId": "dQw4w9WgXcQ"
            }
        }
    }
    */
    const types = Object.keys(sources);
    let combinedAll = {};

    types.forEach((type => {
        const element = _Reader(sources[type], type);
        combinedAll = { ...element, ...combinedAll };
    }))

    return combinedAll;
}

export default Reader;