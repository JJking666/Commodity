<template>
  <div>
    <div class="head1">
      <router-link to="/home/test" class="linkTo">首页</router-link>
      <span style="font-size: 13px; font-weight: 400">
        > 用户管理 > 用户列表</span
      >
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-col :span="4" class="ecol">
          <el-autocomplete
            class="inline-input searchInput"
            v-model="qurryName"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="handleCurrentChange(1)"
            ></el-button>
          </el-autocomplete>
        </el-col>
        <el-button
          class="ebutton"
          type="primary"
          size="middle"
          @click="dialogVisible = true"
          >添加用户</el-button
        >
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
          @close="dialogClose"
        >
          <el-form
            :model="addUserData"
            ref="ValidateForm"
            label-width="70px"
            class="demo-ruleForm"
            :rules="Rules"
          >
            <el-form-item label="用户名" prop="name">
              <el-input class="addInput" v-model="addUserData.name"> </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                class="addInput"
                v-model="addUserData.password"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input class="addInput" v-model="addUserData.phone">
              </el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input class="addInput" v-model="addUserData.email">
              </el-input>
            </el-form-item>
            <el-form-item class="subForm">
              <el-button type="primary" @click="submitForm('ValidateForm')" class="subButton"
                >提交</el-button
              >
              <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
      <el-table
        :data="userData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        border
      >
        <el-table-column type="index" width="80" label="#"></el-table-column>
        <el-table-column prop="name" label="姓名" width="130"></el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="130"
        ></el-table-column>
        <el-table-column prop="date" label="日期" width="130"></el-table-column>
        <el-table-column
          prop="person"
          label="角色"
          width="130"
        ></el-table-column>
        <el-table-column prop="value" label="状态" width="130">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.value"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="操作" width="230">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-share"
            ></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-delete"
              @click="open(scope.row.name)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="currentPageSize"
          layout="total, prev, pager, next,jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Test1_1",
  data() {
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9])+(\.[a-zA-Z0-9])+/;
      console.log("emial");
      if (regEmail.test(value)) {
        return cb();
      }

      cb(new Error("请输入一个正确的邮箱"));
    };
    var checkPhone = (rule, value, cb) => {
      const regPhone =
        /^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      console.log("phone");
      if (regPhone.test(value)) {
        return cb();
      }
      cb(new Error("请输入一个合法的手机号"));
    };
    return {
      total: 0,
      value: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          phone: "13124523055",
          person: "测试角色",
          value: true,
        },
        {
          date: "2016-05-04",
          name: "蔡小艺",
          phone: "13323532055",
          person: "管理人员",
          value: true,
        },
        {
          date: "2016-05-01",
          name: "马小濠",
          phone: "13674322251",
          person: "项目经理",
          value: true,
        },
        {
          date: "2016-05-03",
          name: "二狗子",
          phone: "13674322251",
          person: "打工仔",
          value: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎!",
          phone: "13124523055",
          person: "测试角色",
          value: true,
        },
        {
          date: "2016-05-04",
          name: "蔡小艺!",
          phone: "13323532055",
          person: "管理人员",
          value: true,
        },
        {
          date: "2016-05-01",
          name: "马小濠!",
          phone: "13121303055",
          person: "项目经理",
          value: true,
        },
        {
          date: "2016-05-03",
          name: "二狗子!",
          phone: "13674322251",
          person: "打工仔",
          value: false,
        },
        {
          date: "2016-05-02",
          name: "@王小虎",
          phone: "13124523055",
          person: "测试角色",
          value: true,
        },
        {
          date: "2016-05-04",
          name: "@蔡小艺",
          phone: "13323532055",
          person: "管理人员",
          value: true,
        },
        {
          date: "2016-05-01",
          name: "@马小濠",
          phone: "13121303055",
          person: "项目经理",
          value: true,
        },
        {
          date: "2016-05-03",
          name: "@二狗子",
          phone: "13674322251",
          person: "打工仔",
          value: false,
        },
        {
          date: "2016-05-02",
          name: "#王小虎",
          phone: "13124523055",
          person: "测试角色",
          value: true,
        },
        {
          date: "2016-05-04",
          name: "#蔡小艺",
          phone: "13323532055",
          person: "管理人员",
          value: true,
        },
        {
          date: "2016-05-01",
          name: "#马小濠",
          phone: "13121303055",
          person: "项目经理",
          value: true,
        },
        {
          date: "2016-05-03",
          name: "#二狗子",
          phone: "13674322251",
          person: "打工仔",
          value: false,
        },
      ],
      userData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          phone: "13124523055",
          person: "测试角色",
          value: true,
        },
        {
          date: "2016-05-04",
          name: "蔡小艺",
          phone: "13323532055",
          person: "管理人员",
          value: true,
        },
        {
          date: "2016-05-01",
          name: "马小濠",
          phone: "13121303055",
          person: "项目经理",
          value: true,
        },
        {
          date: "2016-05-03",
          name: "二狗子",
          phone: "13674322251",
          person: "打工仔",
          value: false,
        },
      ],
      addUserData: {
        name: "",
        phone: "",
        email: "",
        password: "",
      },
      Rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 6, message: "用户名长度必须在3-6", trigger: "blur" },
        ],

        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],

        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { validate: checkEmail, trigger: "blur" },
        ],

        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码长度必须在6-15", trigger: "blur" },
        ],
      },
      deleteDialog:false,
      restaurants: [],
      state1: "21",
      state2: "",
      qurryName: "",
      currentPage1: 1,
      currentPageSize: 4,
      dialogVisible: false,
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        {
          date: "2016-05-02",
          value: "王小虎",
          phone: "13124523055",
          person: "测试角色",
        },
        {
          date: "2016-05-04",
          value: "蔡小艺",
          phone: "13323532055",
          person: "管理人员",
        },
        {
          date: "2016-05-01",
          value: "马小濠",
          phone: "13121303055",
          person: "项目经理",
        },
        {
          date: "2016-05-03",
          value: "二狗子",
          phone: "13674322251",
          person: "打工仔",
        },
      ];
    },
    handleSelect(item) {
      /*let selectUser=[];
      for(const Data of this.tableData) {
        if(Data.name.includes(this.qurryName)){
          selectUser.push(Data);
        }
      }
      handleCurrentChange(1,selectUser);
      console.log(selectUser);*/
    },
    tableRowClassName({ row }) {
      if (row.person == "测试角色") return "warning-row";
      else if (row.person == "管理人员") return "success-row";
      else if (row.person == "项目经理") return "danger-row";
      else return "info-row";
    },
    handleCurrentChange(val) {
      let selectUser = [];
      for (const Data of this.tableData) {
        if (Data.name.includes(this.qurryName)) {
          selectUser.push(Data);
        }
      }
      this.total = selectUser.length;
      this.currentPage1 = val;
      let currentDate = [];
      let num = 0;
      for (const Date of selectUser) {
        if (
          num >= this.currentPageSize * (this.currentPage1 - 1) &&
          num < this.currentPageSize * this.currentPage1
        ) {
          currentDate.push(Date);
        }
        num++;
      }
      this.userData = currentDate;
      window.sessionStorage.setItem("qurryName", this.qurryName);
      window.sessionStorage.setItem("userData", this.userData);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      let addData = {};
      const time = new Date();
      addData.date =
        time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
      addData.person = "打工仔";
      addData.name = this.addUserData.name;
      addData.phone = this.addUserData.phone;
      addData.value = Math.round(Math.random()) ? true : false;
      this.tableData.push(addData);
      this.handleCurrentChange(1);
      this.dialogVisible = false;
      const Data = JSON.stringify(this.tableData);
      console.log(Data);
      window.sessionStorage.setItem("tableData", Data);
    },
    resetForm() {
      this.$refs.ValidateForm.resetFields();
    },
    dialogClose() {
      this.$refs.ValidateForm.resetFields();
    },
    deleteUser(name1){
      for(const index in this.tableData){
        if(this.tableData[index].name == name1){
          this.tableData.splice(index, 1);
          this.handleCurrentChange(1);
          return;
        }
      }
    },
    open(name1) {
        this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.deleteUser(name1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
  },
  computed: {},
  created() {
    if (window.sessionStorage.getItem("qurryName") == null)
      window.sessionStorage.setItem("qurryName", "");
    this.qurryName = window.sessionStorage.getItem("qurryName");
    this.total = this.tableData.length;
    this.handleCurrentChange(1);
    if (!window.sessionStorage.getItem("tableData")) {
      const Data = JSON.stringify(this.tableData);
      window.sessionStorage.setItem("tableData", Data);
    } else {
      const Data1 = JSON.parse(window.sessionStorage.getItem("tableData"));
      this.tableData = Data1;
      this.handleCurrentChange(1);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    let span=document.querySelector(".el-pagination__jump");
    span.style.marginTop = '-30px';
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.head1 {
  margin-top: -15px;
  margin-left: 5px;
  margin-bottom: -20px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: fit-content;
  margin-top: 30px;
}
.linkTo {
  font-size: 14px;
  margin-left: -880px;
  margin-bottom: 30px;
  color: rgb(44, 46, 46);
  text-decoration: none;
  font-weight: 800;
}
.ebutton {
  display: inline-block;
  margin-left: -80px;
  margin-top: 30px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-table .info-row {
  background: #f7faf5b7;
}
.el-table .danger-row {
  background: #f8bbbb;
}
.head1 {
  margin-top: -15px;
  margin-left: 5px;
  margin-bottom: -20px;
}
.clearfix {
  margin-top: -30px;
}
.el-pagination {
  margin-top: 15px;
}
.el-pagination__jump {
    margin-top: -30px!important;
}
.el-dialog__body {
  padding-bottom: 6px;
  padding-left: 10px;
}
.el-form-item__label {
  margin: 0px !important;
  width: 70px !important;
  margin-left: 10px !important;
}
.el-form-item__content {
  height: 30px !important;
  margin: 0px !important;
}
.el-input {
  margin-top: 30px;
  width: 310px;
}
.addInput {
  margin: 0px;
  margin-left: 0px;
  width: 260px;
  margin-right: 10px;
}
.subButton{
  margin-left: 30px;
}
.subForm{
  display: flex;
  vertical-align:center;
}
</style>