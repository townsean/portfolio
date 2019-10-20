<template>
    <div class="proficiency-bar-container">
        <div class="proficiency-bar" :title="value | proficiencyLevelToText">
            {{ value }}
            <div class="proficiency-gradient" :style="{ width: decimalToPercentage(value) }"></div>
        </div>
    </div> 
</template>
<script>
    export default {
        name: 'ProficiencyBar',
        props: ['value'],
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
    };
</script>
<style>
    :root {
        --proficiency-bar-height: 15px;
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
</style>