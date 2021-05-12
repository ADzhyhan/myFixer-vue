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
            <Results />
          </div>
          <div v-if="activeTab === 2" class="search__results">
            <Map />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Results from '@/components/Search/results.vue';
import Map from '@/components/Search/map.vue';

export default {
  name: 'SearchForm',
  el: '#tabs', 
  data: { activeTab: 1 },
  components: {
    Results,
    Map,
  }
}
</script>
