<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <nav>
    <div class="container">
      <h2 class="logo">
        Rickobeatz
      </h2>
      <div class="search-bar">
        <i class="uil uil-search"></i>
        <input type="search" placeholder="search for creators, inspiration and projects">
      </div>
      <div class="create">
        <label class="btn btn-primary" for="create-post">Create</label>
        <div class="profile-photo">
          <img src="./assets/profile-1.jpg" alt="">
        </div>
      </div>
    </div>
  </nav>
  <!-- <HelloWorld msg="Welcome bruv init"/> -->
 <main-body @showThemeDialog="showThemeDialog"  ></main-body>
 <theme-dialog v-show="showDialog" @closeDialog="closeDialog"></theme-dialog>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showDialog:false
    }
  },
  methods: {
     showThemeDialog(){
      this.showDialog=true;
    },
     closeDialog(){
      this.showDialog=false;
     }
  }
}
</script>

<style>
   @import './assets/styles/styles.css';
</style>
