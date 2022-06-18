<script>
  // import like from "../../../components/like.vue"
  // import dislake from "../../../components/dislike.vue"
  

  export default {
    name: "Cardgm",
    props: ['postData', 'refresh'],
    components: {
    
    },
    data() {
      return {
        api: import.meta.env.VITE_API,
        userId: JSON.parse(localStorage.getItem('headers')).userId,
        token: JSON.parse(localStorage.getItem('headers')).token,
        user: {},
      }
    },
    methods: {
      showOneUser: function () {
        fetch(`${this.api}/api/user/${this.postData.userId}`, {
            method: 'GET',
            headers: {
              'authorization': this.token,
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => {
            this.user = data
          })
          .catch(error => console.log(error))
      },
      deleteOnePost: function() {
        if(confirm("Souhaitez-vous réellement supprimer ce post ?")){
          fetch(`${this.api}/api/post/${this.postData._id}`, {
            method: 'DELETE',
            headers: {
              'authorization': this.token,
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => {
            if(data.error) {
              console.log(error)
            } else {
              this.refresh()
            }
          })
          .catch(error => console.log(error))
        }
      },
      modifyOnePost: function() {
       if(confirm("Voulez-vous vraiment modifier votre post?")){
        fetch(`${this.api}/api/post/${this.postData._id}`, {
            method: 'PUT',
            headers: {
              'authorization': this.token,
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => {
            if(data.error) {
              console.log(error)
            } else {
              this.refresh()
            }
          })
          .catch(error => console.log(error))
       }
      }
      
    },
    created: function () {
      this.showOneUser()
    }
  }
</script>
<template>
  <div class="card mb-3 m-auto d-flex container">

    <h5 class="mb-2"><strong>{{user.lastname}} {{user.firstname}}</strong></h5>
    <div class="card-body container">
      <img v-if="postData.image != ''" :src="postData.image" alt="..." class="w-100" />
      <p class="card-text">{{postData.post}}</p>
      <div>
        <div class="d-flex justify-content-between">
          <div class="mb-2 mt-3 d-flex gap-2">
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-danger  ms-auto" @click=" modifyOnePost()">Modifier</button>
            </div>
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-danger ms-auto"   @click="deleteOnePost()">Supprimer</button>
            </div>
          </div>
          <div class="d-flex " >
            <div class=" gap-1">
              <button type="button" class="btn-like ms-auto">
                j'aime
              </button>
            </div>
            <div class=" gap-1 ms-4">
              <i class="bi bi-suit-heart"></i>
              <button type="button" class="btn-like ms-auto ">
               j'aime pas
              </button>
            </div>
          </div>
            
         
        </div>
      </div>
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