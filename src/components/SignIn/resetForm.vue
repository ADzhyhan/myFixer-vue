<template>
  <main class="content">
    <div class="content__wrapper">
      <form action="#" class="form set-form">
        <div class="form__content">
          <h2 class="form__title">Reset your password</h2>
          <CustomInput
            v-on:change-input="getPasswordOne"
            id="passwordOne"
            type="passwordOne"
            v-model="passwordOne"
            placeholder="New password"
            class="form__input"
          />
          <CustomInput
            v-on:change-input="getPasswordTwo"
            id="passwordTwo"
            type="passwordTwo"
            v-model="passwordTwo"
            placeholder="Confirm password"
            class="form__input mrgn"
          />
          <button class="btn btn_down" @click="submit">Reset</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import CustomInput from '@/components/controllers/input.vue';

export default {
  name: 'ResetForm',
  components: {
    CustomInput, 
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