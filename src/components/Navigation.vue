<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Chris Devito</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="https://www.linkedin.com/in/chrisdevito" target="_blank">
						<i class="fab fa-linkedin"></i>
					</b-nav-item>
					<b-nav-item href="https://www.github.com/cdevito2" target="_blank">
						<i class="fab fa-github"></i>
					</b-nav-item>
					<b-nav-item id="aboutMe" href="">About Me</b-nav-item>
					<b-nav-item id="experience" href="">Experience</b-nav-item>
					<b-nav-item id="projects" href="">Projects</b-nav-item>
          <b-nav-item id="projects" href="">Resume</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default{
  name: 'Navigation',
  methods:{
      scrollToComponent(component) {
			let aboutComponent = document.getElementById(component);
			aboutComponent.scrollIntoView();
		}
  },
  mounted:function(){
    document.getElementById("brand").onclick = this.scrollToTop;
		document.getElementById("aboutMe").onclick = () => this.scrollToComponent("aboutMeComponent");
		document.getElementById("experience").onclick = () => this.scrollToComponent("experienceComponent");
		document.getElementById("skills").onclick = () => this.scrollToComponent("skillsComponent");
		document.getElementById("projects").onclick = () => this.scrollToComponent("projectsComponent");
  }
};
</script>
<style> 
  .spacing { 
    Margin-right: 20px; 
  } 
</style>