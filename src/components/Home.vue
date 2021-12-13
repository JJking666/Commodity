<template>
  <div style="background-color: white">
    <el-container>
      <el-header>
        <i class="el-icon-platform-eleme"></i>
        <h2>Hello World</h2>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color:#545c64">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                unique-opened
                style="max-width:200px;"
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#fdd04b"
                router
              >
                <el-submenu
                  :index="item.id"
                  v-for="item in indexList"
                  :key="item.id"
                >
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                  </template>
                  <el-menu-item
                    :index="'' + Sitem.path"
                    v-for="Sitem in item.children"
                    :key="Sitem.id"
                    @click="changeIndex(Sitem.path)"
                  >
                    <template slot="title">
                      <i class="submenu2 el-icon-s-shop"></i>
                      <span class="submenu1">{{ Sitem.name }}</span>
                    </template>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main style="color: black">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style  scoped>
.el-header {
  padding: 0px;
  background-color: rgb(13, 48, 54);

}
.el-header> i {
    display: inline-block;
    margin: 0px;
    margin-left: -1010px;
    margin-top: 23px;
    transform: scale(3);
  }
  .el-header> h2 {
    margin: 0px;
    margin-left: 20px;
    display: inline-block;
  }
.el-main {
  background-color: rgb(219, 236, 243);
}
.el-footer {
  border-collapse: grey;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: 0px solid;
}
.el-submenu {
  margin-left: -70px;
}
.submenu2 {
  margin-left: 100px;
  margin-right: 5px;
}
.submenu1 {
  font-size: 13px;
  text-decoration: none;
}
.submenu1:link {
  color: red;
}
.el-menu-item {
  margin-left: -70px;
}
.index_one {
  margin-left: 60px;
}
.index_two {
  margin-left: 130px;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "",
      indexList: [
        {
          id: "101",
          name: "商品管理",
          icon: "el-icon-s-tools",
          path: "rigths",
          children: [{ id: "200", name: "用户列表", path: "/home/test1_1" }],
        },
        {
          id: "102",
          name: "权限管理",
          icon: "el-icon-s-goods",
          path: "goods",
          children: [
            { id: "202", name: "角色列表", path: "/home/test2_1" },
            { id: "201", name: "权限列表", path: "/home/test2_2" },
          ],
        },
        {
          id: "103",
          name: "订单管理",
          icon: "el-icon-s-order",
          path: "orders",
          children: [
            { id: "203", name: "商品列表", path: "/home/test3_1" },
            { id: "204", name: "分类参数", path: "/home/test3_2" },
            { id: "205", name: "商品分类", path: "/home/test3_3" },
          ],
        },
        {
          id: "104",
          name: "数据统计",
          icon: "el-icon-s-platform",
          path: "reports",
          children: [{ id: "209", name: "数据管理", path: "/home/test4_1" }],
        },
      ],
    };
  },
  mounted() {

    this.getIndex();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getIndex() {
      if(window.sessionStorage.getItem("activeIndex"))
        this.activeIndex = window.sessionStorage.getItem("activeIndex")
      else {
        this.activeIndex="/home/test";
        window.sessionStorage.setItem("activeIndex", "/home/test");
      }
    },
    changeIndex(Index) {
      window.sessionStorage.setItem("activeIndex", Index);
    },
  },
};
</script>
