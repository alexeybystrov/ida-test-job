<template>
  <div class="list">
    <Card v-for="card of cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  computed: {
    cards () {
      return this.$store.getters.sortedByIdCards
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
