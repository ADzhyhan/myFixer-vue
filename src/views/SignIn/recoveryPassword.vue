<template>
  <Header question="Back to" nameLink="Sign In"/>
  <RecoveryForm />
</template>

<script>
import Header from '@/components/controllers/header.vue';
import RecoveryForm from '@/components/SignIn/recoveryForm.vue';

export default {
  name: 'Recovery',
  components: {
    Header,
    RecoveryForm,
  }
}
</script>
