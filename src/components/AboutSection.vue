<template>
    <div>
        <!-- Name -->
        <h1 class="name">
            {{ profile.firstname }}
            <span class="lastname"> {{ profile.lastname }}</span>
        </h1>
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
            <a :href="profile.github"><font-awesome-icon :icon="['fab', 'github']" title="GitHub" /></a>
            <a :href="profile.twitter"><font-awesome-icon :icon="['fab', 'twitter-square']" title="Twitter" /></a>
            <a :href="profile.website"><font-awesome-icon icon="globe" title="Website" /></a>
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