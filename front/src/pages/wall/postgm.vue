<script>
export default {
    name:"postgm",
    data: function(){
        return{
        api: import.meta.env.VITE_API,
        userId: JSON.parse(localStorage.getItem('headers')).userId,
        token: JSON.parse(localStorage.getItem('headers')).token,
        message: '',
        image: '',
        post: [],
        error:'',
        succes:''
        }
    },
    methods:{
        addPost: function(){
            let formData = new FormData()
            
            formData.append('post', this.message)
            formData.append('userId', this.userId)
            formData.append('image', this.image)

            console.log(this.token)

            fetch(`${this.api}/api/post`,{
                method: 'POST',
                headers:{
                    'authorization': this.token,
                },
                body: formData
            })
            .then(response => response.json())
            .then(data =>{
                if(data.error){
                    this.error = data.error
                }else{
                  this.succes = 'Publié'
                }
            })
        },
        setPicture: function(e){
            this.image = e.target.files[0]
        }
    }

}
</script>
<template>
    <div class="form-floating container-md mt-5">
     <textarea v-model="message" class="form-control" placeholder="Ecrivez quelque chose" id="floatingTextarea2" style="height: 100px"></textarea>
     <label for="floatingTextarea2">Ecrivez quelque chose</label>
        <div class=" mb-5 btn">
           <input type="file" @change="setPicture($event)" class="form-control">
         </div>
     <button type="button" class="btn btn-danger mt-2 d-flex-start" @click="addPost">Poster</button>
     </div> 
    
      
       
    
     
    
    
</template>
<style>
input{
    display: none;
}
body{
    background-color: rgb(228, 228, 222);
}
.btn-style {
  background-color: #D1515A;
  border-color: #D1515A;
  margin-left: 2px;
  margin-right: 2px;
}
</style>