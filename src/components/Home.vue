<template>
  <div>
    <h1 class="header">Trade or View your Portfolio</h1>
    <h6 class="subheader">You may Save & Load your Data</h6>
    <h6 class="subheader">Click on 'End Day' to begin a New Day!</h6>
    <hr>

    <p>Your Funds:
      <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js done-->
      {{ funds | currency }}
    </p>
  </div>
</template>

<script>
  export default {
    computed: {
      //ToDo: Create a computed function called funds
      //ToDo: Have funds() return this.$store.getters.funds done2
      funds() {
        return this.$store.getters.funds
      }
    }
  }
</script>

<style>
  .header {
    background-color: lightsalmon;
    border: 2pt;
    font-family : Phosphate;
    font-size : 60px;
    color : #FFF7F7;
    color : rgb(255, 247, 247);
  }
  .subheader {
    background-color: beige;
    font-family : PT Sans Narrow;
    font-size: 25px;
  }
  .subheader2 {
    background-color: cornflowerblue;
  }
</style>