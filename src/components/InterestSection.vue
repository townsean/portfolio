<template>
    <section>
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
<style></style>