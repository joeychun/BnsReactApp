const TxtReader = (videos) => {
    let context;
    if (videos === undefined) {
        context = require.context('../../content/vids', true, /.json$/).keys();
    } else {
        context = videos;
    }

    const all = {};
    context.forEach((key) => {
        const fileName = key.replace('./', '');
        const resource = require(`../../content/vids/${fileName}`);
        const namespace = fileName.replace('.json', '');
        all[namespace] = { type: "video", ...JSON.parse(JSON.stringify(resource)) };

    });
    return all;
}

export default TxtReader;



