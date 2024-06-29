<template>
    <div class="flex justify-center  ">
        <div class="prose">
           <h1>Inscription</h1>
           <form @submit.prevent="register(form)">
         <label>
           Nom et prénom
            <input type="text" name="text" v-model="form.name">
         </label>
         <label>
         Email
            <input type="email" name="email" v-model="form.email">
         </label>
         <label>
            Mot de passe
            <input type="password" name="password" v-model="form.password">
         </label>
         <label>
            Confirmation du mot de passe
            <input type="password" name="password" v-model="form.password_confirmation">
         </label>
         <button type="submit" class="btn">S'inscrire</button>
           </form>
           <p>
            Vous avez déja un compte?
            <nuxt-link to="/login" class="underline text-lime-600 ">connectez-vous !</nuxt-link>
           </p>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import axios from "~/node_modules/axios/index";

 

  definePageMeta({
    layout: 'centerred'
  });

  interface RegisterPayload{
   name:string;
   email: string;
   password:string;
   password_confirmation:string;
  }
  const form = ref<RegisterPayload>({
   name:"",
   email: "",
   password:"",
   password_confirmation:"",
  })
  async function register( payload:RegisterPayload ) {
   
   const res = await axios.post('/register',payload)
   
   console.log(res);

  }
</script>

<style>

</style>