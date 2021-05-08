<template>
  <Header question="Already have an account?" nameLink="Log In"/>
  <SignUpForm />
</template>

<script>
import Header from '@/components/controllers/header.vue'
import SignUpForm from '@/components/SignUp/signUpForm.vue'

export default {
  name: 'SignUp',
  components: {
    Header,
    SignUpForm,
  }
}
</script>

