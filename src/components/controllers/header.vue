<template>
  <header class="header">
    <div class="content">
      <div class="header__inner">
        <a class="logo" href="#">
          <img class="logo__link" src="../../assets/img/logo.svg" alt="myFixer logo" />
        </a>
        <p class="header__text">
          {{ question }}
          <a class="header__signup-link" href="#">
            <router-link v-if="nameLink=='Sign up'" to="/sign-up" style="text-decoration: none">Sign up</router-link>
            <router-link v-else to="/sign-in" style="text-decoration: none">{{ nameLink }}</router-link>
          </a>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'signText', 
  props: {
    question: String,
    nameLink: String,
  }
}
</script>

<style>

</style>