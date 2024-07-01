<template>
 <!--  <Hello/>-->

   <!--Composant permettant d'afficher le contenu du dossier "pages/"-->
   <div class="max-w-7xl mx-auto">
     <NuxtLayout>
       <NuxtPage />
     </NuxtLayout>
   </div>
</template>

<script setup lang="ts">
 useHead ({

   title: 'url Shortener',
   link:[
    {
      rel:'icon',
      href:'/app-icon.png',
      type: 'image/png'
    }
   ]
 })
</script>