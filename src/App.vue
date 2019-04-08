<template>
  <div id="app">
    <header>
      <nav>
        <img v-bind:src="data.avatar" />
        <ul>
          <li class="nav-item"><a href="#about">About</a></li>          
          <li class="nav-item"><a href="#experience">Experience</a></li>
          <li class="nav-item"><a href="#skills">Skills</a></li>
          <li class="nav-item"><a href="#education">Education</a></li>
          <li class="nav-item"><a href="#projects">Projects</a></li>          
          <li class="nav-item"><a href="#interests">Interests</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <HomePage />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <SkillSection id="skills" />
      <Education id="education" />
      <ProjectSection id="project" />
      <InterestSection id="interests" />
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import SkillSection from './components/SkillSection.vue';
import EducationSection from './components/EducationSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import InterestSection from './components/InterestSection.vue';

import data from './data/resume.json';

export default {
  name: 'app',
  components: {
    HomePage,
    AboutSection,
    ExperienceSection,
    SkillSection,
    EducationSection,
    ProjectSection,
    InterestSection
  },
  data() {
    return { data };
  }
};
</script>

<style>
body {
  /*background: linear-gradient(to bottom, #555, #999);*/
  background: radial-gradient(circle at bottom, royalblue, midnightblue);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  min-height: 300px;
}
</style>
