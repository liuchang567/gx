<template>
  <div class="app-container">
    <div class="container">
      <el-card v-for="(item,inx) in list" :key="inx" class="roomcard">
        <div class="left">
          <img src="@/assets/img1.png" class="image">
        </div>
        <div class="right">
          <div class="info">
            <div class="info-itrem"><span>教研室名称：</span>{{ item.title }}</div>
            <div class="info-itrem"><span>归属学院：</span>{{ item.school }}</div>
            <div class="info-itrem"><span>教研室负责人：</span>{{ item.teacther }}</div>
          </div>
          <div class="info">
            <div class="info-itrem"><span>教研室人数：</span>{{ item.pageviews }}</div>
            <div class="info-itrem"><span>成立时间：</span>{{ item.time }}</div>
          </div>
          <div class="info desc">
            <div class="info-itrem"><span>教研室简介：</span>{{ item.desc }}</div>
          </div>
          <div class="info desc" style="margin-top: 20px">
            <el-button type="primary" style="width: 200px" @click="toInfo(item)">进入教室<i class="el-icon-arrow-right el-icon--right" /></el-button>
          </div>
        </div>

      </el-card>
    </div>
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
          title: '教研001',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 30,
          teacther: '侯芳',
          school: '左江学院',
          time: '2023-04-13 20:00:00',
          desc: '以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐'
        },
        {
          no: '2023002',
          title: '教研002',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 50,
          teacther: '侯芳',
          school: '三江学院',
          time: '2023-04-13 20:00:00',
          desc: '以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐'
        },
        {
          no: '2023003',
          title: '教研003',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 30,
          teacther: '吕立国',
          school: '左江学院',
          time: '2023-04-13 20:00:00',
          desc: '以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐'
        },
        {
          no: '2023004',
          title: '教研004',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 30,
          teacther: '平小平',
          school: '交通学院',
          time: '2023-04-13 20:00:00',
          desc: '以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐'
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
    },
    toInfo(info) {
      this.$router.push({
        path: '/tableinfo',
        query: {
          name: info.title
        }
      })
    }
  }
}
</script>
