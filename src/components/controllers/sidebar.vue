<template>
    <aside class="sidebar">
      <div class="sidebar__wrapper">
        <div class="logo sidebar__logo">
          <img
            src="../../assets/img/sidebar/side-logo.svg"
            alt="myFixer"
            class="logo__image"
          />
        </div>

        <nav class="sidebar__menu">
          <div class="sidebar__item" :class="{ sidebar__item_active: isSearch }">
            <a href="./search-results">
              <img src="../../assets/img/sidebar/search-icon.svg" alt="search"/>
            </a>
          </div>

          <div class="sidebar__item" :class="{ sidebar__item_active: isProfile }">
            <a href="./profile-info">
              <img src="../../assets/img/sidebar/user-icon.svg" alt="user-profile" />
            </a>
          </div>

          <div class="sidebar__item" :class="{ sidebar__item_active: isMessages }">
            <a href="#">
              <img src="../../assets/img/sidebar/messages-icon.svg" alt="messages" />
            </a>
          </div>

          <div class="sidebar__item" :class="{ sidebar__item_active: isCalendar }">
            <a href="#">
              <img src="../../assets/img/sidebar/calendar-icon.svg" alt="calendar" />
            </a>
          </div>
        </nav>
      </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar', 
  props: {
    isSearch: Boolean,
    isProfile: Boolean,
    isMessages: Boolean,
    isCalendar: Boolean,
  }
}
</script>
