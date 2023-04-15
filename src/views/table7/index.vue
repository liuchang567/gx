<template>
  <div class="app-container">
    功能开发中。。。
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
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023002',
          title: '教研002',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 50,
          teacther: '侯芳',
          school: '三江学院',
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023003',
          title: '教研003',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 30,
          teacther: '吕立国',
          school: '左江学院',
          time: '2023-04-13 20:00:00'
        },
        {
          no: '2023004',
          title: '教研004',
          author: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          pageviews: 30,
          teacther: '平小平',
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
