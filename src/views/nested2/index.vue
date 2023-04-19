<template>
  <div class="app-container">
    <el-form inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="研讨活动名称">
        <el-input v-model="formInline.user" placeholder="研讨活动名称" style="width: 200px" />
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker v-model="formInline.date" placeholder="选择研讨时间" style="width: 200px" />
      </el-form-item>
      <el-form-item style="padding-left:20px">
        <el-button type="primary" plain @click="fetchData(formInline)">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      fit
      highlight-current-row
    >
      <el-table-column label="活动名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="基本单位" align="center">
        <template slot-scope="scope">
          {{ scope.row.remark }}
        </template>
      </el-table-column>
      <el-table-column label="活动阶段" align="center">
        <template slot-scope="scope">
          {{ scope.row.xx }}
        </template>
      </el-table-column>
      <el-table-column label="活动状态" align="center">
        <template>
          <span
            style="color:#67C23A
"
          >未开始</span>
        </template>
      </el-table-column>
      <el-table-column label="活动介绍" align="center">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <el-link type="primary" @click="toInfo(scope.row)">详情</el-link>
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
          <el-form-item label="大赛内容">
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
          title: '午餐大赛',
          phone: 40,
          xx: '筹备中',
          remark: '左江学院',
          desc: '这是一条介绍',
          time: '2023-06-06',
          time2: '2023-08-06'
        },
        {
          no: '2023003',
          title: '计算机知识竞赛',
          phone: 30,
          xx: '筹备中',
          remark: '左江学院',
          desc: '这是一条介绍',
          time: '2023-06-06',
          time2: '2023-07-06'
        },
        {
          no: '2023004',
          title: '校庆大赛',
          phone: 28,
          xx: '筹备中',
          remark: '交通学院',
          desc: '这是一条介绍',
          time: '2023-06-06',
          time2: '2023-08-06'
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
    toInfo(info) {
      this.$router.push({
        path: 'nestedinfo2'
      })
    }
  }
}
</script>
