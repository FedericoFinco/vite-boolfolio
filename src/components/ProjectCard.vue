<script>

export default{
    name :"ProjectCard",
    props:{
        project: Object
    },
    data() {
        return{
        }
    },
    methods:{

    },
    mounted(){

    }

}



</script>

<template>
<h1>ciauz</h1>

    <div class="card">
            <h3>{{ project.title }}</h3>
            <h4>descrizione: {{ project.description }}</h4>
            <h4>technologies: 
                <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
                
            </h4>
            
            <h4 v-if="project.link_to_project"> link: <a :href="project.link_to_project"> {{ project.link_to_project }} </a></h4>

        </div>


</template>