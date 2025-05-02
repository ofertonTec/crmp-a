import api from "@/lib/axios";

export default {
  obtnerPersonas() {
    return api.get("/clientes");
  },
  agregarPersona(data) {
    return api.post("/clientes", data);
  },
  obtnerPersona(id) {
   return api.get("/clientes/"+id)
  },
  actualizarPersona(id,data){
    return api.patch("/clientes/"+id,data)
  }
};
