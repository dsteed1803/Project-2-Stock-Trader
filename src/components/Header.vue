<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
                <!--ToDo: Create a router-link that goes to '/' root, add class navbar-brand and add Stock Trader text done-->
            </div>
            <div class="collapse navbar-collapse">
                <div>
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" class="navbar-brand"><a>Portfolio</a></router-link>

                    <!--ToDo: Create router-link that goes to '/portfolio'
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Portfolio text done2-->

                    <router-link to="/stocks" class="navbar-brand"><a>Stocks</a></router-link>
                    <!--ToDo: Create router-link that goes to '/stocks'
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Stocks text done2-->
                </ul>
                </div>
                <strong class="navbar-text navbar-right">Funds:
                    {{ funds | currency }}
                    <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js done-->

                </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <!--ToDo: Add click event to <a> that calls endDay method done-->
                        <a @click="endDay" href="#" >End Day</a>
                    </li>

                    <!--ToDo: Inside <li> Bind to class using :class that passes an object {} called open and set it to isDropdownOpen-->
                        <!--ToDo: Add click event that toggles isDropdownOpen to true and false done2-->
                    <li class="dropdown" v-bind:class= "{open: isDropdownOpen}" @click="isDropdownOpen = ! isDropdownOpen" >
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <!--ToDo: Add click event that calls the saveData method done-->
                            <li @click="saveData"><a href="#">Save Data</a></li>
                            <!--ToDo: Add click event that calls the loadData method done-->
                            <li @click="loadData"><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    //ToDo: Import mapActions from vuex done
    import {mapActions} from 'vuex'

    export default {
        data() {
          return {
            isDropdownOpen: false
              //ToDo: Create data object called isDropdownOpen and set it to false done
          }
        },
        computed: {
          funds () {
            return this.$store.getters.funds;
          }
        //ToDo: Create a computed function called funds
            //ToDo: Have funds() return this.$store.getters.funds[done2]
        },
        methods: {
            //ToDo: Create ...mapActions method
                //ToDo: Call randomizeStocks: 'randomizeStocks'
                //ToDo: Call fetchData: 'loadData' done3
            ...mapActions ({
                  randomizeStocks: 'randomizeStocks',
                  fetchData: 'loadData'
                }),


            //ToDo: Create endDay method
                //ToDo: Call randomizeStocks() [done2]
          endDay () {
            this.randomizeStocks()
          },

            //ToDo: Create SaveData method
                //ToDo: Create const called data that holds an object
                    //ToDo: Set funds: to the $store getters funds
                    //ToDo: Set stockPortfolio: to the $store getters stockPortfolio
                    //ToDo: Set stocks: to the $store getters stocks
                //ToDo: Outside the data object use $http, using .put pass 'data.json' and the data object done5
          saveData () {
              const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
              };
              this.$http.put('data.json', data)
          },

            //ToDo: Create loadData method
                //ToDo: Call fetchData() done
          loadData() {
              this.fetchData()
          }
        }
    }
</script>