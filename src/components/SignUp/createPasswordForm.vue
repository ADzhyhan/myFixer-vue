<template>
  <main class="content">
    <div class="content__wrapper">
      <form action="#" class="form set-form">
        <div class="form__content">
          <h2 class="form__title title-color">Complete your account</h2>
          <CustomInput
            v-on:change-input="getPasswordOne"
            id="passwordOne"
            type="passwordOne"
            v-model="passwordOne"
            placeholder="Create a password"
            class="form__input mrgn"
          />

          <PasswordIndocator />

          <CustomInput
            v-on:change-input="getPasswordTwo"
            id="passwordTwo"
            type="passwordTwo"
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
import PasswordIndocator from '@/components/controllers/passwordIndocator.vue';
import Agrees from '@/components/controllers/agrees.vue';


export default {
  name: 'CreatePasswordForm',
  components: {
    CustomInput,
    Recaptcha, 
    PasswordIndocator,
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
