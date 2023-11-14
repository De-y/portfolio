<script setup lang="tsx">
    const blogInfo = await useFetch('/api/posts')
</script>
<template>
    <div class="blog">
        <h1>Blog</h1>
        <p>My bread & butter.</p>
    </div>
    <div v-if="blogInfo.data.value?.posts" class="blog-error">
        <h1>There are no posts yet.</h1>
    </div>
        <!-- <div v-for="posts in blogInfo.data.value?.posts">
            <div class="blog-content" :style="{ backgroundImage: `url(${posts.image})` }">
                <h1>{{ posts['title'] }}</h1>
                <p>{{ posts['description'] }}</p>
                <a :href="'/posts?id=' + posts['id']">Read More</a>
            </div>
        </div> -->
</template>
<style scoped>
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
    .blog {
        background-color: rgb(22, 22, 22);
        text-align: center;
        width: fit-content;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        padding-inline: 20px;
    }
    .blog-content {
        border-radius: 10px;
        background-color: rgb(48, 48, 48);
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        padding-inline: 20px;
        background-size: cover;
        background-position: center;
        background-blend-mode:multiply;
        color: white;
        gap: 10px;
        height: 300px;
        row-gap: 10px;
        margin-top: 20px;
        text-align: center;
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
    .blog-content a:hover {
        color: rgb(254, 31, 31);
        transition: 500ms;
    }
</style>