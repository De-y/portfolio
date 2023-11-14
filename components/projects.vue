<script setup lang="tsx">
    const projectData = await useFetch('/api/projects')
</script>
<template>
    <h1>Projects:</h1>
    <div class="projects">
        <div v-if="projectData.status.value == 'pending'">
            <h1>Loading...</h1>
        </div>
        <!-- Basically we are getting all the project information from the projects api (JSON FILE) and then displaying them all. -->
        <div v-for = "project in projectData.data.value?.data.projects" :key="project.id" class="carousel">
            <div class='project-card' :style="{ backgroundImage: `url(${project.image})` }">
                <div class="description">
                    <h2>{{ project.name }}</h2>
                    <a :href="project.url"><strong>Link</strong></a>
                </div>
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
        width: 350px;
        height: 250px;
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;   
        text-align: center;
        margin-left: auto;
        margin-right: auto;     
    }
    .project-card .description {
        font-size: 20px;
        width: 50%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        transform: translateY(50%);        
    }
    .project-card a {
        text-decoration: none;
        color: rgb(0, 255, 221);
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
    }
    .project-card a:hover {
        color: rgb(0, 190, 204);
        transition: 500ms;

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