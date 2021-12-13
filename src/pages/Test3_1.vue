<template>
  <div>
    <div class="head4">
      <router-link to="/home/test" class="linkTo">首页</router-link>
      <span style="font-size: 13px; font-weight: 400">
        > 用户管理 > 商品列表</span>
    </div>
    <el-card class="box-card">
      <el-button id="add" type="primary" @click="changeDialogShow" >添加分类</el-button>
      <el-dialog
        center
        title="提示"
        :visible.sync="dialogVisible"
        width="37%"
        :before-close="handleClose"
        >
        <el-form :model="numberValidateForm" ref="numberValidateForm"  label-width="50px" class="demo-ruleForm">
          <el-form-item  label="商品分类" prop="addData" label-width="90px"
            :rules="[
              { required: true, message: '分类不能为空'},
            ]"
          >
            <el-input class="digBlur" type="age" style="width:260px;margin:0px;margin-left:15px;"
             v-model="numberValidateForm.addData"></el-input>
          </el-form-item>
          <el-form-item label="请选择"  label-width="90px">
            <div class="block">
              <el-cascader
                style="width:90px"
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover',checkStrictly: true}"
                @change="handleChange" visible-change="visChange"></el-cascader>
            </div>
          </el-form-item>
          <el-form-item class="subButton">
            <el-button  type="primary" @click="submitForm()" >提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <tree-table
        :stripe="true"
        :border="true"
        :data="tableData3_1"
        :columns="colData"
        :tree-type="true"
        :expand-type="false"
        :selection-type="false"
      >
      <template slot="truth" slot-scope="scope">
        <i :class="scope.row.truth===true?'el-icon-success':'el-icon-error'"></i>
      </template>
      <template slot="grade" slot-scope="scope">
        <el-tag style="margin-left:10px !important;" size="middle" type="danger" v-if="scope.row.grade == 1">一级</el-tag>
        <el-tag style="margin-left:10px !important;" size="middle" v-else-if="scope.row.grade == 3">三级</el-tag>
        <el-tag style="margin-left:10px !important;" size="middle" type="success" v-else>二级</el-tag>
      </template>
      <template slot="action" slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-delete" @click="deleteShowBtn(scope.row.id)"></el-button>
      </template>
      </tree-table>
      <el-dialog
        title="提示"
        :visible.sync="digVisible"
        width="28%"
        :before-close="handleClose2">
        <span>您是否删除该商品？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="digVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteBtn">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import { mapState } from "vuex";
