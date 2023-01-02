<template>
<li class="nav-item dropdown">
          <a class="nav-link" href="#!" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="text-dark fas fa-th"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
            <div class="row shortcuts px-4">
              <a href="{% url 'cartera:portfolio_inicio' %}{% utm 'navbar' 'Portfolio' %}" class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-red">
                  <i class="fas fa-hand-holding-usd"></i>
                </span>
                <small>Portfolio</small>
              </a>
              <a href="{% url 'screener:screener_inicio' %}{% utm 'navbar' 'Screener' %}" class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-purple">
                  <i class="fas fa-chart-area"></i>
                </span>
                <small>Screener</small>
              </a>
              <a href="{% url 'roboadvisor:roboadvisor' %}{% utm 'navbar' 'Roboadvisor' %}" class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-info">
                  <i class="fas fa-robot"></i>
                </span>
                <small>Roboadvisor</small>
              </a>
              <a href="{% url 'preguntas_respuestas:list_questions' %}{% utm 'navbar' 'Preguntas' %}"
                class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-green">
                  <i class="far fa-question-circle"></i>
                </span>
                <small>Preguntas</small>
              </a>
              <a href="{% url 'escritos:glosario' %}{% utm 'navbar' 'Diccionario' %}" class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-orange">
                  <i class="fas fa-book"></i>
                </span>
                <small>Diccionario</small>
              </a>
              <a href="{% url 'public_blog:blog_list' %}{% utm 'navbar' 'Blogs' %}" class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-yellow">
                  <i class="fas fa-newspaper"></i>
                </span>
                <small>Blogs</small>
              </a>
            </div>
          </div>
        </li>
    </template>
    
    
    
    <script lang="ts">
    import { fetchData } from "@/utils/DataFetcher";
    import { onMounted } from "vue";
    import { Options, Vue } from "vue-class-component";
    import HelloWorld from "@/pages/HelloWorld.vue"; // @ is an alias to /src
    
    export default {
        name: "Navbar",
    setup() {
        const { error, loading, data, performRequest } = fetchData();
    
        onMounted(() => {
        performRequest("lista-sectores/", {});
        });
    
        return {
        error,
        loading,
        data,
        msg: "HEY",
        };
    },
    };
    export class HomeView extends Vue {}
    </script>
    