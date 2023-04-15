<template>
  <div class="app-container">
    <div class="container">
      <h3 style="text-align:center">欢迎来到{{ roomName }}</h3>
      <div class="room">
        <div class="room-box">
          <img src="@/assets/img1.png" class="img">
          <div class="room-info">
            <div>负责人：{{ activeroom.teacther }}</div>
            <div>项目简介： {{ activeroom.desc }}</div>
            <div>
              介绍视频
              <el-button style="margin-left: 20px" type="primary">点击播放<i class="el-icon-video-play el-icon--right" /></el-button>
              <el-button type="primary" @click="onClick">题库<i class="el-icon-upload el-icon--right" /></el-button>
            </div>
          </div>
        </div>
        <div>
          <h5>目的意义：</h5>
          <div>目的意义目的意义目的意义目的意目的意义：目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义：目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义</div>
        </div>
        <div>
          <h5>课程：</h5>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
              <i class="el-icon-video-play" style="color: #409EFF" />
            </el-timeline-item>
          </el-timeline>
        </div>
        <div>
          <h5>成员：</h5>
          <div>学员1，学员1，学员2，学员3，学员4，学员5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      roomName: '',
      activeroom: {
        teacther: '',
        desc: ''
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
      activities: [{
        content: '课1',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '课2',
        timestamp: '2018-04-13 20:46',
        color: '#0bbd87'
      }, {
        content: '课3',
        timestamp: '2018-04-14 20:46',
        size: 'large'
      }, {
        content: '课4',
        timestamp: '2018-04-15 20:46'
      }]
    }
  },
  created() {
    console.log(this.$route)
    this.fetchData()
    this.roomName = this.$route.query.name
    this.activeroom = this.list.filter(it => it.title === this.roomName)[0]
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
    onClick() {
      this.$router.push({
        path: '/tableinfolist'
      })
    }
  }
}
</script>
<style scoped>
.room-box{
    padding-top: 20px;
    display: flex;
    align-items: center;
}
.img{
    width: 200px;
    margin-right: 50px;
}
.room-box div{
    padding: 20px;
}
</style>
