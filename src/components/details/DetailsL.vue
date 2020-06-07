<template>
 <div>
    <div class="box pos-abs">
       <el-card class="box-card el__box__back">
  <div slot="header" class="clearfix">
          <div>作者</div>
  </div>
       <div v-for="(item,index) in six" :key="index">
           <div v-for="(item1,index1) in item" :key="index1">
              <div v-if="item1.id===id" class=" flex al-center fz-14">
                  <img :src="item1.author.avatar_url" alt="" class="img">
                  {{item1.author.loginname}}
             <div class=" fz-16 m-l2"> {{item1.author.loginname}}</div> 
                  </div>  
                  
           </div>
       </div>
</el-card>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       six:{
           type:Object
       },
       id:{
           type:String
       }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

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
.box{
    width: 300px;

    top: 0;
    right: 0;
}
.img{
    width: 32px;
    height: 32px;
}
</style>