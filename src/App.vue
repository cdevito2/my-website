<template>
  <div id="app">
    <Navigation/>
    <Home />
    <AboutMe/>
    <Skills/>
    <Experience/>
    <Projects/>
    
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navigation,
    AboutMe,
    Experience,
    Projects,
    Skills
    
  },
  mounted:function(){
    let nav = document.getElementById("navComponent");
    nav.style.display = 'none';
  }
}
</script>

<style>
@import './assets/styles/styles.css';
</style>