import {mapMutations,mapActions} from 'vuex'
export default {
  name: "Test3_1",
  data() {
    return {
      value: [],
      deleteId:"",
      digVisible: false,
      dialogVisible: false,
      numberValidateForm: {
            addData:""
      },
      options: [
            {value:111,label:"大家电",children:[
                {value:121,label:"冰箱",children:[
                    {value:131,label:"格力",disabled: true,},
                    {value:132,label:"哈曼",disabled: true},
                    {value:133,label:"海克斯",disabled: true},
                ]},
                {value:122,label:"电视",children:[
                    {value:134,label:"五彩",disabled: true},
                    {value:135,label:"红旗",disabled: true},
                    {value:136,label:"王牌",disabled: true},
                    {value:137,label:"三星",disabled: true},
                ]},
            ]},
            {value:211,label:"热门推荐",children:[
                {value:221,label:"橱柜"},
                {value:222,label:"红木座椅"},
                {value:223,label:"空调"},
            ]},
            {value:311,label:"海外购",children:[
                {value:321,label:"马桶盖",children:[
                    {value:331,label:"无印良品",disabled: true},
                ]},
            ]},
        ],
    };
  },
  computed: {
    ...mapState("a", ["tableData3_1","num", "colData"]),
  },
 methods: {
   ...mapMutations("a", {addNum:"addNum"}),
   deleteShowBtn(id){
     this.digVisible =true;
     console.log(this.digVisible);
     this.deleteId=id;
   },
   deleteBtn(){
     this.deleteData(this.deleteId);
     this.digVisible =false;
   },
   handleClose2(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            console.log(done);
            done();
          })
          .catch(_ => {});
    },
   handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.changeDialogShow();
            //done();
          })
          .catch(_ => {});
      },
      submitForm() {
        this.$refs.numberValidateForm.validate((valid) => {
          if (valid) {
            alert('submit!');
            this.numberValidateForm.age='';
            this.dialogVisible = false;
            this.addData(this.value,this.numberValidateForm.addData);
            this.resetForm();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.numberValidateForm.resetFields();
      },
      handleChange(value) {
        /*
        const a=document.querySelector('.digBlur').children[0];
        a.style.color = 'red';
        a.focus();*/
      },
      changeDialogShow(state,value){
        this.dialogVisible= !this.dialogVisible;
      },
      addData(value,add){
        let n=0;
        let Data=[];
        if(this.value.length==0){
          this.tableData3_1.push({id:this.num,name:add,truth:true,grade:1,children:[]});
          this.options.push({value:this.num,label:add,children:[]});
          this.addNum();
          console.log(this.options);
          return;
        }
        test1:
        for(let i of this.tableData3_1){
            if(i.id==value[n]){
              n++;
              if(n==value.length){
                Data=i;
                let k={id:this.num,name:add,truth:true,grade:2,children:[]};
                Data.children.push(k);
                this.addNum();
                break test1;
              }
              for(let j of i.children){
                  if(j.id==value[n]){
                    n++;
                    if(n==value.length){
                      Data=j;
                      let k={id:this.num,name:add,truth:true,grade:3};
                      Data.children.push(k);
                      this.addNum();
                      break test1;
                    }
                }
              }
            }
        }
        n=0;
        for(let i of this.options){
          console.log(i.value,value[n]);
          if(i.value==value[n]){
            n++;
            if(n==value.length){
              i.children.push({value:this.num,label:add,children:[]});
              this.addNum();
              console.log(this.options);
              return;
            }
            for(let j of i.children){
              n++;
              if(n==value.length){
                j.children.push({value:this.num,label:add,disabled:true});
                this.addNum();
                console.log(this.options);
                return;
              }
            }
          }
        }
      },
      visChange(){
        /*console.log(1);
        const a=document.querySelector('.el-cascader-panel');
        a.style.display=="none"?'block':'none';*/
      },
      deleteData(id){
        let item=this.tableData3_1,n=0;
        let item2=this.options;
        test1:
        for(let i in item){
          if(item[i].id==id){
            item.splice(i,1);
            break test1;
          }
          for(let j in item[i].children){
            if(item[i].children[j].id==id){
              item[i].children.splice(j,1);
              break test1;
            }
            for(let k in item[i].children[j].children){
              if(item[i].children[j].children[k].id==id){
                item[i].children[j].children.splice(k,1);
                break test1;
              }
            }
          }
        }
        for(let i in item2){
          if(item2[i].value==id){
            item2.splice(i,1);
            return;
          }
          for(let j in item2[i].children){
            if(item2[i].children[j].value==id){
              item2[i].children.splice(j,1);
              return;
            }
            for(let k in item2[i].children[j].children){
              if(item2[i].children[j].children[k].value==id){
                item2[i].children[j].children.splice(k,1);
                return;
              }
            }
          }
        }
      }
    },
    updated(){
      /*let input =document.querySelector(".el-cascader").children[0];
      input.style.margin="0px";
      input.style.marginLeft="15px";
      input.style.width="260px";*/
    }
};
</script>

<style scoped>
.head4 {
  margin-top: -15px;
  margin-left: 5px;
  margin-bottom: -20px;
}
.linkTo {
  font-size: 14px;
  margin-left: -880px;
  margin-bottom: 30px;
  color: rgb(44, 46, 46);
  text-decoration: none;
  font-weight: 800;
}

.box-card {
  width: fit-content;
  margin-top: 30px;
  position: relative;
}
#add{
  float: left;
  margin-top: -11px;
  margin-bottom: 10px;
  left: 100px;
}
.subButton /deep/.el-button:nth-child(1) {
  margin-top: 10px;
  margin-left: 80px;
}
.el-cascader /deep/ .el-input{
  margin: 0px;
  margin-left:15px;
  width: 260px;
}


</style>