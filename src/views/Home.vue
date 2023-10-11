
<template>
    <div>      
        <h1>Page Home</h1>
        <v-container>  
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="search"
                                  label="Recherche"
                                  single-line
                                  hide-details>
                    </v-text-field>
  
                    <v-data-table v-if="s_data"
                                  :headers="headers"
                                  :items="s_data"
                                  :search="search">

                                <template v-slot:item.action="{ item }">
                                    <v-btn @click="goToPageDetail(item.id)">voir details</v-btn>
                                </template>
                    </v-data-table>       
                </v-col>
            </v-row>
           
        </v-container>
    </div>
</template>

<script>
    import { useStore } from '../store/store';

    export default {
        setup(){
            const store = useStore();
            return {
                getFilterData : store.getFilterData,
                search : '',
                headers: [
                    { key: 'id', title: 'Id' },
                    { key: 'common_name', title: 'Nom commun' },
                    { key: 'slug', title: 'Famille' },
                    { key: 'scientific_name', title: 'Nom scientifique' },
                    { key: 'year', title: 'Année' },                   
                    { key: 'action', title: 'Action' },
                ],
                s_data : store.data,
                plantList : localStorage.getItem('localStoragePlantList')
            }
        },
        mounted(){
            localStorage.setItem("localStoragePlantList", JSON.stringify(this.s_data));
            localStorage.setItem("localStorageFavorisList", JSON.stringify([]));
            
        },
        
        methods:{
            goToPageDetail(id){
                this.getFilterData(id);
                this.$router.replace('/Details/' + id)
            },
            
        }
    }
</script>