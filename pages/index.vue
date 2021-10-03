<template>
  <div>
    <header>Добавление товара</header>
    <div class="container">
      <FormAdd />
      <CardsList />
    </div>
  </div>
</template>

<script>
import FormAdd from '@/components/FormAdd.vue'
import CardsList from '@/components/CardsList.vue'
export default {
  components: { FormAdd, CardsList }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 20px;

  margin-left: 32px;

  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F;
}

.container {
  margin-top: 60px;
  margin-left: 32px;
  margin-right: 32px;
}
</style>
