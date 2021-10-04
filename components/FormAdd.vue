<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label
      class="form__label form__label_required"
      for="name"
    >Наименование товара</label>
    <input
      id="name"
      v-model="form.name"
      class="form__input"
      :class="{ form__input_invalid: !isNameValid && uiShowWarn.name }"
      type="text"
      placeholder="Введите наименование товара"
    >
    <div v-show="!isNameValid && uiShowWarn.name" class="form__error-message">
      Поле является обязательным
    </div>
    <label class="form__label" for="description">Описание товара</label>
    <textarea
      id="description"
      v-model="form.description"
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
      v-model="form.image"
      class="form__input"
      :class="{ form__input_invalid: !isImageValid && uiShowWarn.image }"
      type="url"
      placeholder="Введите ссылку"
    >
    <div v-show="!isImageValid && uiShowWarn.image" class="form__error-message">
      Поле является обязательным
    </div>
    <label
      class="form__label form__label_required"
      for="price"
    >Цена товара</label>
    <input
      id="price"
      v-model="form.price"
      v-mask="priceMask"
      class="form__input"
      :class="{ form__input_invalid: !isPriceValid && uiShowWarn.price }"
      type="text"
      placeholder="Введите цену"
    >
    <div v-show="!isPriceValid && uiShowWarn.price" class="form__error-message">
      Поле является обязательным
    </div>
    <button
      class="form__button"
      :class="{
        form__button_active: isFormValid,
        form__button_disabled: !isFormValid,
      }"
      type="submit"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
const priceMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  decimalSymbol: ',',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ' ',
  allowNegative: false
})
export default {
  data () {
    return {
      priceMask,
      form: {
        name: '',
        description: '',
        image: '',
        price: ''
      },
      uiShowWarn: {
        name: false,
        image: false,
        price: false
      }
    }
  },

  computed: {
    isNameValid () {
      return this.form.name.length !== 0
    },

    isImageValid () {
      return /^https?:\/\//.test(this.form.image)
    },

    isPriceValid () {
      return this.form.price.length !== 0 &&
        typeof this.form.price.length === 'number'
    },

    isFormValid () {
      return this.isNameValid && this.isImageValid && this.isPriceValid
    }
  },

  methods: {
    handleSubmit () {
      if (!this.isFormValid) {
        this.setWarnings()
        return
      }

      const id = Date.now()
      const payload = { ...this.form, id }
      this.$store.commit('addCard', payload)
      this.resetForm()
      this.resetWarnings()
    },

    resetForm () {
      const keys = Object.keys(this.form)
      keys.forEach((key) => {
        this.form[key] = ''
      })
    },

    setWarnings () {
      if (!this.isNameValid) {
        this.uiShowWarn.name = true
      }

      if (!this.isImageValid) {
        this.uiShowWarn.image = true
      }

      if (!this.isPriceValid) {
        this.uiShowWarn.price = true
      }
    },

    resetWarnings () {
      const keys = Object.keys(this.uiShowWarn)
      keys.forEach((key) => {
        this.uiShowWarn[key] = false
      })
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

.form__input_invalid {
  border: 1px solid #FF8484;
}

.form__error-message {
  position: absolute;

  margin-top: -12px;

  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;

  background: transparent;
}

.form__textarea {
  @extend .form__input;
  height: 108px;

  resize: none;
}

.form__input::placeholder,
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

  border: 1px solid #e5e5e5;
  border-radius: 10px;

  cursor: pointer;
}

.form__button_disabled {
  color: #b4b4b4;

  background: #eeeeee;
}

.form__button_active {
  color: #ffffff;

  background: #7bae73;
}
</style>
