<template>
  <div id="app">
    <header>
      <nav>
        <div class="avatar">        
          <img v-bind:src="data.avatar_url" alt="Profile picture" />
        </div>
        <ul>
          <!-- About -->
          <li class="nav-item">
            <a href="#about" v-scroll-to="{el: '#about', container: '#resume'}">About</a>
          </li>          
          <!-- Experience -->
          <li class="nav-item">
            <a href="#experience" v-scroll-to="{el: '#experience', container: '#resume'}">Experience</a>
          </li>
          <!-- Skills -->
          <li class="nav-item">
            <a href="#skills" v-scroll-to="{el: '#skills', container: '#resume'}">Skills</a>
          </li>
          <!-- Education -->
          <li class="nav-item">
            <a href="#education" v-scroll-to="{el: '#education', container: '#resume'}">Education</a>
          </li>
          <!-- Projects -->
          <li class="nav-item">
            <a href="#projects" v-scroll-to="{el: '#projects', container: '#resume'}">Projects</a>
          </li>          
          <!-- Interests -->
          <li class="nav-item">
            <a href="#interests" v-scroll-to="{el: '#interests', container: '#resume'}">Interests</a>
          </li>
        </ul>
      </nav>
    </header>
    <main id="resume">
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
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto');

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
    overflow: hidden;
  } 

  header {
    display: flex;
  }

  nav {
    margin-top: 35px;
    min-width: 275px;
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
    margin: 15px;
  }

  nav li a:active {
    color: white;
  }

  nav li a:hover {
    color: var(--main-color-white);
  }  

  img {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  h1, h2, h3, h4 {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3 {    
    text-transform: uppercase;
  }

  h3, h4 {
    margin: 5px 0;
  }

  h4 {
    color: gray;
    font-weight: 200;
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

  .date-range {
    color: var(--main-color);
  }

  #app {
    display: flex;
    height: 100vh;
  }

  #resume {
    margin: 0 auto;
    padding: 30px;
    background-color: whitesmoke;
    overflow-y: auto;
  }
</style>
