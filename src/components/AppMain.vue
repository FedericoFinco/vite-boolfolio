<script>
import axios from "axios";

export default{
    name :"AppMain",
    data() {
        return{
            apiUrl:"http://localhost:8000/api/",
            projects : [],
        }
    },
    methods:{

    },
    mounted(){
        axios.get(this.apiUrl + "projects").then(response=>{
            console.log(response.data);
            this.projects = response.data.results
        })
    }

}



</script>

<template>
 <h1>ciauz</h1>

    <div class="card" v-for="project in projects">
            <h3>{{ project.title }}</h3>
            <h4>descrizione: {{ project.description }}</h4>
            <h4>technologies: 
                <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
                
            </h4>
            
            <h4 v-if="project.link_to_project"> link: <a :href="project.link_to_project"> {{ project.link_to_project }} </a></h4>

        </div>

    <!-- <main>
        <h2>projects <span v-if="projectsTotalPages>0">{{ projectsCurrentPage }} di {{ projectsTotalPages }}</span></h2>
        <h3 v-if="loading">Caricamento in corso</h3>
        <h3 v-if="loadingError">{{ loadingError }}</h3>

        <div class="card" v-for="project in projects">
            <h3>{{ project.title }}</h3>
            <h4>Categoria: {{ project.category ? project.category.name : "Nessuna" }}</h4>
            <h4>Tags: 
                <span v-if="project.tags.length" v-for="tag in project.tags">{{ tag.name }}&nbsp;</span>
                <span v-else>Nessun tag</span>
            </h4>
            <p>{{ project.content }}</p>
        </div>

        <a class="button" @click="getprojectsPrevPage">Pagina precedente</a>
        <a class="button" @click="getprojectsPage(pageNumber)" v-for="pageNumber in projectsTotalPages">{{ pageNumber }}</a>
        <a class="button" @click="getprojectsNextPage">Pagina successiva</a>
    </main> -->

</template>