<template>
    <section>
        <h2>Skills</h2>
        <ul v-for="skill in skills">
            <li>{{ skill.name }}</li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'SkillSection',
        props: ['skills']
    }
</script>
<style></style>