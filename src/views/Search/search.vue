<template>
  <ProfileHeader isSrch="true" breadcrumbsItem1="Home" breadcrumbsItem2="Search" breadcrumbsItem3="Results"/>
  <Sidebar isSearch="true" /> 
  <SearchForm />
</template>

<script>
import ProfileHeader from '@/components/controllers/profileHeader.vue'; 
import Sidebar from '@/components/controllers/sidebar.vue'; 
import SearchForm from '@/components/Search/searchForm.vue';

export default {
  name: 'Search',
  components: {
    ProfileHeader, 
    Sidebar,
    SearchForm,
  }
} 
</script>