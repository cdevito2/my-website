<template>
  <div id="app">
    <Navigation/>
    <Home />
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Skills/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
//import AboutMe from './components/AboutMe.vue'
/*
\
import Resume from './components/Resume.vue'*/
export default {
  name: 'App',
  components: {
    Home,
    Navigation,
    AboutMe,
    Experience,
    Projects,
    Skills
    //Resume,
    //Projects
  }
}
</script>

<style>
@import './assets/styles/styles.css'
</style>
