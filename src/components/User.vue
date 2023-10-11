<template>
      <!-- <v-app-bar
        color=""
        density="compact">

      <template v-slot:append> -->
          <v-list v-if="isAuthenticated"
                  prepend @click="doSomething">
              <v-list-item
                :prepend-avatar=user.picture
                :title=user.nickname
                :subtitle=user.name
              ></v-list-item>
            </v-list>
      <!-- </template>
      </v-app-bar> -->
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
  
export default {
  name: "User",
  setup() {
    const auth0 = useAuth0();
    return {
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      user: auth0.user,
      login() {
        auth0.loginWithRedirect();
      },
      logout() {
        auth0.logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      }
    }
  },
};
</script>