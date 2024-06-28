<template>
    <div class="flex justify-center  ">
        <div class="prose">
           <h1>Inscription</h1>
           <form >
         <label>
           Nom et prénom
            <input type="text">
         </label>
         <label>
            Email
            <input type="email">
         </label>
         <label>
            Mot de passe
            <input type="password">
         </label>
         <label>
            Confirmation du mot de passe
            <input type="password">
         </label>
         <button type="button" class="btn">S'inscrire</button>
           </form>
           <p>
            Vous avez déja un compte?
            <nuxt-link to="/login" class="underline text-lime-600 ">connectez-vous !</nuxt-link>
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