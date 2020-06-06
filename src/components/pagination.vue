<template>
    
</template>

<script>
  import pagination from 'vue-pagination-bootstrap'

  export default {

    name:  "pagination" ,
  data () {
    return {
      total: 15,
      pageSize: 10,
      paginationOptions: { // Not required to pass this configurations
        offset: 2,
        previousText: 'Prev',
        nextText: 'Next',
        alwaysShowPrevNext: true
      }
    }
  },
  methods: {
    pageChanged (page) {
      console.log(page)
      // Exec your response to server passing 'page' params as clicked button paging
    }
  }
  }
</script>

<style scoped>

</style>
