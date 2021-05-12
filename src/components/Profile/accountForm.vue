<template>
  <div class="user-data">
    <div class="user-data__item">
      <h3 class="item__title">USERNAME</h3>
      <input
        class="item__input"
        type="text"
        name="first name"
        value="sarahbarnes"
      />
    </div>

    <div class="user-data__item">
      <h3 class="item__title">E-MAIL</h3>
      <input
        class="item__input"
        type="text"
        name="last name"
        value="sarahbbb@gmail.com"
      />
    </div>

    <div class="user-data__item-block">
      <div class="user-data__item user-data__item-flexend">
        <a href="#" class="item__link"
          >CHANGE PASSWORD
          <img
            class="item__link-vector"
            src="../../assets/img/Vector.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInformationForm'
}
</script>

<style>

</style>