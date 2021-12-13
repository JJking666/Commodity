<template>
  <div class="head3">
    <router-link to="/home/test" class="linkTo">首页</router-link>
    <span style="font-size: 13px; font-weight: 400">
      > 用户管理 > 分类参数</span
    >
    <el-card class="box-card">
      <el-alert
        title="注意：只允许为三级分类设置相关属性"
        type="info"
        style="margin-bottom: 10px; margin-top: -5px; width: 100%"
        show-icon
      >
      </el-alert>
      <el-steps :active="nowActive-0" align-center finish-status="success">
        <el-step
          title="基本信息"
        ></el-step>
        <el-step
          title="商品参数"
        ></el-step>
        <el-step
          title="商品属性"
        ></el-step>
        <el-step
          title="商品图片"
        ></el-step>
        <el-step
          title="商品内容"
        ></el-step>
        <el-step
          title="完成"
        ></el-step>
      </el-steps>
      <template>
        <el-tabs :tab-position="tabPosition" style="height: fit-content;margin-top:60px" v-model="nowActive">
          <el-tab-pane label="基本信息" style="" name="0">
            <div style="margin: 20px;"></div>
            <el-form  label-width="80px" :model="shopData" :rules="rules">
              <el-form-item label="商品名称" prop="name" style="margin-top:-20px" required>
                <el-input v-model="shopData.name"></el-input>
              </el-form-item>
              <el-form-item label="商品价格" prop="price" required>
                <el-input v-model="shopData.price"></el-input>
              </el-form-item>
              <el-form-item label="商品重量" prop="weight" required>
                <el-input v-model="shopData.weight"></el-input>
              </el-form-item>
              <el-form-item label="商品数量" prop="num" required>
                <el-input v-model="shopData.num"></el-input>
              </el-form-item>
              <el-form-item label="商品分类"  required>
                <el-cascader style="width:450px"
                  size="small"
                  v-model="value"
                  :options="options"
                  :props="{ expandTrigger: 'hover' }">
                </el-cascader>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <h3>版式</h3>
            <div style="margin-top: 20px">
              <el-checkbox v-model="checked[0]" label="人工智能55寸4k观影曲面" border size="medium"></el-checkbox>
              <el-checkbox v-model="checked[1]" label="30核HDR55寸4k超薄曲面" border size="medium"></el-checkbox>
              <el-checkbox v-model="checked[2]" label="3060P超核运转" border size="medium"></el-checkbox>
              <el-checkbox v-model="checked[3]" label="HD钛合金影式机甲" border size="medium"></el-checkbox>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商品属性" name="2">角色管理</el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <quill-editor v-model="content"></quill-editor>
          </el-tab-pane>
        </el-tabs>
      </template>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <img :src="previewPath" alt="" style="width:100%;">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Test4_1_1",
  data() {
      return {
        previewPath: "",
        value:'',
        content: "",
        nowActive:'0',
        tabPosition: 'left',
        labelPosition: 'right',
        dialogVisible: false,
        checked:[true,true,true,true],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        shopData:{
          name:'1',
          price: '2',
          weight: '3',
          num: '4',
          form:''
        },
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
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          price: [
            { type: 'data',required: true, message: '请输入商品价格', trigger: 'blur' }
          ],
          weight: [
            { type: 'data', required: true, message: '请输入商品数量', trigger: 'blur' }
          ],
          num: [
            { type: 'data', required: true, message: '请输入商品分类', trigger: 'blur' }
          ]}
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        this.previewPath = file.url;
        this.dialogVisible=true;
      },
      handleClose(done) {
        done();
      }
    }
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
  width: 98%;
  margin-top: 10px;
}

::v-deep .el-input{
  margin-top:0px;
}
::v-deep .el-form-item__content{
  width: 500px;
}
.el-form-item{
  margin-top: 40px;
}
</style>