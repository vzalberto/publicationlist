<template>
  <div id="app">
    <backstage-header/>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackstageHeader from '@/components/BackstageHeader';

export default {
  name: 'App',
  data() {
    return {
      data: ['te boté'],
    };
  },
  components: { BackstageHeader },
};
</script>

<style>
#app {

}
</style>
