<template>
<v-container fluid class="ma-0" grid-list-lg>
    <v-layout>
    <v-flex xs4>
    <v-text-field v-model='cadena'
        v-on:keyup.enter='kit_por_meta(), kit_por_meta_tarea()'
        label="ingrese cadena de dusqueda"
        placeholder="texto a buscar"
        filled
        rounded>
    </v-text-field>

    </v-flex>

    

    <v-flex xs4>
    <v-select
        v-model="cod_meta"
        :items=ds_meta
        item-text="meta"
        item-value="cod_meta"
        label="Seleccione una meta"
        outlined
        @change="get_tareas(), kit_por_meta()"
      >
      </v-select>

    </v-flex>

    <v-flex xs4>
    <v-select
        v-model="cod_tar"
        :items=ds_tarea
        item-text="sub_finalidad"
        item-value="cod_subfin"
        label="Seleccione una tarea"
        outlined
        @change="kit_por_meta_tarea()"
      >
      </v-select>

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
let url='http://localhost:8000/api/';
export default {
    name:'cmp-Inicio',
    mounted(){
        this.get_metas();
        this.get_tareas();
        this.kit_por_meta();
        this.kit_por_meta_tarea();
    },
    
    data(){
        return{
            cadena:'',
            cod_meta:null,
            cod_tar:null,
            ds_prog:[],
            ds_meta:[],
            ds_tarea:[],
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
        async get_metas(){
            try {
                let datos=await axios.get(url+'metas/')
                this.ds_meta= await datos.data;    
            } catch (error) {
                console.log(error);
            }
        },

        async get_tareas(){
            try {
                let datos=await axios.get(url+'tareas/'+this.cod_meta)
                this.ds_tarea= await datos.data;    
            } catch (error) {
                console.log(error);
            }
        },
        
        async kit_por_meta(){
            if(this.cadena==='' && this.cod_tar==null){
                try{
                let datos=await axios.get(url+'kit_por_meta/'+this.cod_meta)
                console.log(datos.data);
                this.ds_kit=await datos.data 
                }catch(error){
                console.log(error);
                }
            }else{
                try{
                let datos=await axios.get(url+'kit_por_meta_cadena/'+this.cod_meta+'/'+this.cadena)
                console.log(datos.data);
                this.ds_kit=await datos.data 
                }catch(error){
                console.log(error);
                }
            }
      },

      
      async kit_por_meta_tarea(){
            if(this.cadena==='' && this.cod_tar !=null){
                try{
                let datos=await axios.get(url+'kit_por_meta_tarea/'+this.cod_meta+'/'+this.cod_tar)
                console.log(datos.data);
                this.ds_kit=await datos.data 
                }catch(error){
                console.log(error);
                }
            }else{
                try{
                let datos=await axios.get(url+'kit_por_meta_tarea_cadena/'+this.cod_meta+'/'+this.cod_tar+'/'+this.cadena)
                console.log(datos.data);
                this.ds_kit=await datos.data 
                }catch(error){
                console.log(error);
                }
            }
      }



    }
}
</script>
