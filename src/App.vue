<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
export default {
  provide() {
    return {
      searchWord: computed(() => this.searchWord),
    };
  },
  watch: {
    searchInput(data) {
      if (!data) {
        this.searchWord = null;
      }
    },
  },
  data() {
    return {
      searchWord: null,
      searchInput: null,
    };
  },
};
</script>

<template>
  <div class="container-fluid my-border">
    <h1>téma</h1>
    <nav
      class="my-border p-4 d-flex justify-content-between align-items-center"
    >
      <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/tablazat">Táblázat</RouterLink> |
        <RouterLink to="/kartyak">Kártyák</RouterLink> |
      </div>
      <div class="d-flex align-items-center" role="search">
        <label for="searchWord" class="form-label text-nowrap m-0"
          >Keress egy szereplőre!</label
        >
        <input
          id="searchWord"
          class="form-control me-2 ms-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchInput"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          @click="searchWord = searchInput"
        >
          Search
        </button>
      </div>
    </nav>

    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
