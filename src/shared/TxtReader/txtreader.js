const TxtReader = () => {
    const context = require.context('../../content/txts', true, /.json$/);
    const all = {};
    context.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        const resource = require(`../../content/txts/${fileName}`);
        const namespace = fileName.replace('.json', '');
        all[namespace] = JSON.parse(JSON.stringify(resource));

    });
    return all;
}

export default TxtReader;



