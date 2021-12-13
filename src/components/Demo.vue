<template>
  <el-carousel height="100vh" direction="vertical" :autoplay="false" ref="carousel">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data(){
        return {initialIndex:1}
    },
    mounted(){
     //监听鼠标滚动事件
    window.addEventListener('mousewheel',this.handleScroll);
 },
    methods: {
        setActiveItem(index) {  //index为走马灯当前页码
            let nextIndex = index ++;
            this.$refs.carousel.setActiveItem(nextIndex)
        },
        handleScroll(e){
            let direction = e.deltaY > 0 ? 'down':'up';  //deltaY为正则滚轮向下，为负滚轮向上
            if(direction=='down' && e.deltaY >= 125){ //125为用户一次滚动鼠标的wheelDelta的值
                if(this.initialIndex >= 3){
                    this.initialIndex = 3
                }else{
                    this.initialIndex += 1;
                    this.setActiveItem(this.initialIndex)
                }
            }
            if(direction=='up' && e.deltaY <= -125){
                if(this.initialIndex <= 0){
                    this.initialIndex = 0;
                    // this.setActiveItem(0)
                }else{
                    this.initialIndex -= 1;
                    this.setActiveItem(this.initialIndex)
                }
            }
        },
    }
}
</script>

<style>
    .el-carousel{
        width:100vw !important;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>