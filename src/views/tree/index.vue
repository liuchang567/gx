<template>
  <div class="app-container">
    <div class="container">
      <el-card v-for="item in list" :key="item" :body-style="{ padding: '0px' }" class="card">
        <img src="@/assets/img2.png" class="image">
        <div class="info">
          <div>姓名：{{ item.title }}</div>
          <div>职称：{{ item.teacther }}</div>
          <div>学院：{{ item.school }}</div>
        </div>
        <div style="padding: 14px;" class="num">
          <span>直播开展数量：{{ item.num1 }}</span>
          <span>网络教研数量：{{ item.num2 }}</span>
          <span>评课数量：{{ item.num3 }}</span>
          <span>磨课备课数：{{ item.num4 }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      list: [
        {
          no: '2023001',
          title: '侯芳',
          pageviews: 40,
          teacther: '院士',
          school: '左江学院',
          time: '2023-04-13 20:00:00',
          num1: 1,
          num2: 3,
          num3: 4,
          num4: 1
        },
        {
          no: '2023003',
          title: '吕立国',
          pageviews: 30,
          teacther: '教授',
          school: '左江学院',
          time: '2023-04-13 20:00:00',
          num1: 1,
          num2: 2,
          num3: 2,
          num4: 1
        },
        {
          no: '2023004',
          title: '平小平',
          pageviews: 28,
          teacther: '教授助理',
          school: '交通学院',
          time: '2023-04-13 20:00:00',
          num1: 1,
          num2: 2,
          num3: 2,
          num4: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
    .container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card{
        width: 30%;
        height: 300px;
        margin: 15px;
    }
    .info{
        display: inline-block;
        vertical-align: 70px;
    }
    .info div{
        padding-left: 20px;
        padding-bottom: 15px;
    }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 230px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  }

  .num{
    display: flex;
    justify-content: space-between;
  }
</style>
