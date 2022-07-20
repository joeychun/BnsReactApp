const TxtReader = (articles) => {
    let context;
    if (articles === undefined) {
        context = require.context('../../content/txts', true, /.json$/).keys();
    } else {
        context = articles;
    }

    const all = {};
    context.forEach((key) => {
        const fileName = key.replace('./', '');
        const resource = require(`../../content/txts/${fileName}`);
        const namespace = fileName.replace('.json', '');
        all[namespace] = JSON.parse(JSON.stringify(resource));

    });
    return all;
}

export default TxtReader;



