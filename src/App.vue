
<template>
  
<v-app>
  <v-navigation-drawer>
   
  <v-list-item-title class="ml-4 mt-2 text-green">My Application Trefle</v-list-item-title>
  <v-list-item  subtitle="Vue 3"></v-list-item>
  <v-divider></v-divider>
  <User v-if="isAuthenticated" ></User>
  <v-divider></v-divider>
  <v-list lines="one">
    <v-list-item v-for="item in navigationList"
                a:key="item"
                :to="item.to"> 
    <v-list-item-title >
      {{ item.title }}
    </v-list-item-title>
  </v-list-item>
</v-list>

<v-col>
  <v-btn v-if="!isAuthenticated && !isLoading" @click="login">Connexion</v-btn>
  <v-btn v-if="isAuthenticated" @click="logout">Se deconnecter</v-btn>
</v-col>
</v-navigation-drawer>
<v-main>
  
  <v-container>
      <RouterView />
    </v-container>
  </v-main>

</v-app>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
import User from '../src/components/User.vue'; 

export default {
  components:{ User },
  setup(){
      const auth0 = useAuth0();
      return {
        isAuthenticated: auth0.isAuthenticated,
        isLoading: auth0.isLoading,
        user: auth0.user,
        login() {
          console.log('quelque chose')
          auth0.loginWithRedirect();
         
        },
        logout() {
          auth0.logout({
          logoutParams: {
            returnTo: window.location.origin
          }
          });
        },
        navigationList :[
          { title: 'Home', icon: '',to: "/" },
          { title: 'Profile', icon: '',to: "/Profile"  },
          { title: 'Favoris', icon: '',to: "/Favoris"  },
          { title: 'Test', icon: '',to: "/test"  },
        ],
        plantList:null
        
      }
  },
  mounted(){
            
           
           
        },
        watch: {
          plantList(newPlantList) {
          localStorage.plantList = newPlantList;
    }
  }
 
}

</script>

<style scoped>

</style>
