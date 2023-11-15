import * as fs from 'fs'
import * as path from 'path'
export default eventHandler(async event => {
    const data = await readBody(event)
    const f = (data.id)
    // Get the markdown file for f from the blog folder

    // const file = fs.readFileSync(`/blog/${f}.md`, 'utf8')
    const file = fs.readFileSync(path.join(process.cwd(), `/blog/posts/${f}.md`), 'utf8')
    return {
        "file": file
    }
    // return {
    //     'posts': json
    // }
})
