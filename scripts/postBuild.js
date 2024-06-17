/**
 * Support for GitHub Pages.
 */

const fs = require('fs');
const cheerio = require('cheerio')

fs.readFile('./src/data/data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('Parsing data.json..');
    data = JSON.parse(data);

    fs.readFile('./build/index.html', 'utf8', (err, indexContent) => {
        if (err) {
            console.error(err)
            return
        }

        Object.entries(data.pages).forEach(([pageName, pageMeta]) => {
            const mapObj = {
                "__page_title__": `${pageMeta.pageTitle} ${data.siteInfo.titleSeparator} ${data.siteInfo.title}`,
                "__page_desc__": pageMeta.desc,
                "__page_slug__": pageMeta.slug
            };
            const indexContentReplaced = indexContent.replace(/(?:__page_title__|__page_desc__|__page_slug__)/g, matched => mapObj[matched]);
            const fileSlug = pageName.toLowerCase() === 'home' ? 'index' : pageName.toLowerCase();
            console.log(`Writing ${fileSlug}.html..`)
            fs.writeFileSync(`./build/${fileSlug}.html`, indexContentReplaced);
        })

        fs.readFile('./public/404.html', 'utf8', (err, notFoundContent) => {
            if (err) {
                console.error(err)
                return
            }

            const indexFile = cheerio.load(indexContent);
            const notFoundFile = cheerio.load(notFoundContent);
            indexFile('script, link[rel="stylesheet"]').each((index, elem) => {
                notFoundFile('head').append(indexFile(elem).toString() + '\n')
            })
            console.log('Writing 404.html..');
            fs.writeFileSync(`./build/404.html`, notFoundFile.html());

            console.log('Done!')
        })
    })
})

