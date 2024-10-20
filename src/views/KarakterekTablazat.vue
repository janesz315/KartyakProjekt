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
          <tr v-for="(karakter, i) in karakterek" :key="i">
            <td data-label="Cím" v-html="keresJelol(karakter.title)"></td>
            <td data-label="Kép">
              <img
                :src="karakter.image"
                :alt="karakter.title"
                width="200"
                :class="{ 'img-fluid': windowWidth < 768 }"
              />
            </td>
            <td
              data-label="Leírás"
              v-html="keresJelol(formatText(karakter.text))"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["searchWord", "karakterek"],
  data() {
    return {
      windowWidth: window.innerWidth, // Képernyő aktuális szélessége
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    // Szöveg formázása bekezdésekre
    formatText(textArray) {
      if (!textArray || !Array.isArray(textArray)) {
        return "<p></p>";
      }
      return textArray.map((t) => `<p>${t}</p>`).join("");
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
@media (max-width: 768px) {
  .table-responsive {
    display: block;
    overflow-x: auto;
  }

  .table-bordered tr {
    display: block;
    margin-bottom: 20px;
  }

  .table-bordered td,
  .table-bordered th {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .table-bordered td {
    padding-left: 50%;
    position: relative;
  }

  .table-bordered td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    white-space: nowrap;
  }
  thead {
    display: none;
  }
}
</style>