<template>
    <section>
        <hr>
        <h2>Experience</h2>
        <section class="experience-container" v-for="exp in experience" :key="exp.id">
            <h3>{{ exp.company }}</h3>
            <!-- Roles (Should be a separate component, but I'm lazy) -->
            <section v-for="role in exp.roles" :key="role.id">
                <h4>{{ role.job }}</h4>            
                <span class="date-range">{{ role.start }} - {{ role.end }}</span>
                <ul>
                    <li v-for="task in role.tasks" :key="task.id">
                        {{ task }}
                    </li>
                </ul>
            </section>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'ExperienceSection',
        props: ['experience']
    }
</script>
<style scoped>
    .experience-container {
        margin-bottom: 2rem;
    }    
</style>