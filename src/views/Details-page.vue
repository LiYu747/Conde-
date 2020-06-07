<template>
  <div class="box1 pos-rel">
    <el-card class="box-card m-t2">
      <div v-for="item in arr" :key="item.id">
        <div v-for="(item1,index) in item" :key="index">
          <div v-if="item1.id===id">
            <div class="t1-text fz-cu">{{item1.title}}</div>
            <div class="fz-12 flex al-center allc">
              <div class="zro"></div>
              发布于{{item1.create_at}}
              <div class="zro"></div>
              作者{{item1.author.loginname}}
              <div class="zro"></div>
              {{item1.visit_count}}次浏览
              <div class="zro"></div>
              最后一次编辑是{{item1.last_reply_at}}
              <div class="zro"></div>来自 分享
            </div>
            <div class="vae"></div>
            <div class="m-t2">{{item1.content}}</div>
          </div>
        </div>
      </div>
    </el-card>

  <DetsonB></DetsonB>

    <DetailsL :six="arr" :id="id"></DetailsL>

  
  </div>
</template>

<script>
import axios from "axios";
import DetailsL from "../components/details/DetailsL";
import DetsonB from "../components/details/DetsonB";
export default {
  name: "",
  props: {},
  components: {
    DetailsL,
    DetsonB
  },
  data() {
    return {
      arr: null,
      id: ""
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
    }
  },
  mounted() {
    this.gteData();

    this.id = this.$route.query.id;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

.box1 {
  width: 1400px;
}
.box-card {
  width: 1070px;
}
.allc {
  color: rgb(131, 131, 131);
  margin: 10px 0;
}
.zro {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgb(131, 131, 131);
  margin: 0 5px;
}
.vae {
  width: 100%;
  height: 1px;
  background: rgb(229, 229, 229);
}
.t1-text {
  font-size: 22px;
}
</style>