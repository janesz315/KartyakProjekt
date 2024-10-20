<template>
    <div class="col">
      <div class="card">
          <slot name ="image"> </slot>
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <slot name="title"></slot>
          <!-- <h5 class="card-title">Card title</h5> -->
          <button type="button" class="btn btn-info" @click="onClickReszletek()" data-bs-toggle="modal" data-bs-target="#karakterInfoModal">Részletek</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props:["id"],
      methods:{
          onClickReszletek(){
              this.$emit("podrobnostiModal", {id: this.id})
          }
      }
  }
  </script>
  
  <style>
  .card {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card:hover {
  transform: scale(1.05);  /* Kicsit megnöveli a kártyát hover esetén */
}

  </style>