<template>
  <!-- <div id="container">
    <div id="header"></div>
    <div id="left"></div>
    <div id="middle"></div>
    <div id="right"></div>
    <div id="footer"></div>
  </div> -->
  <el-container>
    <el-header>
      <el-row >
        <el-col :span="1"><el-avatar icon="el-icon-user-solid"></el-avatar></el-col>
        <el-col :span="10"><h1>Information Processing System</h1></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-s-platform"></i>导航一</template>
            
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
            
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <!-- <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-management"></i>导航三</template>
            <!-- <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <div style="float:left">
              <div>
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item >首页</el-breadcrumb-item>
                  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div>
                <el-dropdown>
                  <el-button type="primary" style="background-color:transparent;border-color:transparent">
                    更多<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            
            <!-- <span style="font-size:14px">王小虎</span> -->
          </el-header>
          <el-main>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table> 
          </el-main>
        </el-container>
        <el-footer><h1>{{Time}}</h1></el-footer>
      </el-container>
    </el-container>
  </el-container>
  
  <!-- <h1>{{ mess }}</h1> -->
</template>
<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
<script>
export default {
  name: 'MainFrame',
  data () {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item),
        Time:Date(Date.now()).toString()
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-header {
  background-color: #5a6b8f;
  color:whitesmoke;
  padding-left: 5px;
  padding-right: 5px;
}

.el-footer {
  background-color: #5a6b8f;
  color:whitesmoke;
  padding-left: 5px;
  padding-right: 5px;
  vertical-align: middle;
}

.el-aside {
  color: #333;
  background-color: #E9EEF3;
}


.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */

.el-breadcrumb__item.last-child.el-breadcrumb__inner
{
  color: whitesmoke;
}

.el-row {
  overflow:hidden;
  height: 60px;
}
.el-col {
  overflow:hidden;
  height: 60px;
}



.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-avatar {
  margin-top: 10px;
  margin-left: 10px;
}

h1
{
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
  /* margin:10px auto auto 10px; */
  display:table-cell;
  vertical-align: middle;
  
  margin: 0;
  height: 60px;
}
</style>