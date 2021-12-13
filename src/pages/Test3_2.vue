<template>
  <div>
    <div class="head3">
      <router-link to="/home/test" class="linkTo">首页</router-link>
      <span style="font-size: 13px; font-weight: 400">
        > 用户管理 > 分类参数</span
      >
    </div>
    <el-card class="box-card">
      <el-alert title="注意：只允许为三级分类设置相关属性"
        type="warning" style="margin-bottom: 10px; margin-top: -5px" show-icon>
      </el-alert>
      <div class="block">
        <span class="demonstration">选择商品分类</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
      </div>
      <template>
        <el-tabs v-model="activeName" style="font-size: 11px">
          <el-tab-pane label="动态参数" name="first">
            <template>
              <el-table :data="tableData" border style="width: 100%" stripe>
                <el-table-column type="expand" label="" width="50" v-if="look">
                  <template>
                    <el-tag
                      :key="tag"
                      v-for="tag in dynamicTags"
                      closable
                      :disable-transitions="false"
                      @close="handleClose()">
                      {{tag}}
                    </el-tag>
                    <el-input
                      class="input-new-tag"
                      v-if="inputVisible"
                      v-model="inputValue"
                      ref="saveTagInput"
                      size="small"
                      @keyup.enter.native="handleInputConfirm"
                      @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-if="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                  </template>
                </el-table-column>
                <el-table-column type="index" label="#" width="50">
                </el-table-column>
                <el-table-column prop="name" label="参数名称" width="520">
                </el-table-column>
                <el-table-column prop="level" label="操作" width="360">
                  <template slot-scope="">
                    <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
                    <el-button type="primary" size="mini" icon="el-icon-delete"></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            </el-tab-pane>
          <el-tab-pane label="静态属性" name="second">
            <template>
              <el-table :data="tableData" border style="width: 100%" stripe>
                <el-table-column type="index" label="#" width="160">
                </el-table-column>
                <el-table-column prop="name" label="权限名称" width="300">
                </el-table-column>
                <el-table-column prop="path" label="权限路径" width="250">
                </el-table-column>
                <el-table-column prop="level" label="权限等级" width="280">
                  <template slot-scope="scope">
                    <el-tag style="margin-left: 10px !important"
                    size="middle" type="danger" v-if="scope.row.level == 1"
                    >一级</el-tag>
                    <el-tag style="margin-left: 10px !important"
                      size="middle" v-else-if="scope.row.level == 3">三级</el-tag>
                    <el-tag style="margin-left: 10px !important"
                      size="middle" type="success" v-else>二级</el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            </el-tab-pane>
        </el-tabs>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Test3_2",
  data() {
    return {
      value:"",
      look:true,
      dynamicTags: ['标签一', '标签二', ' 标签三'],
      inputVisible: false,
      inputValue:'2',
      activeName: "first",
      tableData: [
        {
          name: "权限管理",
          level: 1,
          path: "rights",
        },
        {
          name: "角色列表",
          level: 2,
          path: "rights",
        },
        {
          name: "权限列表",
          level: 3,
          path: "rights",
        }
      ],
      options: [
            {value:111,label:"大家电",children:[
                {value:121,label:"冰箱",children:[
                    {value:131,label:"格力"},
                    {value:132,label:"哈曼"},
                    {value:133,label:"海克斯"},
                ]},
                {value:122,label:"电视",children:[
                    {value:134,label:"五彩"},
                    {value:135,label:"红旗"},
                    {value:136,label:"王牌"},
                    {value:137,label:"三星"},
                ]},
            ]},
            {value:211,label:"热门推荐",children:[
                {value:221,label:"橱柜"},
                {value:222,label:"红木座椅"},
                {value:223,label:"空调"},
            ]},
            {value:311,label:"海外购",children:[
                {value:321,label:"马桶盖",children:[
                    {value:331,label:"无印良品"},
                ]},
            ]},
        ],
    };
  },
  methods:{
    change (e) {
      console.log(1)
      this.$forceUpdate()
    },
    handleClose(tag) {
        console.log(2)
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        this.look=false;
        setTimeout(()=>{this.look=true},0);
      },

      showInput() {
        console.log(3)
        this.inputVisible = true;
        /*this.$nextTick(_ => {
          this.look=false;
          setTimeout(()=>{this.look=true},0);
          setTimeout(()=>{this.$refs.saveTagInput.$refs.input.focus()},1);
        });*/
      },

      handleInputConfirm() {
        console.log(4)
        /*let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
        this.look=false;
        setTimeout(()=>{this.look=true},0);*/
      }
  },
  mounted() {
    const a1 = document.querySelector(".el-tabs__nav");
    console.log(a1.children);
  },
};
</script>

<style scoped>
.head3 {
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
}
::v-deep .el-tabs__item {
  font-size: 13px;
}
.demonstration {
  margin-left: -580px;
  font-size:14px;
}
.el-cascader{
  margin-top:-30px;
  margin-left: 10px;
}
::v-deep .el-input{
  width:300px;
}
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
<style>
.el-table__expanded-cell{
    padding:10px !important;
  }
.input-new-tag[data-v-23d77660] {
    margin-top: 0px;
}
</style>