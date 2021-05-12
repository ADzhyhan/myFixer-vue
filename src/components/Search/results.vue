<template>
  <header class="search__header-results">
    <div class="header-results__title">
      <a v-on:click="activeTab=1" class="item__link">SHOW MAP</a>
    </div>

    <div class="header-results__sort">
      <div class="header-results__sort-img">
        <img src="../../assets/img/diagram.svg" alt="show" />
      </div>

      <div class="header-results__sort-item">
        <label>
          <input name="rd" class="item__radio" type="radio" checked />
          <span class="item__radio-style"></span>
          by price
        </label>
      </div>

      <div class="header-results__sort-item">
        <label>
          <input name="rd" class="item__radio" type="radio" />
          <span class="item__radio-style"></span>
          by rating
        </label>
      </div>
    </div>
  </header>

    <div class="search__card">
      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-1.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-gold.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> Python, Django,
              Sketch
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>

      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-2.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-gold.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> Python, Django,
              Sketch
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>

      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-3.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-bronze.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> NodeJs, AngularJs
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>

      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-4.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-silver.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> VueJs, React Native,
              QA
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>

      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-5.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-gold.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> Php, Smesitel
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>

      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-5.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-silver.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> React, jQuery
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>

      <div class="search__card-item">
        <div class="card-item__img">
          <img src="../../assets/img/search/user-5.png" alt="people" />
        </div>

        <div class="card-item__people-info">
          <h3 class="people-info__name">
            Richard Thompson
            <img
              class="star"
              src="../../assets/img/search/star-silver.svg"
              alt="star"
            />
          </h3>

          <h5 class="people-info__text">
            <img class="place-img" src="../../assets/img/geo.svg" alt="geo" />
            Vancouver, Canada
          </h5>

          <div class="people-info__stacks">
            <h5 class="people-info__text">
              <span class="title-blue">Stack:</span> React, jQuery
            </h5>
            <a href="" class="more-stack">More</a>
          </div>

          <h5 class="people-info__text">
            <span class="title-blue">Base Daily Rate:</span> $ 1,200 USD
          </h5>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>