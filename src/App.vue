<template>
 <BPHeader />
 <Login />
</template>
<script>
  import BPHeader from "@/components/BPHeader.vue";
  import Login from "@/pages/Login.vue";

  export default({
    components:{
      BPHeader,
      Login
    }
  })
</script>