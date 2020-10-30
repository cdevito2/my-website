<template>
    <b-container class="container" id="projectComponent">
        <h1>
            Projects
        </h1>
        <v v-for="data in projectsJson" v-bind:key="data">
            <div class="div2" v-if="data.display">
                <h3>{{data.title}}</h3>
                <p>Status:
                    <mark v-if="data.status=='Complete'" style="background-color: var(--complete-color)">{{data.status}}</mark>
                    <mark v-if="data.status=='On Going'" style="background-color: var(--work-in-progress-color)">{{data.status}}</mark>
                </p>
                <p v-if="data.link">
					Link:
					<a :href="data.link" target="_blank">{{data.linkDisplay}}</a>
				</p>
                <p v-if="data.demo">
					Demo:
					<a :href="data.demo" target="_blank">[video]</a>
				</p>
                <p v-if="data.repo">
					Repo:
					<a :href="data.code" target="_blank">{{data.repo}}</a>
				</p>
                <i v-for="img in data.img" v-bind:key="img">
					<img :src="img" height="60px" />
				</i>
				<ul v-for="des in data.description" v-bind:key="des">
					<li v-html="des"></li>
				</ul>
            </div>
            
        </v>

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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div2 {
	padding-top: 1em;
	padding-bottom: 1em;
	padding-right: 0.5em;
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	margin: 2px;
	width: 32%;
	min-width: 350px;
	min-height: 440px;
	display: inline-block;
	vertical-align: top;
}
.div2 p,
.div2 ul,
.div2 td,
.div2 th {
	color: var(--inactive-p-color);
}
p,
ul {
	margin-bottom: 5px;
}
mark {
	color: white;
	opacity: 0.8;
	border-radius: 5 px;
}
.div2:hover p,
.div2:hover ul,
.div2:hover td {
	color: var(--active-p-color);
	transition: 0.3s;
}
.div2 tr td:nth-child(2) {
	width: 20%;
}
.div2 img {
	max-width: 300px;
	display: inline-block;
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}
</style>