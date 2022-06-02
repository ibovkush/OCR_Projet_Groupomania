<script>
import modifier from "../../../components/modifier.vue"
import supprimer from "../../../components/supprimer.vue"
import like from "../../../components/like.vue"
import dislake from "../../../components/dislike.vue"

export default {
    name: "Cardgm",
    components:{
     modifier,
     supprimer,
     like,
     dislake,
    },

    data() {
        return {
            posts: []
        }
    },
    methods: {
      loadPost(){
        fetch('http://localhost:4200/api/post')
        method: 'GET',
        then(res => this.posts = res.data.post)
        .catch(error => this.posts = [error,{ title: "Erreur"}])
      },

      getPost () {
        alert('')
      },
      mounted: function () {
            this.loadPost()
    },
    },
}
</script>
<template>
<div class="card mb-3 m-auto d-flex container">
  
    
  <h5 class="mb-2"><strong>John Doe</strong></h5>
  <div class="card-body container">
    
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">18:30</small></p>
    <div>
        <div class="d-flex justify-content-between">
         <div  class="mb-2 mt-3 d-flex gap-2">
         <modifier></modifier>
          <supprimer></supprimer>
          </div>
          <div  class="mb-2 mt-3 d-flex gap-4">  
          <like></like>
          <dislake></dislake>
          </div>
          
        
        </div>
    </div>
  </div>  
</div>    
</template>    
    

    
  


<style>
.avatar-style{
  width: 65px;
  margin-top: 10px;
}

</style>