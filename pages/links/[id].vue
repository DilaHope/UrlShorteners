<template>
    <div class="mx-auto max-w-md prose">

     <h1>Modifier le lien</h1>
    <GoBack />
     <form action="" method="post">
      <label for="">
        <div>Lien court</div>
        <input type="text">
      </label>
      <label for="">
        <div>Lien complet</div>
        <input type="text">
      </label>
      <button>Modifier le lien</button>
     </form>
    </div>
</template>
    
<script lang="ts" setup>
  
</script>

<style >
 input{
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
 }

 label{
  @apply block mb-2 text-sm font-medium text-gray-900;
 }
</style>