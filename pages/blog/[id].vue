<script setup lang="js">
import { ref, computed } from 'vue';
import {marked} from 'marked';
import '~/assets/base.css'

const route = useRoute()

const file = await useFetch('/api/postes/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: route.params.id
    })
});
var title = ref()

const markdown = ref(file.data.value?.file);
const parsedDescription = computed(() => {
return marked(markdown.value);
});

const blogInfo = await useFetch('/api/posts')
for (const x in blogInfo.data.value?.posts.posts) {
    if (blogInfo.data.value?.posts.posts[x].id == route.params.id) {
        title = blogInfo.data.value?.posts.posts[x]
    }
}
</script>

<template>
  <a href="/" class="b"><strong>de-y</strong></a>
  <div class="blog-post">    <h1>{{ title.title }} <p>Posted on {{ new Date(Number(title.timestamp) * 1000).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, hourCycle: 'h23'})  }}</p></h1> <hr>
      <div v-html="parsedDescription" class=""></div>
    </div>
</template>
<style scoped>
.blog-post {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: rgb(48, 48, 48);
  color: white;
}
.b {
    color: white;
    text-decoration: none;
    font-size: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: 0.2s;
}
</style>
