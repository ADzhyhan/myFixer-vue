<template>
  <header class="header profile-header">
    <div class="content">
      <div class="header__inner">
        <div class="breadcrumbs">
          <ul class="breadcrumbs__items">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="/'">{{ breadcrumbsItem1 }}</a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" :class="{ link_active: isActive2 }" href="#"
                >{{ breadcrumbsItem2 }}</a
              >
            </li>
            <li v-if="isSrch" class="breadcrumbs__item">
              <a class="breadcrumbs__link" :class="{ link_active: isActive3 }" href="#"
                >{{ breadcrumbsItem3 }}</a
              >
            </li>
          </ul>
        </div>

        <div class="user-list">
          <img class="user-list__img" src="../../assets/img/header-user.png" alt="user" />
          <select>
            <option>Faruh Bernandez</option>
            <option>Logout</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ProfileHeader', 
  props: {
    isActive2: Boolean,
    isActive3: Boolean,
    isSrch: Boolean,
    breadcrumbsItem1: String,
    breadcrumbsItem2: String,
    breadcrumbsItem3: String,
  }
}
</script>

<style>

</style>