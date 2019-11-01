<template>
    <section>
        <h2>Projects</h2>        
        <div class="project" v-for="project in projects" :key="project.id">
            <h3><a :href="project.source">{{ project.name }} <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>{{ project.description }} <em>({{ project.start }})</em></p>
            <figure v-if="project.preview_url">
                <a :href="'assets/project_previews/' + project.preview_url"><img :src="'assets/project_previews/' + project.preview_url" :alt="project.name + 'Demo Image'"></a>
                <figcaption><a :href="project.source">Source</a> | <a :href="project.website">Website</a></figcaption>
            </figure>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'ProjectSection',
        props: ['projects']
    }
</script>
<style scoped>
    h3 a {
        text-decoration: none;
        color: black;
    }    

    img {                
        width: auto;
        height: auto;
        max-height: 25vh;
        max-width: 55vh;
        margin: 1rem;
    }

    .project {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 600px) {
        figure {
            text-align: center;
            margin: 0;
        }

        img {            
            max-width: 40vh;
        }
    }
</style>