<template>
    <section>
        <h2>Projects</h2>        
        <ul v-for="project in projects" :key="project.id">
            <li><a :href="project.source">{{ project.name }}</a> ({{ project.start }}) - {{ project.description }}</li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'ProjectSection',
        props: ['projects']
    }
</script>
<style></style>