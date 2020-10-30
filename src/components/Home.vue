<template>
  <div class="me-img">
				<img src="../assets/photoId.jpg" width="300px" alt="me" />
			
    <div class="introText">
      <h3>Welcome to my site!</h3>
      <p>I am a 4th year student at Western University studying Software Engineering</p>
      <p>I am currently on a 16 month internship at General Dynamics Mission Systems-Canada</p>
      <p>I am expected to graduate in April 2022</p>
      <p>I made this website as a side project to familiarize myself with Vue</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
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
