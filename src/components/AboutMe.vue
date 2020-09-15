<template>
  <b-container class="container" id="aboutMeComponent">
    <h1>About Me</h1>
    <div style="align-self: center">
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
									<p >{{activity.description}}</p>
								</td>
							</tr>
						</tbody>
					</table>
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
</style>