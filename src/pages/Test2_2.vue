<template>
  <div>
    <div class="head3">
      <router-link to="/home/test" class="linkTo">首页</router-link>
      <span style="font-size: 13px; font-weight: 400">
        > 用户管理 > 权限列表</span
      >
    </div>
    <el-card class="box-card">
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
              <el-tag style="margin-left:10px !important;" size="middle" type="danger" v-if="scope.row.level == 1">一级</el-tag>
              <el-tag style="margin-left:10px !important;" size="middle" v-else-if="scope.row.level == 3">三级</el-tag>
              <el-tag style="margin-left:10px !important;" size="middle" type="success" v-else>二级</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "Test2_2",
  data() {
    return {
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
        },

        {
          name: "商品管理",
          level: 1,
          path: "goods",
        },
        {
          name: "用户管理",
          level: 2,
          path: "goods",
        },

        {
          name: "订单管理",
          level: 1,
          path: "orders",
        },
        {
          name: "商品列表",
          level: 2,
          path: "orders",
        },
        {
          name: "分类参数",
          level: 3,
          path: "orders",
        },
        {
          name: "商品分类",
          level: 3,
          path: "orders",
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
            },
            {
              name: "权限列表",
              level: 3,
              path: "rights",
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
            },
            {
              name: "分类参数",
              level: 3,
              path: "orders",
            },
            {
              name: "商品分类",
              level: 3,
              path: "orders",
            },
          ],
        },
      ],
    };
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
</style>