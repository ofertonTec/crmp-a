import api from "@/lib/axios";

export default {
    obtnerPersonas(){
        return api.get('/clientes')
    },
    agregarPersona(data){
        return api.post('/clientes',data)
    },
}