<template>
  <div id="app">
    <header>
      <nav>
        <div class="avatar">        
          <img v-bind:src="data.avatar_url" alt="Profile picture" />
        </div>
        <ul>
          <li class="nav-item"><a href="#about" v-scroll-to="'#about'">About</a></li>          
          <li class="nav-item"><a href="#experience" v-scroll-to="'#experience'">Experience</a></li>
          <li class="nav-item"><a href="#skills" v-scroll-to="'#skills'">Skills</a></li>
          <li class="nav-item"><a href="#education" v-scroll-to="'#education'">Education</a></li>
          <li class="nav-item"><a href="#projects" v-scroll-to="'#projects'">Projects</a></li>          
          <li class="nav-item"><a href="#interests" v-scroll-to="'#interests'">Interests</a></li>
        </ul>
      </nav>
    </header>
    <main class="resume">
      <AboutSection id="about" :profile="data" />
      <ExperienceSection id="experience" v-bind:experience="data.experience" />
      <SkillSection id="skills" v-bind:skills="data.skills" />
      <EducationSection id="education" v-bind:schools="data.education" />
      <ProjectSection id="projects" v-bind:projects="data.projects" />
      <InterestSection id="interests" v-bind:interests="data.interests" />
    </main>
  </div>
</template>

<script>
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
  @import url('https://fonts.googleapis.com/css?family=Lato|Oswald');

  :root {
    --main-color: #1152AD;
    --main-color-medium: #4D97FF;
    --main-color-light: rgb(165, 193, 233);
    --main-color-white: rgb(206, 226, 247);
    --complementary-color: #AD7000;
    --complementary-color-light: #FAB632;
  }

  body {
    /*background: linear-gradient(to bottom, #555, #999);*/
    background: radial-gradient(circle at bottom, var(--main-color-medium), var(--main-color));
    background-attachment: fixed;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }

  #app {
    display: flex;
    overflow: hidden;
    height: 100%;
  }

  header {
    display: flex;
  }

  nav {
    margin-top: 35px;
    flex-shrink: 0;
    min-width: 300px;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 5px;
    padding: 0;
  }

  nav li a {
    text-transform: uppercase;
    text-decoration: none;
    color: var(--main-color-light);
    margin: 10px;
  }

  nav li a:active {
    color: white;
  }

  nav li a:hover {
    color: var(--main-color-white);
  }

  .resume {
    margin: 0 auto;
    padding: 30px;
    background-color: whitesmoke;
    min-height: 100vh;
    flex: 1;
    overflow-y: auto;
  }

  .avatar {
    border-radius: 50%;
    border: 7.5px solid var(--main-color-light);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
  }

  img {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  h1, h2, h3 {
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
  }
</style>
