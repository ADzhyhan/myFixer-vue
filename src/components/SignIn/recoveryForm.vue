<template>
  <main class="content">
    <div class="content__wrapper">
      <form action="#" class="form set-form">
        <div class="form__content">
          <h2 class="form__title">Enter your e-mail to reset your password</h2>
          <CustomInput
            v-on:change-input="getEmail"
            id="email"
            type="email"
            v-model="email"
            placeholder="E-mail"
            class="form__input mrgn"
          />
          <button class="btn btn_down" @click="submit">Send</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import CustomInput from '@/components/controllers/input.vue';

export default {
  name: 'SignUpForm',
  components: {
    CustomInput, 
  },

  data() {
    return {
      dataForSubmit: {
        email: ''
      }
    }
  },

  methods: {
    async submit() {
      // axios.get()
    },

    getEmail(data) {
      this.dataForSubmit.email = data;
    },
  }
}
</script>