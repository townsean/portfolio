<template>
    <section>
        <h2>Skills</h2>
        <main class="skill-container">
            <section class="skill-card" v-for="skill in skills" :key="skill.id">
                <!-- Probably should create a component for this section and the proficiency bar -->                
                <div class="image-container">
                    <img :src="'assets/' + skill.image_url" :alt="skill.name" >
                </div>
                <h4>{{ skill.name }}</h4>
                <div class="proficiency-bar-container">
                    <div class="proficiency-bar" :title="skill.proficiency_level | proficiencyLevelToText">
                        {{ skill.proficiency_level }}
                        <div class="proficiency-gradient" :style="{ width: decimalToPercentage(skill.proficiency_level) }"></div>
                    </div>
                </div>                
            </section>
        </main>        
    </section>
</template>
<script>
    export default {
        name: 'SkillSection',
        props: ['skills'],
        methods: {            
            decimalToPercentage(value) {
                // TODO: Protect against unhappy cases
                return value * 100 + '%';
            }
        },
        filters: {
            proficiencyLevelToText(value) {
                let text = '';

                // NIH Competencies Proficiency Scale Levels
                if (value < 0.2) {
                    text = "Fundamental Awareness (basic knowledge)";
                } else if (value >= 0.2 && value < 0.4) {
                    text = "Novice (limited experience)";
                } else if (value >= 0.4 && value < 0.6) {
                    text = "Intermediate (practical application)";
                } else if (value >= 0.6 && value < 0.8) {
                    text = "Advanced (applied theory)"; 
                } else if (value >= 0.8) {
                    text = "Expert (recognized authority)";
                }

                return text;
            }
        }
    }
</script>
<style>
    :root {
        --proficiency-bar-height: 15px;
    }    

    .skill-container {
        display: flex;
        flex-flow: row wrap;
    }

    .skill-card {
        border-radius: 1px;
        border: 1px solid midnightblue;
        margin: 5px;
    }

    .image-container {
        display: flex;
        justify-content: center;
    }

    .image-container > img {
        height: 150px;
        width: 150px;
        background-position: 50% 50%;
        background-size: cover;
        object-fit: cover;
        margin: 5px;
    }

    .proficiency-bar-container {
        display: flex;
        justify-content: center;
    }

    .proficiency-bar {
        position: relative;
        height: var(--proficiency-bar-height);
        width: 100%;
        margin: 5px;
        background: lightgray;
        border: 1px solid grey;
    }

    .proficiency-gradient {
        position: absolute;
        top: 0;
        left: 0;
        height: var(--proficiency-bar-height);
        background: linear-gradient(to right, lime, greenyellow);
    }

    h4 {
        font-weight: normal;
        margin: 5px;
    }
</style>