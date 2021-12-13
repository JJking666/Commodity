<template>
  <div>
    <div class="head2">
      <router-link to="/home/test" class="linkTo">首页</router-link>
      <span style="font-size: 13px; font-weight: 400">
        > 用户管理 > 角色列表</span
      >
    </div>
    <el-card class="box-card">
      <template>
        <el-table :data="persons" border style="width: 100%" stripe>
          <el-table-column type="expand" label="" width="30" v-if="look">
            <template slot-scope="" >
              <el-row :class="['rowBottom',i==0?'rowTop':'','vcenter']" v-for="(item,i) in treeData" :key="item.name">
                <el-col :span="6">
                  <el-tag size="middle" type="" closable @close="sureClose(treeData,i)">{{ item.name }}</el-tag>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <el-col :span="18">
                  <el-row :class="[i==0?'':'rowTop','vcenter']" v-for="(sItem,i) in item.children" :key="sItem.name">
                    <el-col :span="8">
                      <el-tag size="middle" type="success" closable @close="sureClose(item.children,i)">{{ sItem.name }}</el-tag>
                      <i class="el-icon-caret-right"></i>
                    </el-col>
                    <el-col :span="16">
                      <el-tag
                        v-for="(TItem,i) in sItem.children"
                        :key="i"
                        size="middle"
                        type="warning"
                        closable @close="sureClose(sItem.children,i)"
                        >{{ TItem.name }}</el-tag
                      >
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column type="index" label="#" width="60"> </el-table-column>
          <el-table-column prop="name" label="角色名称" width="300">
          </el-table-column>
          <el-table-column prop="describe" label="角色权限" width="320">
          </el-table-column>
          <el-table-column label="操作" width="280">
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
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Test2_1",
  data() {
    return {
      look:true,
      persons: [
        {
          name: "管理人员",
          describe: "管理公司各个部门及人员",
        },
        {
          name: "项目经理",
          describe: "负责本部门项目及情况",
        },
        {
          name: "测试角色",
          describe: "对项目或app进行测试",
        },
        {
          name: "打工仔",
          describe: "每日摸鱼混吃等死",
        },
      ],
      treeData: [
        {
          name: "权限管理",
          level: 1,
          path: "rights",
          children: [
            {
              name: "角色列表",
              level: 2,
              path: "rights",
              children: [
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
              ],
            },
            {
              name: "权限列表",
              level: 3,
              path: "rights",
              children: [
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
              ],
            },
          ],
        },
        {
          name: "商品管理",
          level: 1,
          path: "goods",
          children: [
            {
              name: "用户管理",
              level: 2,
              path: "goods",
              children: [
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
              ],
            },
          ],
        },
        {
          name: "订单管理",
          level: 1,
          path: "orders",
          children: [
            {
              name: "商品列表",
              level: 2,
              path: "orders",
              children: [
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                }
              ],
            },
            {
              name: "分类参数",
              level: 3,
              path: "orders",
              children: [
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
              ],
            },
            {
              name: "商品分类",
              level: 3,
              path: "orders",
              children: [
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
                {
                  name: "用户管理",
                  level: 2,
                  path: "goods",
                },
              ],
            },
          ],
        },
      ],
      look:true
    };
  },
  watch: {
    'treeData':{
      deep: true,
      handler: function(newV,oldV) {
        this.treeData=newV;
        //console.log(newV,2,oldV,1);
      }
    }
  },
  methods: {
    tagClose(data,i){
      data.splice(i,1);
      this.$nextTick(function () {
      console.log("DOM 更新了")
      this.look=false;
      setTimeout(() => {
        this.look=true;
      }, 0);
    })
    },
    sureClose(data,i){
      this.$confirm('此操作将删除该权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.tagClose(data,i);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }
  }
};
</script>

<style>
.head2 {
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
.el-tag{
  margin:7px;
}
.rowTop{
  border-top: 1px solid rgb(218, 215, 215);
}
.rowBottom{
  border-bottom: 1px solid rgb(224, 222, 222);
}
.vcenter{
  display:flex;
  align-items:center;
}

.box-card {
  width: fit-content;
  margin-top: 30px;
}
</style>