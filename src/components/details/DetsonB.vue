<template>
 <div class="box">
         <el-card class="box-card el__box__back">
  <div slot="header" class="clearfix flex">
      
    <div v-for="(item) in arr" :key="item.id">
           <div>{{item.reply_count}}</div>  
    </div>
      <div>回复</div>
  </div>
   <div v-for="(item,index) in arr" :key="index">
             <div v-for="(item1,index1) in item.replies" :key="index1">
                 <div class="flex fz-14">
 <img :src="item1.author.avatar_url" alt="" class="img">  
                     {{item1.author.loginname}}
                 </div>
                 <div> {{item1.content}}</div>
               
    </div>
    </div>
  
</el-card>
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
         id: '',
         arr:null
     }
   },
   methods: {
    gteData() {
      axios
        .get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(res => {
          this.arr = res.data;
           
         
        })
        .catch(err => {
          console.log(err);
        });
    },
   },
   mounted() {
this.id = this.$route.query.id
this.gteData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    
  width: 1070px;
}
.img{
    width: 32px;
    height: 32px;
}
</style>