
<!-- Ca fonctionne ausi comme ca  -->


<template>
    <div>
        <h1>VUE 3 Test page </h1>
        <Test1></Test1>

        <div>
            <v-btn @click="s_decrement">-</v-btn>
            count :  {{ s_count }}
            <v-btn @click="s_increment">+</v-btn>

          
        </div>
    </div>
</template>

<script lang="ts">  
    import Test1 from '../components/Test1.vue';   
    import { useStore } from '../store/store';
    import { mapState, mapActions } from 'pinia';


    // STORE
    // Import du store dans fichier
    // init du store dans setup() et const store
    // declaration des state et action directement dans le return du setup
    export default {
        name: "Test",
        setup() {
            const store = useStore();
            return {
                // une façon de faire 
                // s_count : store.count,
                // s_increment : store.increment,
                // s_decrement : store.decrement
            }
        },
        computed:{
            ...mapState( useStore, {
                s_count: 'count',
                s_data:'data'
            })
        },
        methods:{
            //une deuxième façon de faire
            ...mapActions(useStore, { 
                s_increment: 'increment',
                s_decrement : 'decrement'
            })
        }
    };
</script>