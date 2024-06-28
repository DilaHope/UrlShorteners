<template>
    <div class="flex justify-center  ">
        <div class="prose">
           <h1>Connexion</h1>
           <form >
         <label>
            Email
            <input type="email">
         </label>
         <label>
            Mot de passe
            <input type="password">
         </label>
         <button type="button" class="btn">Se connecter</button>
           </form>
           <p>
            Pas de compte?
            <nuxt-link to="/register" class="underline text-lime-600 ">Inscrivez-vous !</nuxt-link>
           </p>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
  definePageMeta({
    layout: 'centerred'
  })
</script>

<style>

</style>