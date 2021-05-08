<template>
  <Header/>
  <main class="content">
    <ul class="home">
      <li class="home__list"><router-link to="/sign-up">Signup</router-link></li>
      <li class="home__list"><router-link to="/sign-in">Signin</router-link></li>
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