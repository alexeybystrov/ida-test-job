<template>
  <div>
    <transition-group class="list">
      <Card v-for="card of cards" :key="card.id" :card="card" />
    </transition-group>
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

.v-move {
  transition: transform 1s;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s;
}

.v-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
