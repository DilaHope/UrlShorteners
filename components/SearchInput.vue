<template>
    <div class="relative">
        <Icon name="mdi:magnify" class="absolute top-[50%] translate-y-[-50%] w-6 h-6 ml-2"/>
        <input 
         type="text"
         placeholder ="Rechercher un lien"
         class="pl-10 inline-block"
         v-model="modelValue"
        />
     
    </div>
</template>
    
<script lang="ts" setup>

//   defineProps({
//    modelValue: {type:String, require:true}
//   })

   const modelValue = defineModel() // on attend une props nommée modelvalue
 </script>

<style>

</style>