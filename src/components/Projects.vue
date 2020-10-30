<template>
    <b-container class="container" id="projectComponent">
        <h2>
            Projects
        </h2>
    </b-container>
</template>
<script>
import projectData from "../data/projects.js"
export default {
    name:"Projects",
    data(){
        return{
            projectsJson: projectData
        };
    },
}
</script>