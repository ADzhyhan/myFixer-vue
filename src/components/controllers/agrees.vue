<template>
  <div class="agrees">
    <div class="agrees__item mb-15">
      <input
        type="checkbox"
        class="agrees__checkbox"
        id="terms"
        name="terms"
        checked
      />
      <label class="agrees__label" for="terms">
        I agree to the myFixer.com
        <a class="agrees__link" href="#">Terms of Service</a>
        </label>
    </div>

    <div class="agrees__item">
      <input
        type="checkbox"
        class="agrees__checkbox"
        id="policy"
        name="policy"
      />
      <label class="agrees__label" for="policy">
        I agree to the myFixer.com
        <a class="agrees__link" href="#">Privacy Policy</a>
      </label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
