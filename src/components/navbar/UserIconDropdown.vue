<template>
    <li class="nav-item dropdown">
          {% if request.user.is_anonymous %}
          <a class="nav-link pr-0" href="{% url 'account_signup' %}{% utm 'navbar' 'sign-up' %}" role="button" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="{% static 'general/assets/img/general/inversorinteligente.WebP' %}">
              </span>
              <div class="media-body  ml-2  d-none d-lg-block">
                <span class="mb-0 text-sm text-dark font-weight-bold">Únete</span>
              </div>
            </div>
          </a>
          {% else %}
          <a class="nav-link pr-0" href="#!" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="{{request.user.user_profile.foto_perfil.url}}">
              </span>
              <div class="media-body  ml-2  d-none d-lg-block">
                <span class="mb-0 text-sm text-dark font-weight-bold">{{request.user.username}}</span>
              </div>
            </div>
          </a>
          <div class="dropdown-menu  dropdown-menu-right ">
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Bienvenido</h6>
            </div>            
            <a href="{% url 'users:user_inicio' %}{% utm 'navbar' 'Perfil' %}" class="dropdown-item">
              <i class="fas fa-user"></i>
              <span>Perfil</span>
            </a>
            <a href="{% url 'users:update' %}{% utm 'navbar' 'Editar' %}" class="dropdown-item">
              <i class="fas fa-cog"></i>
              <span>Editar</span>
            </a>
            {% if request.user.is_writter %}
            <a href="{% url 'public_blog:create_blog' %}{% utm 'navbar' 'Escribir' %}" class="dropdown-item">
              {% else %}
            <a href="#!" data-bs-toggle="modal" data-bs-target="#BecomingWritterModal" class="dropdown-item">
              {% endif %}
              <i class="fas fa-edit"></i>
              <span>Escribir</span>
            </a>
            <a href="{% url 'preguntas_respuestas:create_question' %}{% utm 'navbar' 'Preguntar' %}" class="dropdown-item">
              <i class="fas fa-question"></i>
              <span>Preguntar</span>
            </a>
            <a href="{% url 'web:soporte' %}{% utm 'navbar' 'Soporte' %}" class="dropdown-item">
              <i class="fas fa-info"></i>
              <span>Soporte</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#CreditsExplanationModal">
              <i class="fas fa-coins"></i>
              <span>Créditos</span>
              <span class="badge badge-danger">{{request.user.user_profile.creditos}}</span>
            </a>
            <a href="#!" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#RepExplanationModal">
              <i class="fas fa-award fa-fw"></i>
              <span>Reputación</span>
              <span class="badge badge-success">{{request.user.user_profile.reputation_score}}</span>
            </a>
            <a href="#!" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#APIKeyModal">
              <i class="fas fa-key"></i>
              <span>Clave API</span>
            </a>
          </div>
          {% endif %}
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
    