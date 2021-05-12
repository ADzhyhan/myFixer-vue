<template>
  <div class="profile-photo">
    <div class="profile-photo__image">
      <img
        src="../../assets/img/profile/profile-photo.svg"
        alt="profile photo"
      />
    </div>

    <div class="profile-photo__change-image">
      <img src="../../assets/img/profile/pen.svg" alt="pen" />
      <a href="#" class="change-image__link">Change photo</a>
    </div>
  </div>

  <div class="user-data">
    <div class="user-data__item">
      <h3 class="item__title">FIRST NAME</h3>
      <input
        class="item__input"
        type="text"
        name="first name"
        value="Faruh"
      />
    </div>

    <div class="user-data__item">
      <h3 class="item__title">LAST NAME</h3>
      <input
        class="item__input"
        type="text"
        name="last name"
        value="Bernandez"
      />
    </div>

    <div class="user-data__item">
      <h3 class="item__title">TITLE</h3>

      <select class="item__select" name="select gender">
        <option>Mr</option>
        <option>Mrs</option>
      </select>
    </div>

    <div class="user-data__item">
      <h3 class="item__title">MOBILE PHONE</h3>
      <div class="item__phone">
        <select class="item__select item__select-mobile">
          <option selected>🇹🇷</option>
          <option>🇺🇦</option>
        </select>
        <input
          class="item__input"
          type="text"
          name="phone"
          value="+65"
        />
      </div>
    </div>

    <div class="user-data__item">
      <h3 class="item__title">COUNTRY</h3>

      <select class="item__select item__select-icon">
        <option value=""></option>
        <option value="Turkey">Turkey</option>
        <option value="Ukraine">Ukraine</option>
      </select>
    </div>

    <div class="user-data__item">
      <h3 class="item__title">COMPANY</h3>
      <input type="text" name="company" class="item__input" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInformationForm'
}
</script>

<style>

</style>