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
            <a class="icon" :href="profile.github" title="GitHub"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a class="icon" :href="profile.twitter" title="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a class="icon" :href="profile.website" title="Website"><font-awesome-icon icon="globe" /></a>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'AboutSection',
        props: ['profile']
    }
</script>

<style>
    .icon {
        border: 1px solid var(--main-color);
        border-radius: 50%;
        margin-right: 0.5rem;
        padding: 8px 10px;
        color: var(--main-color);       
        font-size: 1.25em;;
    }

    .icon:hover {
        background-color: var(--main-color);
        color: whitesmoke;
    }

    font-awesome-icon { 
    }
</style>