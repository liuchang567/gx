<template>
  <div class="app-container">
    <el-form inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="负责人姓名">
        <el-input v-model="formInline.user" placeholder="负责人姓名" style="width: 200px" />
      </el-form-item>
      <el-form-item style="padding-left:20px">
        <el-button type="primary" plain @click="fetchData(formInline)">查询</el-button>
        <el-button type="primary" @click="onAdd">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="编号">
        <template slot-scope="scope">
          {{ scope.row.no }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column label="职称" align="center">
        <template slot-scope="scope">
          {{ scope.row.teacther }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="归属学院" align="center">
        <template slot-scope="scope">
          {{ scope.row.school }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <el-link type="primary" @click="onEdit(scope.row)">编辑</el-link>
          <el-link type="primary" @click="onRemove(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div style="padding: 10px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.title" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.pageviews" />
          </el-form-item>
          <el-form-item label="归属学院">
            <el-select v-model="form.school" placeholder="请选择归属学院" style="width:100%">
              <el-option label="左江学院" value="左江学院" />
              <el-option label="三江学院" value="三江学院" />
              <el-option label="交通学院" value="交通学院" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      list: [
        {
          no: '2023001',
          title: '侯芳',
          pageviews: 40,
          teacther: '院士',
          school: '左江学院',
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023003',
          title: '吕立国',
          pageviews: 30,
          teacther: '教授',
          school: '左江学院',
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023004',
          title: '平小平',
          pageviews: 28,
          teacther: '教授助理',
          school: '交通学院',
          time: '2023-04-13 20:00:00'
        }
      ],
      listLoading: true,
      dialogVisible: false,
      form: {},
      dialogTitle: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(fomr) {
      this.listLoading = true
      setTimeout(() => {
        this.list = this.$options.data().list
        this.listLoading = false
      }, 800)
    },
    onAdd() {
      //
      this.form = {
        title: '',
        pageviews: '',
        school: ''
      }
      this.dialogTitle = '新增教研室'
      this.dialogVisible = true
    },
    onEdit(row) {
      this.form = row
      this.dialogTitle = '编辑教研室'
      this.dialogVisible = true
    },
    onDeatil() {
      this.$alert('功能正在开发中......', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    onRemove(row) {
      this.$alert('确定要删除该教研室吗？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>
