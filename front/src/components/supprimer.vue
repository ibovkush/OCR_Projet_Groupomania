<script>
export default {
    name: "Supprimer",
    data: function(){
        return {
         api: import.meta.env.VITE_API,
         token: JSON.parse(localStorage.getItem('headers')).token,
         userId: JSON.parse(localStorage.getItem('headers')).userId,
         postId: JSON.parse(localStorage.getItem('headers')).postId,
         isAdmin: JSON.parse(localStorage.getItem('headers')).isAdmin
        }
    },
    methods:{
        isDelete: function(id_post){
             fetch(`${this.api}/api/post/:${id_post}`,{
                 method: 'DELETE',
                 headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
                    message: content
                })
             })
            .then(response => response.json())
        }
    }
    
}
</script>
<template>
     <div class="d-flex gap-1" v-if="postId && userId == this.userId || isAdmin">
     
     
     <button type="button" @click="isDelete" class="btn btn-danger  ms-auto">supprimer</button>
    </div>
</template>
<style>
.btn-style {
        background-color: #D1515A;
        border-color: #D1515A;
        margin-left: 2px;
        margin-right: 2px;
    }
</style>