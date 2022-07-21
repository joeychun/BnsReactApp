const _Reader = (sources, type) => {
    /*
    'sources', or file-sources, is a list of file-source––an object storing various 
    information such as the JSON text file pathways about, for example, an article or a video.
    All file-sources passed by the 'sources' argument must be the same 'type'.

    'type', a string, refers to the type of the aforementioned file-sources. 
    For example, if 'type' is "article", it means all file-sources given are regarding articles.
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
    'sources' is a object that contains keys––the type (ex: article) of file-sources––and
    values––file-sources (list of file-source). Here, a single file-source, which is mentioned above
    in the function _Reader, is referring to an object storing various information such as 
    the JSON text file pathways about, for example, an article or a video.
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