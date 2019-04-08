<template>
  <div class="home">
    <img v-bind:src="data.avatar" />
  </div>
</template>

<script>
import data from '../data/resume.json';
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data() {
    return { data };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
</style>
