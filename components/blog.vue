<script setup lang="tsx">
    const blogInfo = await useFetch('/api/posts')
</script>

<template>
    <div class="blog">
        <h1>Blog</h1>
        <p>My bread & butter.</p>
        <div class="blog-row">
            <div v-for="posts in blogInfo.data.value?.posts.posts" class="d">
                <div class="blog-content" :style="{ backgroundImage: `url(${posts.image})` }">
                    <h1>{{ posts['title'] }}</h1>
                    <a :href="'/blog/' + posts['id']">Read More</a> 
                </div>
            </div>
        </div>
    </div>
    <div v-if="blogInfo.data.value?.posts.length === 0" class="blog-error">
        <h1>There are no posts yet.</h1>
    </div>
</template>
<style scoped>
    .blog-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
    .d {
        width: max-content;
        margin-left: auto;
        margin-right: auto;
    }
    .blog-error {
        text-align: center;
        margin-top: 20px;
        border-radius: 10px;
        background-color: black;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        padding-inline: 20px;
    }
    .blog-content {
        border-radius: 10px;
        background-color: rgb(48, 48, 48);
        padding: 10px;
        margin: 10px;
        text-align: center;
        width: 350px;
        height: 250px;
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;   
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .blog-content a {
        color: rgb(140, 0, 0);
        text-decoration: none;
        transition: 500ms;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .blog {
        text-align: center;
        margin-top: 20px;
        border-radius: 10px;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        padding-inline: 20px;
    }
    .blog-content a:hover {
        color: rgb(254, 31, 31);
        transition: 500ms;
    }
</style>