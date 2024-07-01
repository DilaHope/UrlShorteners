<template>
    <div>
        <!-- <pre>{{ user }}</pre> -->
   <p><strong>Nom d'utilisateur: </strong>Alid</p>
   <p><strong>Email: </strong>Alidassigname@gmail.com</p>
    </div>
</template>
    
<script lang="ts" setup>
import axios from "~/node_modules/axios/index";

 onMounted(async () =>{
    const user = await axios.get("/user");
    console.log({user})
 });
 
</script>

<style>

</style>