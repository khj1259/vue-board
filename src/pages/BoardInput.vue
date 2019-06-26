<template>
    <div>
        <!-- parameter: {{param}} -->
        <h2>insert page</h2>

            제목: <input type="text" name="title" v-model="content.title"><br>
            글쓴이: <input type="text" name="id" v-model="content.id"><br>
            내용: <input type="text" name="description" v-model="content.description">
            <button v-on:click="AddBoard">확인</button>
       
        

    </div>
</template>

<script>
export default {
    //  computed: {
    //     param: function () {
    //         return this.$route.params;
    //     }
    // }
    data(){
        return{
            content : {
                title : '',
                id : '',
                description : '',
                date : ''
            }
        }
    },
    methods : {
        AddBoard : function(){
            var d = new Date();
            this.content.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
            localStorage.setItem(d.getTime(), JSON.stringify(this.content)); //json형태의 string으로 변환해서 저장
            location.href="/";    
        }
    }

}
</script>
