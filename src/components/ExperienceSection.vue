<template>
    <section>
        <h2>Experience</h2>
        <section v-for="exp in experience">
            <p>{{ exp.job }}</p>
            <span>{{ exp.start }} - {{ exp.end }}</span>
            <p>{{ exp.company }}</p>
            <p>{{ exp.description }}</p>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'ExperienceSection',
        props: ['experience']
    }
</script>
<style></style>