<template>
<!-- Permet d'afficher les contenues que l'on souhaite avoir sur toutes les pages -->
 <!-- on peut avoir tailwidcss en mettant ceci dans le navigateur http://localhost:3001/_tailwind/ -->
<div>
<!--Appel du composant AppHeader -->
<AppHeader/>

<main>
    <slot/>
</main>
 
</div>
</template>

<script lang="ts" setup>
 
</script>

<style>

</style>
 