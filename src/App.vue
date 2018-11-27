<template>
    <div class="container">
        <!--ToDo: Load app-header done-->
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <!--ToDo: Load router-view done-->
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue';
    //ToDo: Import Header Component done

    export default {
      data() {
        return {

        }
      },
      components: {
        appHeader: Header
      },
        //ToDo: Initialize Header component and name it appHeader done

        //ToDo: On page creation dispatch 'initStocks' to the vuex $store

      created () {

      }

    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in 300ms ease-out forwards;
    }

    .slide-leave-active {
        transition: opacity 300ms ease;
        opacity: 0;
        animation: slide-out 300ms ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-15px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0);
        }

    }

    /*ToDo: Create slide-in effect for enter-active*/
    /*ToDo: Create slide-in effect for leave-active*/

    /*ToDo: Create Keyframes for slide-in, remember to include from and to*/
        /*You can use any settings*/

    /*ToDo: Create Keyframes for slide-out, remember to include from and to [done4] */
        /*You can use any settings*/

</style>

