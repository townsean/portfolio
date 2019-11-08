<template>
    <section>        
        <hr>
        <h2>Interests</h2>
        <p v-html="interests"></p>
    </section>
</template>
<script>
    export default {
        name: 'InterestSection',
        props: ['interests']
    }
</script>
<style scoped>
    @media print {
        section {
            display: none;
        }
    }
</style>