<script>

export default {
inject: ["karakterek"],
// data() {
//   return {
//     featuredKarakter: null
//   };
// },
// mounted() {
//   this.featuredKarakter = this.karakterek[Math.floor(Math.random() * this.karakterek.length)];
// }
}
</script>

<template>
  <section class="welcome">
  <h1>Sziaaa! Üdvözöllek a kezdőlapon!</h1>
  <p>Itt találhatod a kedvenc karaktereidet a sorozatból. Fedezd fel a leírásokat és ismerd meg közelebbről a szereplőket!</p>
</section>
<!-- <section class="featured-character" v-if="karakterek.length > 0">
  <h2>Kiemelt karakter</h2>
  <div v-if="featuredKarakter">
    <h3>{{ featuredKarakter.cim }}</h3>
    <img :src="featuredKarakter.kep" alt="featured karakter">
    <p>{{ featuredKarakter.leiras }}</p>
  </div>
</section> -->
<section class="contact">
  <h3>Kapcsolat</h3>
  <p>Írj nekünk: <a href="telbeve121@gmail.com">telbeve121@gmail.com</a></p>
  <p>Kövess minket a közösségi médiában:</p>
  <ul>
    <li><a href="https://facebook.com">Facebook</a></li>
    <li><a href="https://instagram.com">Instagram</a></li>
  </ul>
</section>

</template>
