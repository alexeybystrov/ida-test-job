<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label
      class="form__label form__label_required"
      for="name"
    >Наименование товара</label>
    <input
      id="name"
      v-model="name"
      class="form__input"
      type="text"
      placeholder="Введите наименование товара"
    >
    <label class="form__label" for="description">Описание товара</label>
    <textarea
      id="description"
      v-model="description"
      class="form__textarea"
      type="text"
      placeholder="Введите описание товара"
    />
    <label
      class="form__label form__label_required"
      for="image"
    >Ссылка на изображение товара</label>
    <input
      id="image"
      v-model="image"
      class="form__input"
      type="text"
      placeholder="Введите ссылку"
    >
    <label
      class="form__label form__label_required"
      for="price"
    >Цена товара</label>
    <input
      id="price"
      v-model="price"
      class="form__input"
      type="text"
      placeholder="Введите цену"
    >
    <button class="form__button" type="submit">
      Добавить товар
    </button>
  </form>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      name: '',
      description: '',
      image: '',
      price: ''
    }
  },

  methods: {
    handleSubmit () {
      const id = _.uniqueId()
      const { name, description, image, price } = this
      this.$store.commit('addCard', { id, name, description, image, price })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: fixed;

  width: 332px;
  padding: 24px;

  box-sizing: border-box;
  background: $background-default;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.form__label {
  display: block;
  margin-bottom: 4px;

  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;

  color: #49485e;

  background: $background-default;
}

.form__label_required::after {
  position: absolute;

  display: inline-block;
  width: 4px;
  height: 4px;

  background: #ff8484;
  border-radius: 4px;

  content: "";
}

.form__input {
  display: block;
  width: 100%;
  height: 36px;
  margin-bottom: 16px;
  padding: 10px 0 11px 16px;

  font-size: 12px;

  background: $background-default;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.form__textarea {
  @extend .form__input;
  height: 108px;

  resize: none;
}

.form__input::placeholder {
  color: #b4b4b4;
}

.form__textarea::placeholder {
  color: #b4b4b4;
}

.form__button {
  width: 100%;
  height: 36px;
  margin-top: 8px;

  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #b4b4b4;

  background: #eeeeee;
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  cursor: pointer;
}
</style>
