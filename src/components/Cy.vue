<template>
  <div id="input">
    <h3>计算暗示我电极片方法指数</h3>
    <h1>{{sum}}</h1>
    <div id="math">
      <select v-model="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="add(n)">+</button>
      <button @click="jian(n)">-</button>
      <button @click="addji(n)">当前求和值为奇再加哦</button>
      <button @click="addwait(n)">等等加哦</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name:"Cy",
  data(){
    return{
      n:1
    }
  },
  computed:{
    ...mapState('a',{sum:'sum'})
  },
  props:['play'],
  methods: {
    ...mapMutations('a',{add:'Add',jian:'Jian'}),

    ...mapActions('a',{addji:'addji',addwait:'addwait'})
  },
}
</script>

<style>
#input {
    font-size: 28px;
    width: 400px !important;
    height: 40px ;
    background-color: rgb(150, 129, 248);
    display: block;
    margin-left: 0px !important;
    padding-top:0px;
    padding-bottom:0px;
}
#input h1{
  margin:5px auto !important;
}
#math {
  display: inline-block;
  max-width: inherit !important;
  width: 100% !important;
  height: fit-content !important;
  margin: 5px 0px!important;
  padding: 0px 0px!important;
  border: 0px ;
}
#math select{
  display: inline-block;
}

#math button{
  margin-left: 5px;
  display: inline-block;
}
</style>