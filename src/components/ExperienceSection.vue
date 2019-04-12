<template>
    <section>
        <h2>Experience</h2>
        <section v-for="exp in experience" :key="exp.id">
            <h3>{{ exp.job }}</h3>
            <h4>{{ exp.company }}</h4>            
            <span class="date-range">{{ exp.start }} - {{ exp.end }}</span>
            <ul>
                <li v-for="task in exp.tasks" :key="task.id">
                    {{ task }}
                </li>
            </ul>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'ExperienceSection',
        props: ['experience']
    }
</script>
<style>

</style>