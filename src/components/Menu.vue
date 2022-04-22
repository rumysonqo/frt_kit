<template>
  <v-container>
    <v-app-bar
      app
      color="primary"
      dark
    >

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>KITS MARZO 2022</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="deep-purple darken-3"
      temporary
      app
    >

    <v-layout mt-4 column align-center>
        <v-flex>
            <img :src="require('../assets/logo.png')"
            class="my-3"
            contain
            height="50">
        </v-flex>
        <v-flex>
            <p class="white--text headline">Opciones</p>
        </v-flex>
    </v-layout>

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

        <router-link style="text-decoration: none;" to="/por_programa">
        <v-list-item link>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-store</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Por Programa</v-list-item-title>
        </v-btn>
        </v-list-item>
        </router-link>

        <router-link style="text-decoration: none; color: inherit;" to="/por_programa_meta">
        <v-list-item link>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Programa/Meta</v-list-item-title>
        </v-btn>
        </v-list-item>
        </router-link>

        <router-link style="text-decoration: none; color: inherit;" to="/por_meta_tarea">
        <v-list-item link>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Por Meta/Tarea</v-list-item-title>
        </v-btn>
        </v-list-item>
        </router-link>

        <router-link style="text-decoration: none; color: inherit;" to="/por_programa">
        <v-list-item link>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Clasificador</v-list-item-title>
        </v-btn>
        </v-list-item>
        </router-link>

        <router-link style="text-decoration: none; color: inherit;" to="/por_programa">
        <v-list-item link>
        <v-btn class="cyan lighten-2" rounded block>
          <v-list-item-icon>
            <v-icon>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Meta/Clasif.</v-list-item-title>
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