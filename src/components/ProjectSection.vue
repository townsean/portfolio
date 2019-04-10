<template>
    <section>
        <h2>Projects</h2>        
        <ul v-for="project in projects" :key="project.id">
            <li>{{ project.name }}</li>
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