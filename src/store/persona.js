import { defineStore } from "pinia";
import { ref, watch } from "vue";
const personas = ref(Array.isArray(JSON.parse(localStorage.getItem('personas'))) ? JSON.parse(localStorage.getItem('personas')) : [])

export const usePersonaStorage=defineStore('personaStorage',()=>{
    
    function agregarPersona(persona){
        console.log("INICIO:function agregarPersona(persona)")
        personas.value.push(persona)
        
    }
    function editarPersona(id,data){
        const index= personas.value.findIndex(persona=>persona.id===id)
        personas.value[index]=data
    }
    function guardarPersonasLocalStorage(){
        localStorage.setItem('personas',JSON.stringify(personas.value))
    }
    function eliminarPersona(id){
        personas.value=personas.value.filter(persona=>persona.id!==id)
    }

    watch(personas,()=>{
        guardarPersonasLocalStorage()
    },{deep:true})

    return{
        personas,
        agregarPersona,
        editarPersona,
        eliminarPersona,
     }
})