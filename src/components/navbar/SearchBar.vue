<template>
<form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main" action="{% url 'general:searcher'%}" method="POST">
        {% csrf_token %}
        <div class="form-group mb-0">
          <div class="input-group input-group-alternative input-group-merge input-group ui-widgets">
            <div class="input-group-prepend">
              <button type="submit" class="input-group-text"><i class="fas fa-search"></i></button>
            </div>
            <input class="form-control" id="buscador" name="term" placeholder="Buscar" type="search">
          </div>
        </div>
        <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </form>
    </template>
    
    
    
    <script lang="ts">
    import { fetchData } from "@/utils/DataFetcher";
    import { onMounted } from "vue";
    import { Options, Vue } from "vue-class-component";
    
    export default {
        name: "SearchBar",
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
    