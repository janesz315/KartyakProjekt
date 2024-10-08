<template>
  <h1>Szia! Itt láthatod a táblázatot!</h1>
  <div class="col-12 mb-4">
    <div class="table-responsive">
      <table
        class="table table-bordered border-success table-hover table-striped table-success shadow-sm"
      >
        <thead>
          <tr>
            <th>Cím</th>
            <th>Kép</th>
            <th>Leírás</th>
          </tr>
        </thead>
        <tbody>
          <!-- A tanulók neve és osztályuk -->
          <tr v-for="(karakter, i) in karakterek" :key="i">
            <td v-html="keresJelol(karakter.title)"></td>
            <td><img :src="karakter.image" :alt="karakter.title"></td>
            <td v-html="keresJelol(formatText(karakter.text))"></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['searchWord', 'karakterek'],
  
  methods: {
    // Szöveg formázása bekezdésekre
    formatText(textArray) {
      if (!textArray || !Array.isArray(textArray)) {
        return '<p></p>';
      }
      return textArray.map(t => `<p>${t}</p>`).join('');
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
  }
};
</script>

<style>
</style>