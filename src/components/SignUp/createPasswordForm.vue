<template>
  <main class="content">
    <div class="content__wrapper">
      <form action="#" class="form set-form">
        <div class="form__content">
          <h2 class="form__title title-color">Complete your account</h2>
          <CustomInput
            v-on:change-input="getPasswordOne"
            id="passwordOne"
            type="password"
            v-model="passwordOne"
            placeholder="Create a password"
            class="form__input mrgn"
          />

          <PasswordIndicator />

          <CustomInput
            v-on:change-input="getPasswordTwo"
            id="passwordTwo"
            type="password"
            v-model="passwordTwo"
            placeholder="Confirm password"
            class="form__input"
          />

          <Agrees />

          <Recaptcha />

          <button class="btn btn_down" @click="submit">Done!</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import CustomInput from '@/components/controllers/input.vue';
import Recaptcha from '@/components/controllers/recaptcha.vue';
import PasswordIndicator from '@/components/controllers/passwordIndicator.vue';
import Agrees from '@/components/controllers/agrees.vue';


export default {
  name: 'CreatePasswordForm',
  components: {
    CustomInput,
    Recaptcha, 
    PasswordIndicator,
    Agrees,
  },

  data() {
    return {
      dataForSubmit: {
        passwordOne: '',
        passwordTwo: ''
      }
    }
  },

  methods: {
    async submit() {
      // axios.get()
    },

    getPasswordOne(data) {
      this.dataForSubmit.passwordOne = data;
    },

    getPasswordTwo(data) {
      this.dataForSubmit.passwordTwo = data;
    },
  }
}
</script>
