<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <small>{{stock.name}}</small> Price: {{stock.price}}
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!--ToDo: Inside input use v-model.number and pass quantity-->
                        <!--ToDo: Bind to class using : and pass object called danger that takes in insufficientFunds done2-->
                    <input  v-model.number ="quantity"
                            :class= {danger:insufficientFunds}
                            type="number"
                            class="form-control"
                            placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" >
                        {{ insufficientFunds ? 'Not Enough' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ["stock"],
        data() {
            return {
              quantity: 0
                //ToDo: Create data object called quantity and set it to 0 done
            }
        },
        computed: {
          funds() {
            return this.$store.getters.funds
          },
            //ToDo: Create a computed function called funds
                //ToDo: Have funds() return $store.getters.funds done2
          insufficientFunds() {
            return this.quantity * this.stock.price > this.funds
          }

            //ToDo: Create a computed function called insufficientFunds
                //ToDo: Have insufficientFunds() return this.quantity * this.stock.price > this.funds done2
        },
        methods: {
          buyStock() {
            const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
          }
            //ToDo: Create buyStock method
                //ToDo: Create const called order that holds an object
                    //ToDo: Set stockId: to stock.id
                    //ToDo: Set stockPrice: to stock.price
                    //ToDo: Set quantity: to quantity
            //ToDo: Outside the data object $store.dispatch() passing 'buyStock' and order
            //ToDo: Reset quantity to 0 done7
        }
    }
</script>