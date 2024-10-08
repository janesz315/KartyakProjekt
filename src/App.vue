<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
export default {
  provide() {
    return {
      searchWord: computed(() => this.searchWord),
      karakterek: [{
          id: 1,
          title: "Timmy Turner",
          image: "timmy.jpg",
          text: [
            "Timmy Turner a sorozat főszereplője. Ahogy a címadó dalban is szerepel, ő egy átlagos gyerek, akit senki sem ért meg, és hogy elhanyagoló szülei egy gonosz bébiszitter, Vicky gondjaira bízzák. Egy nap azonban egy Cosmo és Wanda nevű varázslatos kívánságteljesítő tündérpár érkezik hozzá, hogy felvidítsák, és így kezdődik számos kalandja."
          ],
        },
        {
          id: 2,
          title: "Cosmo",
          image: "cosmo.jpg",
          text: [
            "Cosmo az egyik Timmy két tündér keresztszülője közül. Házastársával, Wandával együtt ő vigyáz Timmyre, és teljesíti kívánságait. Elég buta azonban, és gyakran rossz tanácsokat ad Timmynek, amikor azt javasolja, hogy mit kívánjon.",
          ],
        },
        {
          id: 3,
          title: "Wanda",
          image: "wanda.jpg",
          text: [
            "Wanda Timmy másik tündérkeresztszülője, és a sorozat egyik legfontosabb szereplője. Ő vigyáz Timmyre, és gyakran Cosmóra is. Megakadályozza, hogy veszélybe kerüljenek és kárt tegyenek magukban. Néha emiatt zsémbesnek nevezik, de a szükség idején Timmy mindennél többre becsüli a tanácsait."
          ],
        },
        {
          id: 4,
          title: "Csiribú",
          image: "csiribu.jpg",
          text: [
            "Csiribú Cosmo és Wanda tündérbabája, akit akkor szültek meg, amikor Timmy azt kívánta, hogy legyen egy gyerekük. Cosmo volt az, aki megszülte Csiribút. Bár még csak egy csecsemő, a varázsereje hatalmas, de még nem kontrollált, ezért az Anti-tündérek és a Tündérek el akarták fogni Csiribút a saját céljaikra. Bár csak a nevét tudja kimondani, Csiribú eléggé elbűvölő, és úgy tűnik, mindenki szereti őt, kivéve legnagyobb riválisát: Úbiricset."
          ],
        },
        {
          id: 5,
          title: "Blöki",
          image: "bloki.jpg",
          text: [
            "Sparky egy pajkos tündérkutya, akit Timmy fogadott örökbe, mert Timmy rájött, hogy Dimmsdale-ben mindenkinek van háziállata, kivéve neki.",
            "A rajongók és a Nick vezetőinek negatív fogadtatása miatt eltávolították a sorozatból, így az Ember legrosszabb barátja az utolsó szereplése. Úgy tűnik, hogy a 10. évadtól kezdve retconnal kivették a sorozatból, mivel eltűnésére nem adtak univerzális magyarázatot."
          ],
        },
        {
          id: 6,
          title: "Chloe Carmichael",
          image: "chloe.jpg",
          text: [
            "Chloe Carmichael Timmy új szomszédja, akivel megosztja a tündéreket. Ennek oka, hogy a Tündérvilágban kevés a tündér, aki tündéristen-szülő lehet. Timmy szöges ellentétének tekinthető, mivel nagyon tehetséges, és a lánynak van egy go-getter hozzáállása, gyakran izgatottá válik, ha segíthet az embereknek, vagy produktív munkát végezhet. Gyakran előreszalad, és több kárt okozhat, mint hasznot, vagy magas energiájú hozzáállásával eltaszíthatja az embereket magától.",
            "Ő a 10. évad deuteragonistája, és abban az évadban minden epizódban megjelenik."
          ],
        },]
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
  <div class="container-fluid my-container p-0 my-border">
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
