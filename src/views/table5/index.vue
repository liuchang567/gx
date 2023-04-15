<template>
  <div class="app-container">
    <el-form inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="成员姓名">
        <el-input v-model="formInline.user" placeholder="成员姓名" style="width: 200px" />
      </el-form-item>
      <el-form-item label="院系">
        <el-date-picker v-model="formInline.date" placeholder="选择公告时间" style="width: 200px" />
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
      <el-table-column label="成员姓名" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="联系方式" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="院系" align="center">
        <template slot-scope="scope">
          {{ scope.row.xx }}
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="scope">
          {{ scope.row.remark }}
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
          <el-form-item label="成员姓名">
            <el-input v-model="form.title" />
          </el-form-item>
          <el-form-item label="公告内容">
            <el-input
              v-model="form.remark"
              type="textarea"
              :rows="5"
            />
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
        date: ''
      },
      list: [
        {
          no: '2023001',
          title: '午餐公告',
          phone: 40,
          xx: '计算机系',
          remark: '左江学院',
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023003',
          title: '教研室变更公告',
          phone: 30,
          xx: '计算机系',
          remark: '左江学院',
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023004',
          title: '校庆公告',
          phone: 28,
          xx: '计算机系',
          remark: '交通学院',
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
        phone: '',
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
      this.$alert('确定要删除该成员吗？', '警告', {
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
