<template>
  <Header question="Back to" nameLink="Sign In"/>
  <SuccessForm description="Please check your email to reset
your password"/>
</template>

<script>
import Header from '@/components/controllers/header.vue';
import SuccessForm from '@/components/Success/successForm.vue';

export default {
  name: 'SuccessReset',
  components: {
    Header,
    SuccessForm,
  }
}
</script>