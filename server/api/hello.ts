export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const url = query.url

    let response = await fetch(url);
    let blob = await response.blob();
    let buffer = Buffer.from(await blob.arrayBuffer());
    return {image: "data:" + blob.type + ';base64,' + buffer.toString('base64')}
})