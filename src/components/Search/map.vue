<template>
  <header class="search__header-results">
    <div class="header-results__title">
      <a v-on:click="activeTab=1" class="item__link">SHOW RESULTS</a>
    </div>
  </header>

  <div class="search__map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20767.170198864806!2d26.9582336!3d49.4108672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1617312810639!5m2!1sen!2sua"
      width="747"
      height="436"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<script>
export default {

}
</script>