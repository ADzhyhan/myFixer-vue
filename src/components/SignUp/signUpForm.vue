<template>
  <main class="content">
    <div class="content__wrapper">
      <form action="#" class="form set-form">
        <div class="form__content">
          <h2 class="form__title">Sign up</h2>
          <div class="names">
            <CustomInput 
              v-on:change-input="getFname"
              id="fname"
              type="fname"
              v-model="fname"
              placeholder="First name"
              class="form__input pdng"
            />
            <CustomInput
              v-on:change-input="getLname"
              id="lname"
              type="lname"
              v-model="lname"
              placeholder="Last name"
              class="form__input"
            />
          </div>
          
          <CustomInput
            v-on:change-input="getUsername"
            id="username"
            type="username"
            v-model="username"
            placeholder="Username"
            class="form__input"
          />
          <CustomInput
            v-on:change-input="getEmail"
            id="email"
            type="email"
            v-model="email"
            placeholder="E-mail"
            class="form__input mrgn"
          />
          <CustomButton btnText="Get started" :isDown="true"/>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import CustomButton from '@/components/controllers/button.vue';
import CustomInput from '@/components/controllers/input.vue';

export default {
  name: 'SignUpForm',
  components: {
    CustomButton,
    CustomInput,
  },
  
  data() {
    return {
      fname: '', 
      lname: '', 
      username: '', 
      email: ''
    }
  },

  methods: {
    getFname(data) {
      console.log(data);
    },

    getLname(data) {
      console.log(data);
    },

    getUsername(data) {
      console.log(data);
    },

    getEmail(data) {
      console.log(data);
    },
  }
}
</script>

