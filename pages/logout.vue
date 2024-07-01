<template>
    <div>
        Deconnexion ...
    </div>
</template>
    
<script lang="ts" setup>
import axios from "~/node_modules/axios/index"

   
   definePageMeta({
     layout: 'simple'
   });

  onMounted(async () => {
    await axios.post('/logout');
    const route =  useRouter();
  route.replace('/login');
  });
</script>

<style>

</style>