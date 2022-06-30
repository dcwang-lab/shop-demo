<template>
  <div class="index-content">
    <div class="banner">
      <img v-for="(item, index) in imgList" :key="index" :src="item.filePath" v-show="index == imgIndex">
      <div class="banner-circle">
        <ul>
          <li v-for="(item, index) in imgList" :key="index" :class="index == imgIndex ? 'selected' : ''"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { listBanners } from 'api/resource/resource';
export default {
  name: 'Banner',
  data() {
    return {
      imgIndex: 0,
      imgList: [],
      queryParam: {}
    }
  },
  created() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      listBanners(this.queryParam).then(res => {
        this.imgList = res.data;
      });
    },
    fun() {
      setInterval(this.play, 5000);
    },
    play() {
      this.imgIndex++;
      if (this.imgIndex == this.imgList.length) {
        this.imgIndex = 0;
      }
    }
  },
  mounted() {
    this.fun();
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
.index-content .banner {
  position: relative;
}
.index-content .banner .banner-circle {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  color: #fff;
}
.index-content .banner .banner-circle li {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
}
.index-content .banner .banner-circle ul {
  text-align: center;
}
.index-content .banner .banner-circle .selected {
  background: rgba(0, 0, 0, 0.8);
}
.index-content .banner img {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
