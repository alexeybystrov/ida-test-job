<template>
  <div
    class="card"
    @mouseover="showDeleteButton = true"
    @mouseleave="showDeleteButton = false"
  >
    <button
      v-show="showDeleteButton"
      class="card__delete-button"
      @click="handleDeleteCard"
    />
    <img
      class="card__image"
      :src="card.image"
    >
    <p class="name">
      {{ card.name }}
    </p>
    <p class="description">
      {{ card.description }}
    </p>
    <p class="price">
      {{ card.price }} руб.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showDeleteButton: false
    }
  },

  methods: {
    handleDeleteCard () {
      this.$store.commit('deleteCard', this.card.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  width: 332px;
  height: 423px;

  background: $background-default;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.card__delete-button {
  position: absolute;
  top: -12px;
  right: -12px;

  width: 36px;
  height: 36px;

  background: url("~assets/delete.svg");
  background-repeat: no-repeat;
  border: 0;

  cursor: pointer;
}

.card__image {
  display: block;
  margin: 0 auto 0 auto;
  height: 200px;
  max-width: 100%;

  border-radius: 4px 4px 0 0;
}

.name {
  margin: 16px;

  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3f3f3f;

  background: $background-default;
}

.description {
  margin: 16px;

  font-size: 16px;
  line-height: 20px;
  color: #3f3f3f;

  background: $background-default;
}

.price {
  position: absolute;
  left: 16px;
  bottom: 0;

  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3f3f3f;

  background: $background-default;
}
</style>
