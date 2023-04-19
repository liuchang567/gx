<template>
  <div class="app-container">
    <el-steps :active="1">
      <el-step title="筹备中" icon="el-icon-edit" />
      <el-step title="研讨会" icon="el-icon-upload" />
      <el-step title="评审中" icon="el-icon-picture" />
      <el-step title="结果公布" icon="el-icon-picture" />
    </el-steps>
    <el-tabs v-model="activeName" style="margin-top: 20px" @tab-click="handleClick">
      <el-tab-pane label="研讨活动信息" name="first">
        <div class="info">
          <span>活动名称：XX研讨</span>
          <span>活动时间：2023 06-06</span>
        </div>
        <div class="flex">
          <div>
            <div>研讨活动海报</div>
            <img src="@/assets/img1.png" class="image">
          </div>
          <div>
            <div>研讨活动封面</div>
            <img src="@/assets/img1.png" class="image">
          </div>
          <div>研讨活动简介：这是一个研讨活动简介</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="奖项评分" name="fourth">
        <div class="flex">
          <div>
            <el-button type="primary">奖项设置</el-button>
          </div>
          <div>1等奖： 1名  100分</div>
          <div>2等奖： 2名  90分</div>
          <div>3等奖： 2名  80分</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评审设置" name="sss">
        <div class="flex">
          <div>
            <el-button type="primary">评审视频<i
              class="el-icon-video-play el-icon--right"
            /></el-button>
          </div>
          <div>
            <el-button type="primary">评审附件上传<i class="el-icon-upload el-icon--right" /></el-button>
          </div>
          <div>
            <el-button type="primary">评审指派<i
              class="el-icon-share
 el-icon--right"
            /></el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="版权信息单位" name="second">
        <div class="flex">
          <div>版权信息：XX版权</div>
          <div>单位主体：XX学院</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="报名" name="third">
        <div class="flex">
          <div>
            <el-button type="primary">报名<i class="el-icon-upload el-icon--right" /></el-button>
            <el-button type="primary">报名表下载<i
              class="el-icon-bottom
 el-icon--right"
            /></el-button>

          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeName: 'first',
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
        path: '/nwstedInfo',
        query: {
          name: info.title
        }
      })
    },
    handleClick() {}
  }
}
</script>
<style scoped>
.flex{
    padding: 15px;
    display: flex;
    flex-direction: column;
}
.flex div{
margin-right: 20px;
margin-bottom: 15px;
}
.info{
    display: flex;
    flex-direction: column;
    padding: 15px;
}
.info span{
    margin-right: 20px;
    margin-bottom: 15px;
}
.image{
    width: 200px;
}
</style>
