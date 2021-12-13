import Vuex from 'vuex';
import Vue from 'vue';
import {nanoid} from 'nanoid';
//响应组件动作
Vue.use(Vuex);

const table3_1={
    namespaced: true,
    actions:{
        addji(context,value){
            if(context.state.sum%2)
                context.commit('AddJi',value);
        },
    },
    //用于操作数据
    mutations:{
       /* changeDialogShow(state,value){
            state.dialogVisible= !state.dialogVisible;
        },*/
        addNum(state,value){
            state.num++;
        }
    },
    //用于存储数据
    state :{
        num:666,
        tableData3_1:[
            {id:111,name:"大家电",truth:true,grade:1,children:[
                {id:121,name:"冰箱",truth:true,grade:2,children:[
                    {id:131,name:"格力",truth:true,grade:3},
                    {id:132,name:"哈曼",truth:true,grade:3},
                    {id:133,name:"海克斯",truth:true,grade:3},
                ]},
                {id:122,name:"电视",truth:true,grade:2,children:[
                    {id:134,name:"五彩",truth:true,grade:3},
                    {id:135,name:"红旗",truth:true,grade:3},
                    {id:136,name:"王牌",truth:true,grade:3},
                    {id:137,name:"三星",truth:true,grade:3},
                ]},
            ]},
            {id:211,name:"热门推荐",truth:true,grade:1,children:[
                {id:221,name:"橱柜",truth:true,grade:2},
                {id:222,name:"红木座椅",truth:true,grade:2},
                {id:223,name:"空调",truth:true,grade:2},
            ]},
            {id:311,name:"海外购",truth:true,grade:1,children:[
                {id:321,name:"马桶盖",truth:true,grade:2,children:[
                    {id:331,name:"无印良品",truth:true,grade:3},
                ]},
            ]},
        ],
        colData: [
            {
                label: '编号',
                prop: 'id',
                minWidth: '120px',
              },
            {
              label: '商品名称',
              prop: 'name',
              width: '210px',
            },
            {
              label: '是否有效',
              prop: 'truth',
              minWidth: '80px',
              type:'template',
              template:'truth'
            },
            {
                label: '等级',
                prop: 'grade',
                minWidth: '110px',
                type:'template',
                template:'grade'
              },
            {
                label: '操作',
                prop: '',
                minWidth: '150px',
                type:'template',
                template:'action'
            },
          ],
    }
};
export default new Vuex.Store({
    modules:{
        a:table3_1,
    }
})