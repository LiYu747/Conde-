<template>
 <div>
     
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       dat:null
     }
   },
   methods: {
       getData(){
         axios.get('https://cnodejs.org/api/v1/topics')
         .then((res)=>{
              this.dat = res.data
         })
         .catch((err)=>{

         })
       }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>