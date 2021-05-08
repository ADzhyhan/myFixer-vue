<template>
  <main class="content">
  <div class="content__wrapper">
    <form action="#" class="form set-form">
      <div class="form__content">
        <h2 class="form__title">Sign In</h2>
        <CustomInput
          v-on:change-input="getLogin"
          id="login"
          type="login"
          v-model="login"
          placeholder="Login or E-mail"
          class="form__input"
        />
        <CustomInput
          v-on:change-input="getPassword"
          id="password"
          type="password"
          v-model="password"
          placeholder="Password"
          class="form__input password"
        />
        <p class="form__pass-forgot">
          <a href="#">Forgot password?</a>
        </p>
        <CustomButton btnText="Sign In" :isDown="false"/>
      </div>
    </form>
  </div>
</main>
</template>

<script>
import CustomButton from '@/components/controllers/button.vue';
import CustomInput from '@/components/controllers/input.vue';

export default {
  name: 'SignInForm',
  components: {
    CustomButton,
    CustomInput,
  },

  data() {
    return {
      login: '', 
      password: ''
    }
  },

  methods: {
    getLogin(data) {
      console.log(data)
    },

    getPassword(data) {
      console.log(data)
    },
  }
}
</script>
