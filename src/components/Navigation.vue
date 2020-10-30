<template>

    <div class="topNav">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Chris Devito</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="https://www.linkedin.com/in/christopherddevito/" target="_blank">
						<i class="fab fa-linkedin"></i>
					</b-nav-item>
					<b-nav-item href="https://www.github.com/cdevito2" target="_blank">
						<i class="fab fa-github"></i>
					</b-nav-item>
					<b-nav-item id="aboutMe" href="">About Me</b-nav-item>
					<b-nav-item id="experience" href="">Experience</b-nav-item>
          <b-nav-item id="skills" href="">Skills</b-nav-item>
					<b-nav-item id="projects" href="">Projects</b-nav-item>
          
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
		document.getElementById("projects").onclick = () => this.scrollToComponent("projectComponent");
  }
};
</script>
<style> 
 .nav-link:hover {
	color: var(--link-color) !important;
}
.topnav {
	overflow: hidden;
	background-color: var(--nav-color);
	z-index: 2;
	position: fixed;
	top: 0;
	margin: 0em;
	padding-right: 0 em;
	width: 100%;
	animation-name: slidedown;
	animation-duration: 0.5s;
}
@keyframes slidedown {
	from {
		top: -20px;
	}
	to {
		top: 0;
	}
}
.topnav a {
	color: #f2f2f2;
	text-decoration: none;
	font-size: 1.25em;
}
.topnav a:hover {
	color: var(--accent-color);
}
.topnav .icon {
	display: none;
}
.switch-container {
	vertical-align: bottom;
}
.switch {
	position: relative;
	display: inline-block;
	padding-top: 1px;
	width: 2.75em;
	height: 1.5em;
}
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}
.slider {
	position: absolute;
	cursor: pointer;
	top: 5px;
	left: 0;
	right: 0;
	bottom: -4px;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
.slider:before {
	position: absolute;
	content: "";
	height: 1em;
	width: 1em;
	left: 4px;
	bottom: 4px;
	background-color: var(--background-color);
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
input:checked + .slider {
	background-color: var(--accent-color);
}
input:focus + .slider {
	box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
	-webkit-transform: translateX(21px);
	-ms-transform: translateX(21px);
	transform: translateX(21px);
}
.slider.round {
	border-radius: 34px;
}
.slider.round:before {
	border-radius: 50%;
}
.progress-container {
	position: fixed;
	top: 3em;
	z-index: 2;
	width: 100%;
	opacity: 0;
	animation-name: slidedown2;
	animation-delay: 1s;
	animation-duration: 1s;
	animation-fill-mode: forwards;
}
@keyframes slidedown2 {
	to {
		opacity: 1;
	}
}
.progress-box {
	height: 4px;
	background: #f2f2f2;
}
.progress-bar {
	height: 4px;
	background: var(--link-color);
	width: 0%;
}

</style>