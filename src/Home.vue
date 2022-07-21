<template>
  <div>
    <table>
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>密码</td>
      </tr>
      <tr v-for="item in books" :key="item.m_id">
        <td>{{ item.m_id }}</td>
        <td>{{ item.m_username }}</td>
        <td>{{ item.m_password }}</td>
      </tr>

    </table>
  </div>
</template>

<style>
body {
  /*background-color: #;*/
}
</style>

<script>
export default {
  data () {
    return {
      msg: '这个是Home模板页',
      books: [
        {
          m_id: 1,
          m_username: '测试1'
        },
        {
          m_id: 2,
          m_username: '测试2'
        },
        {
          m_id: 3,
          m_username: '测试3'
        }
      ]
    }
  },
  created () {
    const _this = this
    this.$axios.get('http://localhost:8082/user/findAll').then(function (resp) {
      _this.books = resp.data
    })
  }
}
</script>
