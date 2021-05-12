<template>
  <Header question="Do not have an account?" nameLink="Sign Up"/>
  <ResetForm />
</template>

<script>
import Header from '@/components/controllers/header.vue';
import ResetForm from '@/components/SignIn/resetForm.vue';

export default {
  name: 'Reset',
  components: {
    Header,
    ResetForm,
  }
}
</script>