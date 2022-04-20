<template>
<v-container fluid class="ma-0" grid-list-lg>
    <v-layout>
    <v-flex xs4>
    <v-text-field v-model='cadena'
        v-on:keyup.enter='bus_todo'
        label="busqueda por item/familia"
        placeholder="texto a buscar"
        filled
        rounded>
    </v-text-field>

    </v-flex>
    
    </v-layout>

    <v-layout>
    <v-flex  xs12>
    
      <v-data-table
      :headers="headers"
      :items="ds_kit"
      class="elevation-5"
      :footer-props="{
      'items-per-page-options': [10, 20, 30, 40, 50]}"
      :items-per-page="30"
      >
      </v-data-table>
    
    </v-flex>
  </v-layout>
  </v-container>  

    
</template>

<script>
import axios from "axios";
let url='http://localhost:3000/api/';
export default {
    name:'cmp-Inicio',
    mounted(){
        this.ver_todo();
    },
    data(){
        return{
            cadena:'',
            ds_kit:[],
            headers:[{
            text:'CODIGO',
            align:'start',
            value:'cod_item_fam',
            class:'deep-purple accent-4 white--text',
            },
            {
            text:'ITEM/FAMILIA',
            align:'start',
            value:'nom_item_fam',
            class:'deep-purple accent-4 white--text',
            
            },
            {
            text:'NIVEL',
            align:'center',
            filterable: false,
            value:'nivel',
            class:'deep-purple accent-4 white--text'
            },
            {
            text:'TIPO',
            align:'center',
            filterable: false,
            value:'tipo_bien',
            class:'deep-purple accent-4 white--text'
            },
            {
            text:'TIPO DE CALCULO',
            align:'center',
            filterable: false,
            value:'tipo_calculo',
            class:'deep-purple accent-4 white--text'
            },
            {
            text:'PROGRAMA',
            align:'start',
            filterable: false,
            value:'programa',
            class:'deep-purple accent-4 white--text'
            },
            {
            text:'META',
            align:'start',
            filterable: false,
            value:'meta',
            class:'deep-purple accent-4 white--text'
            },
            {
            text:'SUB FINALIDAD',
            align:'start',
            filterable: false,
            value:'sub_finalidad',
            class:'deep-purple accent-4 white--text'
            },
            {
            text:'CLASIFICADOR',
            align:'start',
            filterable: false,
            value:'clasificador',
            class:'deep-purple accent-4 white--text'
            }]
            
        }
    },
    methods:{
        ver_todo(){
            axios.get(url).then(response=>{
                this.ds_kit=response.data;
            }
        )
            console.log(this.cadena);
        },
        bus_todo(){
            axios.get(url+this.cadena).then(response=>{
                this.ds_kit=response.data;
            }

            )
            console.log(this.cadena);
        }
    }
}
</script>

<style>
  tbody tr:nth-of-type(even) {
    background-color: rgb(211, 247, 248);
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgb(255, 255, 255);
  }

  .v-data-table-header {
    background-color: rgb(4, 16, 65);
    color: rgb(252, 251, 251);
  }

  .v-data-footer {
    background-color: rgb(250 ,250, 250);
  }

  .theme--light.v-data-table thead tr th {
    color: rgb(124, 14, 14);
  }
</style>