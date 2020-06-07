<template>
  <div>
   
    <div class="box m-t2">
      <div class="nav-box flex al-center fz-14">
        <div class="m-l2 n-text flex al-center ju-center">全部</div>
        <div class="hov m-l2">精华</div>
        <div class="hov m-l2">分享</div>
        <div class="hov m-l2">问答</div>
        <div class="hov m-l2">招聘</div>
        <div class="hov m-l2">客户端测试</div>
      </div>
  
         <div v-for="item in arr" :key="item.id">
        <div v-for="item1 in arr.data" :key="item1.id">
          <div class="flex al-center every">
         <div class=" m-l1"><img :src="item1.author.avatar_url" class="img-sz"></div>  
           <div class=" fz-14 flex al-center m-l1">{{item1.reply_count}}/<div class="fz-12">{{item1.visit_count}}</div></div>
           <div></div>
          {{item1.title}}
          </div>
          <div class="vae"></div>
        
          </div>
          <Srdlson></Srdlson>
      </div>
          
    </div>

     
  </div>
</template>

<script>
import Srdlson from '../components/shaerd/Srdlson';
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {
     Srdlson
  },
  data() {
    return {
      arr: null,
      
       
    };
  },
  methods: {
    gteData() {
      axios
        .get(`https://cnodejs.org/api/v1/topics`)
        .then(res => {
          this.arr = res.data;
         
         
        })
        .catch(err => {
          console.log(err);
        });
    },
    
     
  },
  mounted() {
    this.gteData();
    
     
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 1075px;
  
  background: darkgoldenrod;
}
.nav-box {
  width: 100%;
  height: 40px;
  background: rgb(246, 246, 246);
  color: rgb(128, 189, 1);
}
.n-text {
  width: 44px;
  height: 24px;
  background: rgb(128, 189, 1);
  color: white;
}
.hov:hover {
  color: rgb(79, 85, 143);
}
.img-sz{
  width: 32px;
  height: 32px;
}
.every{
  width: 100%;
  height: 60px;
 
  border-bottom: 1px solid rgb(240,240,240);
}
.every:hover{
  background: rgb(245,245,245);
}

</style>