<template>
  <div class="list">
    <Card v-for="item of iter" :key="item" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  data () {
    return {
      iter: ['a', 'b', 'c', 'd', 'e']
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-left: 350px;
}
</style>
