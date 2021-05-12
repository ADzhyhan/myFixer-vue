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
              <a class="breadcrumbs__link link_active" href="#"
                >{{ breadcrumbsItem2 }}</a
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
    breadcrumbsItem1: String,
    breadcrumbsItem2: String,
  }
}
</script>

<style>

</style>