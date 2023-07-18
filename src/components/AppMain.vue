<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default{
    name :"AppMain",
    components:{
        ProjectCard
    },
    data() {
        return{
            apiUrl:"http://localhost:8000/api/",
            projects : [],
            loading : false,
            loadingError: false,
            postsCurrentPage: 0,
            postsTotalPages: 0,
        }
    },
    methods:{
        getPostsWPage(pageNumber){
            this.loading = true
            let config = {
                    params: {
                        page: (pageNumber)
                    }
                };
                axios.get(this.apiUrl + "projects", config).then(response=>{
            console.log(response.data);
            this.projects = response.data.results.data
            this.postsCurrentPage = response.data.results.current_page;
            this.postsTotalPages = response.data.results.last_page;
            this.loading = false
        }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            });
        },
        
    },

    mounted(){
        // this.loading = true

        // axios.get(this.apiUrl + "projects").then(response=>{
        //     console.log(response.data);
        //     this.projects = response.data.results.data
        //     this.postsCurrentPage = response.data.results.current_page;
        //     this.postsTotalPages = response.data.results.last_page;
        //     this.loading = false
        // }).catch(err => {
        //         this.loading = false;
        //         this.loadingError = err.message;
        //     });
        this.getPostsWPage(1)
    }

}



</script>

<template>
    <h1 v-if="loading"> LOADING DATA</h1>

<div v-if="!loading">
    <ProjectCard :project="project" v-for="project in projects" />
</div>
<a class="button" @click="this.postsCurrentPage > 1 && getPostsWPage( this.postsCurrentPage - 1)">Pagina precedente</a>
        <a class="button" @click="this.postsCurrentPage &&  getPostsWPage(pageNumber)" v-for="pageNumber in postsTotalPages">{{ pageNumber }}</a>
        <a class="button" @click="this.postsCurrentPage < this.postsTotalPages && getPostsWPage(this.postsCurrentPage + 1)">Pagina successiva</a>

<h1>prova</h1>
</template>

<style scoped>
h1{
    color: red;
}
.button{
    margin-right: 2rem;
}
</style>