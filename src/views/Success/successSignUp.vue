<template>
  <Header question="Already have an account?" nameLink="Log In"/>
  <SuccessForm description="Please check your email to activate your account"/>
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