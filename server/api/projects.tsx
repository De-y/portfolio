import json from '~/portfolioData/projects.json'
export default eventHandler(event => {
    return {
        'data': json
    }
});