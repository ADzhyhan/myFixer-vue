<template>
  <Header question="Already have an account?" nameLink="Log In"/>
  <CreatePasswordForm />
</template>

<script>
import Header from '@/components/controllers/header.vue';
import CreatePasswordForm from '@/components/SignUp/createPasswordForm.vue';

export default {
  name: 'CompleteAccount',
  components: {
    Header,
    CreatePasswordForm,
  }
}
</script>