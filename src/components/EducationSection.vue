<template>
    <section>
        <h2>Education</h2>        
        <section v-for="school in schools" :key="school.id">
            <p>{{ school.school }}</p>
            <span>{{ school.start }} - {{ school.end }}</span>
            <p>{{ school.degree }}</p>
            <p>{{ school.major }}</p>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'EducationSection',
        props: ['schools']
    }
</script>
<style></style>