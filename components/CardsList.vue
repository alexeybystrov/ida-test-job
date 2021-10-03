<template>
  <div class="list">
    <Card v-for="card of allCards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import _ from 'lodash'
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  computed: {
    allCards () {
      return _.sortBy(this.$store.getters.allCards, 'id').reverse()
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
