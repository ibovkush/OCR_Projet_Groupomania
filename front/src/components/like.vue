<script>
export default {
    name: "like",
    // data: function() {
    //   return {
    //     api: import.meta.env.VITE_API,
    //     userId: JSON.parse(localStorage.getItem('headers')).userId,
    //     postId: JSON.parse(localStorage.getItem('headers')).postId,
    //     message: "",
    //     like: [],
    //     isLike: 0,
    //   }
    // },
    // methode: {
    //     isLike: function(){
    //         fetch(`${this.api}/api/post/:id/like`,{
    //             methode:'POST',
    //         headers:{
    //               'authorization': this.token,
    //             },
    //         }
    //         )
    //         .then(response => response.json())
    //         .then(data =>{
    //             if(data.error){
    //                 this.error = data.error
    //             }else{
    //               this.succes = 'succes'
    //             }
    //         })
            
    //     },
    // },
    // methods: {
    //     addLike() {
    //   if (this.isLiked == 0) {
    //     const data = {
    //       userId: JSON.parse(localStorage.getItem('headers')).userId,
    //       postId: JSON.parse(localStorage.getItem('headers')).postId,
    //     };
    //     fetch(`${this.api}/api/post/:id/like`,{
    //         methode:'POST',
    //         data,
    //         headers:{
    //               'authorization': this.token,
    //             },
    //         }
    //     )
    //    .then((response) => {
    //         this.like = response.data;
    //         this.$store.dispatch("setSnackbar", {
    //           text: "Like ajouté !",
    //         });
    //     )
    // }

    
    
}

</script>
<template>
    <div>
     <div class="d-flex gap-1">
     
     
     <button type="button" class="btn-like ms-auto">j'aime</button>
    </div>
    </div>
</template>
<style>
.btn-like {
        color: white;
        background-color: #091F43;
        border-color: #091F43;
        margin-left: 2px;
        margin-right: 2px;
        border-radius: 50px;
    }
</style>