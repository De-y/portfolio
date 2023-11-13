<script setup lang="tsx">
    const projectData = await useFetch('/api/projects')
</script>
<template>
    <h1>Projects:</h1>
    <div class="projects">
        <div v-if="projectData.status.value == 'pending'">
            <h1>Loading...</h1>
        </div>
        <!-- Basically we are getting all the project information from the projects api and then displaying them all. -->
        <div v-for = "project in projectData.data.value?.data.projects" :key="project.id" class="carousel">
            <div class='project-card'>
                <h2>{{ project.name }}</h2>
                <p>{{ project.description }}</p>
                <p>Technologies Used: </p>
                <p v-for="technologies in project.technologies">{{ technologies }}</p>
                <a :href="project.url">Link</a>
            </div>
        </div>
    </div>
    <p class="project-explorer2">More projects can be viewed in the <a class='project-explorer' href="/project-explorer">Project Explorer 🔗</a></p>

</template>
<style scoped>
    .carousel {
        width: max-content;
    }
    h1 {
            text-align: center;
            font-size: 50px;
    }
    .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    .project-card {
        border-radius: 10px;
        background-color: rgb(48, 48, 48);
        padding: 10px;
        margin: 10px;
        text-align: center;
    }
    .project-card a {
        text-decoration: none;
        color: rgb(0, 255, 221);
    }
    .project-explorer {
        color: rgb(255, 0, 0);
        text-decoration: none;    
        transition: 500ms;    
        text-align: center;
        margin-left: auto;
        margin-right:auto;
        transform: translateX(50%)
    }
    .project-explorer2 {
        text-align: center;
    }
    .project-explorer:hover {
        color: rgb(0, 204, 0);
        transition: 500ms;
    }
</style>