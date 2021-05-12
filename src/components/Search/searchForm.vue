<template>
  <main class="content">
    <div class="content__wrapper">
      <section class="container">
        <div class="search">
          <div class="search__filter">
            <div class="search__filter-item">
              <h3 class="item__title">LOCATION</h3>
              <select class="item__select" name="location"></select>
            </div>

            <div class="search__filter-item">
              <h3 class="item__title">Search</h3>
              <input
                class="item__input"
                type="text"
                name="search"
                placeholder="Type your query..."
              />
            </div>

            <div class="search__filter-item">
              <h3 class="item__title">Category</h3>
              <select class="item__select" name="location"></select>
            </div>

            <div class="search__filter-item">
              <h3 class="item__title">SERVICE</h3>
              <select class="item__select" name="location"></select>
            </div>

            <div class="search__filter-item">
              <h3 class="item__title">PERIOD</h3>
              <input
                class="item__date"
                type="date"
                value="2021-02-04"
                name="period"
                min="2017-01-01"
                max="2027-12-31"
              />
            </div>

            <div class="search__filter-button">
              <button class="btn search-button">SEARCH</button>
            </div>
          </div>

          <div v-if="activeTab === 1" class="search__results">
            <header class="search__header-results">
              <div class="header-results__title">
                <a v-on:click="activeTab=2" class="item__link">SHOW MAP</a>
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
          </div>
          <div v-if="activeTab === 2" class="search__results">
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
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  name: 'SearchForm',
  el: '#tabs', 
  data: function() {
    return { activeTab: 1 };
  },
}
</script>
