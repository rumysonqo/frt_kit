<template>
  <v-container>
    <v-app-bar
      app
      color="primary"
      dark
    >

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>KITS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="light-blue darken-4"
      temporary
      app
    >
      <v-list
        dense
        nav
      >

      <router-link style="text-decoration: none; color: inherit;" to="/">  
      <v-list-item>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
          </v-btn>
        </v-list-item>
        </router-link>

        <router-link style="text-decoration: none; color: inherit;" to="/por_programa">
        <v-list-item link>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Por Programa</v-list-item-title>
        </v-btn>
        </v-list-item>
        </router-link>

        

      </v-list>
    </v-navigation-drawer>

  </v-container>
</template>

<script>
  export default {
      name:'cmp-Menu',
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>