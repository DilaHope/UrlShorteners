<template>
    <div class="flex justify-center  ">
        <div class="prose">
           <h1>Connexion</h1>
           <form @submit.prevent="login(form)">
         <label>
            Email
            <input type="email" name="email" v-model="form.email">
         </label>
         <label>
            Mot de passe
            <input type="password" name="password" v-model="form.password">
         </label>
         <button type="submit" class="btn">Se connecter</button>
           </form>
           <p>
            Pas de compte?
            <nuxt-link to="/register" class="underline text-lime-600 ">Inscrivez-vous !</nuxt-link>
           </p>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import axios from "~/node_modules/axios/index";

  definePageMeta({
    layout: 'centerred'
  });

  interface LoginPayload{
   
   email: string;
   password:string;
    
  }
  const form = ref<LoginPayload>({
    
   email: "",
   password:"",
   
  })
  async function login( payload:LoginPayload ) {
   
   const res = await axios.post('/login',payload)
   useRouter().push("/me")
   
   console.log(res);

  }
</script>

<style>

</style>