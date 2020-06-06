<template>
  <div id="wrapper">
<leftbox2></leftbox2>
 <div id="page-wrapper" class="gray-bg">
     <headerbox></headerbox>
<router-view></router-view>
 </div></div>
</template>

<script>
    export default {
        name: "allBox",
      created() {
        console.log(this.$route.query.id);
      }
    }
</script>

<style scoped>

</style>
