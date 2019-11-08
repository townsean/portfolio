<template>
  <div id="app">
    <header>
      <nav class="small-navbar">        
         <p>Hi, I'm {{ data.firstname }}.</p>
      </nav>
      <nav class="fullsize-navbar">
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
    <main id="resume" @click.ctrl="toggleData">
      <AboutSection id="about" :profile="data" />
      <ExperienceSection id="experience" v-if="data.experience" v-bind:experience="data.experience" />
      <SkillSection id="skills" v-if="data.skills" v-bind:skills="data.skills" />
      <ProjectSection id="projects" v-if="data.projects" v-bind:projects="data.projects" />
      <EducationSection id="education" v-if="data.education" v-bind:schools="data.education" />
      <InterestSection id="interests" v-if="data.interests" v-bind:interests="data.interests" />
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

// resume data, eww
import ashley from './data/ashley-resume.json';
import michael from './data/michael-resume.json';

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
    return { data: ashley };
  },
  methods: {
    /**
     * An Easter Egg:
     *   Toggle between 2 different resume.json files with CTRL + mouse click. 
     *   Not an elegant thing, (should implement this feature as a route) 
     *   but I wanted to quickly demostrate that none of the data is hardcorded. 
     */
    toggleData: function(event) {
      if(this.data == ashley) {        
        this.data = michael;
      } else {
        this.data = ashley;
      }
    }
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

  html, body {
    width: 100%;
    height: 100%;
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
    justify-content: center;
  }

  hr {
    display: none;
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

  h2 {
    margin-top: 45px;
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
  
  .fullsize-navbar  {
    padding-top: 35px;
    min-width: 275px;
    z-index: 1;      
    box-shadow: 2px 0 10px gray;
  }

  .small-navbar {    
    display: none;
    margin: 0;
    padding-left: 30px;
    color: var(--main-color-light);
  }

  .small-navbar p {
    width: 100wv;

  }

  #app {
    display: flex;
    height: 100vh;
  }

  #resume {
    margin: 0;
    padding: 30px 60px 30px 60px;
    background-color: whitesmoke;
    overflow-y: auto;
    flex: 1;
  }

  @media screen and (max-width: 600px) {
    header {
      justify-content: left;
    }

    hr {
      margin: 50px;
      color: lightgrey;
      display: block;
    }

    nav {
      margin-top: 5px;
    }
    
    .fullsize-navbar {
      display: none;
      box-shadow: none;
    }

    .small-navbar {
      display: inline-block;
      width: 100%;
      z-index: 1;      
      box-shadow: 0 2px 10px gray;
    }
    
    #app {
      flex-direction: column;
    }

    #resume {
      padding: 30px;
    }
  }

  @media print {    
    header, nav, footer {
      display: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    h2 {
      margin-bottom: 5px;
    }

    p, ul, h3, h4 {
      margin: 0;
    }

    #resume {
      display: block;
      overflow: visible;
      height: 100%;
    }
  }


</style>
