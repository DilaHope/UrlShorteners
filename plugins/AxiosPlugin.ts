import axios from "~/node_modules/axios/index"

export default defineNuxtPlugin(async(nuxtApp) => {
    // configuration de base pour que les requêtes soient acceptée par le backend
    const config = useRuntimeConfig();
    axios.defaults.baseURL = `${config.public.apiUrl}/api`;
    axios.defaults.headers.common['Content-Type'] ='application/json'; // on envoie du json au serveur
    axios.defaults.headers.common['Accept'] = 'application/json'; // on attend du serveur du json egalement
    axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest'; //configure Axios pour inclure automatiquement l'en-tête X-Requested-With: XMLHttpRequest dans toutes les requêtes 
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
     
    // on lance une requête pour avoir les cookies nous permettant d'interagir avec le backend
    await axios.get("/sanctum/csrf-cookie",{
        baseURL:config.public.apiUrl
    });
})