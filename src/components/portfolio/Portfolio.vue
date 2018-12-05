<template>
    <div>
        <!--ToDo: Load app-stock component-->
            <!--ToDo: Loop through stock in stocks using v-for-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for done3-->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from './Stock.vue'
    //ToDo: Import mapGetters from vuex
    //ToDo: Import Stock from ./Stock.vue done2

    export default {
        computed: {
            ...mapGetters({
              stocks: 'stockPortfolio'
            })
            //ToDo: Create ...mapGetters method
                //ToDo: Call stocks: 'stockPortfolio' done2
        },
      components: {
          appStock: Stock
      }

        //ToDo: Initialize Stock component and name it appStock done
    }
</script>