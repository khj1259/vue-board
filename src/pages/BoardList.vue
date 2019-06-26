<template>
  <div class="board">
      <table border="1">
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>내용</th>
        </tr>
        
        <tr v-for="(ctnt, index) in contents" :key="ctnt">
          <td>{{index}}</td>
          <td>{{ctnt.title}}</td>
          <td>{{ctnt.id}}</td>
          <td>{{ctnt.date}}</td>
          <td>{{ctnt.description}}</td>
        </tr>
        
      </table>
      <router-link to='/insert'>글쓰기</router-link>
  </div>
</template>

<script>
export default {
  data(){
        return{
            contents : []
        }
  },
  created() {
    if (localStorage.length > 0) {
			for (var i = 0; i < localStorage.length; i++) {
        var tmp = localStorage.getItem(localStorage.key(i)); //key로 value를 얻음
				this.contents.push(JSON.parse(tmp)); //반환값을 다시 json으로 변환
			}
		}
  }
}
</script>

