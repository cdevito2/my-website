<template>
    <b-container class="container" id="workComponent">
        <h2>Experience</h2>
        <div class = "div2">
            <div v-for="data in jobsJson" v-bind:key="data">
                    <div class ="experienceItems" v-if="data.display">
                    <table>
                        <thead>
                            <tr>
                            <th>
                                <img :src="data.img" width="100%" />
                            </th>
                            <th>
                                <position>{{data.position}}</position>
                                <br>
                                <br>
                                <p>{{data.company}}</p>
                                <p v-html="data.duration"></p>
                                <p>{{data.location}}</p>
                            </th>
                            </tr>
                            
                        </thead>
                        <tbody>
                           <tr>
                               <td>
                                   <ul v-for="des in data.description" v-bind:key="des">
                                       <li>{{des}}</li>
                                   </ul>
                               </td>
                           </tr>
                           <td></td>
                        
                        
                        </tbody>

                    </table>
                    
                    
                    </div>

            </div>
        </div>
    </b-container>
</template>
<script>
import jobData from "../data/workexperience.js"
export default {
    name:"Experience",
    data(){
        return{
            jobsJson: jobData
        };
    },
}
</script>
<style scoped>
.date {
	text-align: right;
	padding-right: 10px;
}
table {
	border-collapse: separate;
}
td {
	padding: 0;
}
ul {
	margin-right: 0;
	margin-bottom: 5px;
}
.div2 {
	padding-top: 1em;
	padding-bottom: 1em;
	margin: 2px;
	width: 49%;
	min-width: 350px;
	display: inline-block;
	vertical-align: top;
}
.details {
	padding-left: 1em;
	font-weight: 500;
}
.experienceItems {
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	margin-bottom: 2px;
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	min-height: 150px;
	width: 100%;
	display: inline-block;
	vertical-align: top;
}
.experienceItems p,
.experienceItems ul,
.experienceItems td,
.experienceItems th {
	color: var(--inactive-p-color);
}
.experienceItems:hover p,
.experienceItems:hover ul,
.experienceItems:hover td,
.experienceItems:hover th {
	color: var(--active-p-color);
	transition: 0.3s;
}
.experienceItems th {
	font-weight: normal;
}
.experienceItems th p {
	margin: 0;
	display: inline;
}
.experienceItems th a {
	text-decoration: none;
	font-weight: 500;
}
.experienceItems position {
	font-size: 1.25em;
	font-weight: 400;
}
img {
	align-self: flex-end;
	max-width: 500px;
	padding-left: 0.5em;
	margin: 10px auto;
}
</style>
