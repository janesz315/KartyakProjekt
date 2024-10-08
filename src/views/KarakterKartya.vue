<template>
  <h1>Sziaa</h1>
  <h1>Hahó</h1>
  <p>{{ searchWord }}</p>
  <!-- karta -->
  <div
    class="row row-cols-1 row-cols-md-3 row-col-lg-4 g-4"
    v-if="szurtHalak.length > 0"
  >
    <HalKartya
      v-for="hal in szurtHalak"
      :key="hal.id"
      :id="hal.id"
      @podrobnostiModal="podrobnostiModalKezelo"
    >
      <!-- v-slot -->
      <template v-slot:image>
        <img :src="hal.image" :alt="hal.title" />
      </template>
      <template v-slot:title>
        <h5 v-html="keresJelol(hal.title)"></h5>
      </template>
    </HalKartya>
  </div>
  <div v-if="szurtHalak.length == 0"><h3>Nincs találat</h3></div>
  <!-- HalInfo -->
  <HalInfo :title="keresJelol(kivalasztottHal.title)">
    <img
      :src="kivalasztottHal.image"
      :alt="kivalasztottHal.title"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture"
    />
    <div v-html="keresJelol(textFormat)"></div>
  </HalInfo>
</template>

<script>
class HalOsztaly {
  constructor(id = 0, title = null, image = null, text = null) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.text = text;
  }
}
import HalKartya from "@/components/HalKartya.vue";
import HalInfo from "@/components/HalInfo.vue";
export default {
  components: { HalKartya, HalInfo },
  inject: ["searchWord", "karakterek"],
  data() {
    return {
      kivalasztottHal: new HalOsztaly(),
    };
  },

  computed: {
    textFormat() {
      if (this.kivalasztottHal.text == null) {
        return `<p></p>`;
      }
      return this.kivalasztottHal.text.map((t) => `<p>${t}</p>`).join("");
    },
    szurtHalak() {
      if (!this.searchWord) {
        return this.karakterek;
      }
      return this.karakterek.filter(
        (h) =>
          h.title.toLowerCase().includes(this.searchWord.toLowerCase()) ||
          h.text.some((t) =>
            t.toLowerCase().includes(this.searchWord.toLowerCase())
          )
      );
    },
  },

  methods: {
    podrobnostiModalKezelo(id) {
      this.kivalasztottHal = this.karakterek.filter((h) => h.id == id.id)[0];
    },
    keresJelol(text) {
      if (this.searchWord) {
        let what = new RegExp(this.searchWord, "gi");
        if (text) {
          text = text.replace(what, (match) => {
            return `<span class="mark p-0">${match}</span>`;
          });
        }
        return text;
      } else {
        return text;
      }
    },
  },
};
</script>

<style>
.mark {
  background-color: hotpink;
}
</style>