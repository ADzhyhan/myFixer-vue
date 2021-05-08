<template>
  <input
    class="class"
    :type="type"
    :placeholder="placeholder"
    v-model="value"
    v-on:input="$emit('change-input', value)"
  />
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      value: '', 
    }
  }
}
</script>
