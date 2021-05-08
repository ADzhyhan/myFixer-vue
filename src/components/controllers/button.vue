<template>
   <button class="btn" :class="{ btn_down: isDown }">{{ btnText }}</button>
</template>

<script>
export default {
  name: 'customButton',
  props: {
    btnText: String,
    isDown: Boolean,
  }
}
</script>

<style>

</style>