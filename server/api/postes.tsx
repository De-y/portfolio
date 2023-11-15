import * as fs from 'fs'
import * as path from 'path'
export default eventHandler(async event => {
    const data = await readBody(event)
    const f = (data.id)
    const file = fs.readFileSync(path.join(process.cwd(), `/blog/posts/${f}.md`), 'utf8')
    return {
        "file": file
    }
})
