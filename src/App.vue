<template>
<v-app>
  <BPHeader />
  <router-view />
</v-app>
</template>
<script>
  import BPHeader from "@/components/BPHeader.vue";

  export default({
    components:{
      BPHeader
    }
  })
</script>