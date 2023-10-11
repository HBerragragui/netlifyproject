<template> 

  <v-row>
    <h1>Page profil</h1>
    <v-col cols="12">
       <v-card color="green"
              theme="dark">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">
              {{user.nickname}} 
            </v-card-title>
              <v-card-subtitle>{{ user.name }}</v-card-subtitle>
              <v-card-subtitle>{{ user.sub }}</v-card-subtitle>                
              <v-card-subtitle>updated_at : {{ user.updated_at }}</v-card-subtitle>
              <v-card-subtitle>email_verified : {{ user.email_verified }}</v-card-subtitle>
            </div>
                
            <v-avatar class="ma-3"
                      size="125"
                      rounded="1">
              <v-img :src=user.picture></v-img>
            </v-avatar>

            
          </div>
        </v-card> 
     
    </v-col>
</v-row>
</template>

<script >
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "Profil",
  setup() {
    const auth0 = useAuth0();
    
    return {
      user: auth0.user,
     
    }
  }
};
</script>