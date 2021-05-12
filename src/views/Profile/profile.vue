<template>
  <ProfileHeader breadcrumbsItem1="Home" breadcrumbsItem2="My profile" isActive2="true"/>
  <Sidebar isProfile="true" /> 
  <ProfileForm />
</template>

<script>
import ProfileHeader from '@/components/controllers/profileHeader.vue'; 
import Sidebar from '@/components/controllers/sidebar.vue'; 
import ProfileForm from '@/components/Profile/profileForm.vue';

export default {
  name: 'Profile',
  components: {
    ProfileHeader, 
    Sidebar,
    ProfileForm,
  }
}
</script>