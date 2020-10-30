<template>
  <b-container class="container" id="aboutMeComponent">
    <h1>About Me</h1>
    <div style="align-self: center">
	<div class="div1">
      <h2>Extracurriculars</h2>
      <div class = "extracurriculars" v-for="activity in extracurricularsJSON" v-bind:key="activity">
          <table >
						<thead>
							<tr>
								<td>
									<b>{{activity.sport}}</b>
								</td>
								<td>
									<b></b>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p v-html="activity.description"></p>
								</td>
								<td><img :src="activity.img" width = "20%"></td>
							</tr>
						</tbody>
					</table>
      </div>
		
    </div>
	<div class="div1">
		<h2>Education</h2>
		<div class="education" v-for="data in educationJson" v-bind:key="data">
			<table>
						<thead>
							<tr>
								<td width = "10%">
									<img :src="data.img" width="200%" />
								</td>
								<td>
									<h6>{{data.degree}},</h6>
									<h6>{{data.specialization}}</h6>
									<p>
										<a :href="data.school" target="_blank">{{data.institution}}&nbsp;</a>
									</p>
									<p style="display: inline-block">
										
										{{data.location}}
									</p>
									<br/>
									<p v-html="data.completionDate"></p>
									<br/>
									<br/>
									<p>
										<i>{{data.honorsRoll}}</i>
									</p>
									<br/>
									<br/>
									
								</td>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
		</div>
		</div>
    </div>
  </b-container>
</template>
<script>
import extraCurricularsData from "../data/extracurriculars.js";
import educationData from "../data/education.js";

export default {
  name: 'About', //this is the name of the component
  data() {
		return {
			extracurricularsJSON:extraCurricularsData,
			educationJson: educationData
		};
	},
	mounted() {
		console.log("AboutMe mounted.");
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.div1 {
	background: none;
	border: none;
	
}
img {
	pointer-events: all;
}
table {
	padding-top: 1em;
	padding-bottom: 1em;
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	margin-bottom: 5px;
}

.education tr p {
	margin: 2px;
	display: inline;
}
.education h6 {
	margin: 1px;
}
.education p img {
	margin: 1px;
}
.education tr a {
	text-decoration: none;
	font-weight: 500;
}
.education p i {
	line-height: 80%;
}

</style>