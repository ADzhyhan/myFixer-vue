<template>
  <main class="content" id="tabs">
    <div class="content__wrapper">
      <section class="container">
        <div class="container__card">

          <div class="card__titles">
            <a
              class="card__title" 
              v-on:click="activeTab=1" 
              v-bind:class="[ activeTab === 1 ? 'card__title_active' : '' ]">
              PERSONAL INFORMATION
            </a>
            <a 
              class="card__title"
              v-on:click="activeTab=2" 
              v-bind:class="[ activeTab === 2 ? 'card__title_active' : '' ]">
              ACCOUNT INFORMATION
            </a>
          </div>
          
          <div v-if="activeTab === 1" class="card__information">
            <PersonalForm />
          </div>
          <div v-if="activeTab === 2" class="card__information">
            <AccountForm />
          </div>

        </div>
      </section>
    </div>
  </main>
</template>

<script>
import PersonalForm from '@/components/Profile/personalForm.vue';
import AccountForm from '@/components/Profile/accountForm.vue';

export default {
  name: 'ProfileForm',
  el: '#tabs', 
  data: { activeTab: 1 },
  components: {
    PersonalForm,
    AccountForm
  }
}
</script>