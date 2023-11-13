export default eventHandler(event => {
    const postData = [{'title': 'OpenAI'}]
    return {
        'posts': postData
    }
})