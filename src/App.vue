<template>
  <div id="app">
    
    <Home />
    <Navigation/>
    <AboutMe/>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue'
//import AboutMe from './components/AboutMe.vue'
/*import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Resume from './components/Resume.vue'*/
export default {
  name: 'App',
  components: {
    Home,
    Navigation,
    AboutMe
    //Experience,
    //Skills,
    //Resume,
    //Projects
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
