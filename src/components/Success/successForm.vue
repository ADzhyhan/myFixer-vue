<template>
  <main class="content">
    <div class="content__text">
      <img class="content__image" src="../../assets/img/mail.svg" alt="email" />
      <h2 class="content__title">You are almost ready to go!</h2>
      <p class="content__description">{{ description }}</p>
    </div>

    <div class="circles">
      <div class="circle__1">
        <div class="circle__2">
          <div class="circle__3">
            <div class="circle__4"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SuccessForm',
  props: {
    description: String,
  }
}
</script>
