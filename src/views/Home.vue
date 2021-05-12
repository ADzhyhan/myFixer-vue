<template>
  <Header/>
  <main class="content">
    <ul class="home">
      <li class="home__list"><router-link to="/sign-up">Signup</router-link></li>
      <li class="home__list"><router-link to="/sign-in">Signin</router-link></li>
      <li class="home__list"><router-link to="/recovery">Recovery password</router-link></li>
      <li class="home__list"><router-link to="/reset">Reset password</router-link></li>
      <li class="home__list"><router-link to="/success">Success reset password</router-link></li>
      <li class="home__list"><router-link to="/activate">Success Sign Up</router-link></li>
      <li class="home__list"><router-link to="/complete">Complete account</router-link></li>
      <li class="home__list"><router-link to="/profile">Profile</router-link></li>
      <li class="home__list"><router-link to="/search">Search</router-link></li>
    </ul>
  </main>
</template>

<script>
import Header from '@/components/controllers/header.vue'

export default {
  name: 'SignUp',
  components: {
    Header,
  }
}
</script>