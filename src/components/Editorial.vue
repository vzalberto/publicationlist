<template>
    <div>
       <create-publication />
       <publication-list v-bind:publications="data" />
    </div>
</template>
<script>
import CreatePublication from '@/components/CreatePublication';
import PublicationList from '@/components/PublicationList';

export default {
  name: 'Editorial',
  data() {
    return {
      data: [{ title: 'Agile Vue.JS', state_grade: 'TX2', sku: 'AVJS001', year: 2020, status: 'outline' },
        { title: 'Caffeine and Programming', state_grade: 'AL1', sku: 'CAPG002', year: 2019, status: 'outline' },
        { title: 'Can Beautiful Code Actually Make You Cry?', state_grade: 'CA5', sku: 'CBCM003', year: 2020, status: 'outline' }],
    };
  },
  components: { CreatePublication, PublicationList },
};
</script>
<style>
</style>
