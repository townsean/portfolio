<template>
    <section>
        <h2>Skills</h2>
        <section>
            <div class="category-group" v-for="(skills, category) in categories" :key="category.id">
                <h3>{{ category }}</h3>
                <div class="skill-container">
                    <section class="skill-card" v-for="skill in skills" :key="skill.id">
                        <!-- Probably should create a component for this section and the proficiency bar -->                
                        <div class="image-container">
                            <img :src="'assets/' + skill.image_url" :alt="skill.name" >
                        </div>
                        <h5>{{ skill.name }}</h5>
                        <ProficiencyBar :value="skill.proficiency_level" />              
                    </section>
                </div>
            </div>            
        </section>        
    </section>
</template>
<script>
    import ProficiencyBar from '@/components/ProficiencyBar.vue';

    export default {
        name: 'SkillSection',
        props: ['skills'],
        components: {
            ProficiencyBar
        },
        methods: {            
            groupBy(array, property) {
                return array.reduce(function(groups, obj) {
                    let key = obj[property];
                    if(!groups[key]) {
                        groups[key] = [];
                    }

                    groups[key].push(obj);
                    return groups;
                }, {});                
            }
        },
        computed: {
            categories() {
                return this.groupBy(this.skills, "category");
            }
        }
    };
</script>
<style>
    h5 {
        font-weight: normal;
        margin: 5px;
    }

    .category-group {
        display: flex;
        flex-direction: column;
    }

    .skill-container {
        display: flex;
        flex-flow: row wrap;
    }

    .skill-card {
        border-radius: 1px;
        border: 1px solid midnightblue;
        margin: 5px;
        word-wrap: break-word;
        width: 125px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .image-container {
        display: flex;
        justify-content: center;
    }

    .image-container > img {
        height: 115px;
        width: 115px;
        background-position: 50% 50%;
        background-size: cover;
        object-fit: cover;
        margin: 5px;
    }
</style>