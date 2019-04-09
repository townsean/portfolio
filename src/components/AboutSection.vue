<template>
    <div>
        <!-- Name -->
        <section class="name">
            <span class="firstname">{{ profile.firstname }} </span>
            <span class="lastname">{{ profile.lastname }}</span>
        </section>
        <!-- Contact -->
        <section class="contact">
            <span>{{ profile.location }} </span>
            <span>&#8226;</span>
            <span> {{ profile.phone }} </span>
            <span>&#8226;</span>
            <span> {{ profile.email }} </span>
        </section>
        <!-- Summary -->
        <section class="summary">
            <p>{{ profile.summary }}</p>
        </section>
        <!-- Links -->
        <section class="links">
            <!--<font-awesome-icon icon="coffee" />
            <font-awesome-icon icon="twitter-square" />
            <font-awesome-icon icon="globe" />-->
        </section>
    </div>
</template>

<script>
    

    export default {
        name: 'AboutSection',
        props: ['profile']
    }
</script>

<style></style>