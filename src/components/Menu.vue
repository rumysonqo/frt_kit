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
      color="blue darken-4"
      dark
      temporary
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item-group
          v-model="group"
          color="cyan darken-3"
        >
          <v-list-item>
              <v-btn rounded color='lime lighten-2' block><v-icon> mdi-application</v-icon><router-link to="/">Inicio</router-link></v-btn>
          </v-list-item>
          
          <v-list-item>
            <v-btn rounded color='lime lighten-2' block><router-link to="/por_programa">Por Programa</router-link></v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn rounded color='lime lighten-2' block>Por Programa/Meta</v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Por Programa/Meta/Tarea</v-list-item-title>
          </v-list-item>
          
        </v-list-item-group>
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