<script setup lang="tsx">
    const blogInfo = useFetch('/api/posts')
</script>
<template>
    <div class="blog">
        <h1>Blog</h1>
        <p>My bread & butter.</p>
    </div>
    <div class="blog-content">
        <div v-for="posts in blogInfo.data.value?.posts">
            <h1>{{ posts }}</h1>
        </div>
    </div>
</template>
<style scoped>
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
</style>