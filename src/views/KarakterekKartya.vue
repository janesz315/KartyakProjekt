<template>
  <!-- karta -->
  <div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 container-fluid"
    v-if="szurtKarakterek.length > 0"
  >
    <KarakterKartya
      v-for="karakter in szurtKarakterek"
      :key="karakter.id"
      :id="karakter.id"
      @podrobnostiModal="podrobnostiModalKezelo"
    >
      <!-- v-slot -->
      <template v-slot:image>
        <img :src="karakter.image" class="img-fluid" :alt="karakter.title" width="200" />
      </template>
      <template v-slot:title>
        <h5 v-html="keresJelol(karakter.title)"></h5>
      </template>
    </KarakterKartya>
  </div>
  <div v-if="szurtKarakterek.length == 0"><h3>Nincs találat</h3></div>
  <!-- KarakterInfo -->
  <KarakterInfo :title="keresJelol(kivalasztottKarakter.title)">
    <img
      :src="kivalasztottKarakter.image"
      :alt="kivalasztottKarakter.title"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture img-fluid"
    />
    <div v-html="keresJelol(textFormat)"></div>
  </KarakterInfo>
</template>

<script>
class KarakterOsztaly {
  constructor(id = 0, title = null, image = null, text = null) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.text = text;
  }
}
import KarakterKartya from "@/components/KarakterKartya.vue";
import KarakterInfo from "@/components/KarakterInfo.vue";
export default {
  components: { KarakterKartya, KarakterInfo },
  inject: ["searchWord", "karakterek"],
  data() {
    return {
      kivalasztottKarakter: new KarakterOsztaly(),
    };
  },
  

  computed: {
    textFormat() {
      if (this.kivalasztottKarakter.text == null) {
        return `<p></p>`;
      }
      return this.kivalasztottKarakter.text.map((t) => `<p>${t}</p>`).join("");
    },
    szurtKarakterek() {
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
      this.kivalasztottKarakter = this.karakterek.filter(
        (h) => h.id == id.id
      )[0];
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