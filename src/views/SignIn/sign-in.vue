<template>
  <Header question="Do not have an account?" nameLink="Sign up"/>
  <SignInForm />
</template>

<script>
import Header from '@/components/controllers/header.vue'
import SignInForm from '@/components/SignIn/signInForm.vue'

export default {
  name: 'SignIn',
  components: {
    Header,
    SignInForm,
  }
}

</script>
