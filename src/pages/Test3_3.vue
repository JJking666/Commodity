<template>
  <div>
    <div class="head3">
      <router-link to="/home/test" class="linkTo">首页</router-link>
      <span style="font-size: 13px; font-weight: 400">
        > 用户管理 > 权限列表</span
      >
    </div>
    <el-card class="box-card">
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
          @click="openAdd"
          >添加商品</el-button
        >
      <template>
        <el-table :data="tableData" border style="width: 100%" stripe>
          <el-table-column type="index" label="#" width="60">
          </el-table-column>
          <el-table-column prop="name" label="商品名称" width="520">
          </el-table-column>
          <el-table-column prop="name" label="商品数量" width="100">
          </el-table-column>
          <el-table-column prop="name" label="创建时间" width="100">
          </el-table-column>
          <el-table-column prop="level" label="操作" width="180">
            <template slot-scope="scope">
              <el-tag style="margin-left:10px !important;" size="mini" type="danger" v-if="scope.row.level == 1">一级</el-tag>
              <el-tag style="margin-left:10px !important;" size="mini" v-else-if="scope.row.level == 3">三级</el-tag>
              <el-tag style="margin-left:10px !important;" size="mini" type="success" v-else>二级</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "Test3_3",
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
  methods: {
    openAdd() {
      this.$router.push('test4_1_1');
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
  width: fit-content;
  margin-top: 30px;
}

::v-deep .el-input{
  width: 300px;
  margin-top: 0px;
  margin-bottom: 20px;
}
.ebutton{
  margin-left: -399px;
}
</style>