<template>
    <li class="nav-item">
    <a class="nav-link" href="#navbar-companies" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-companies">
      <i class="fas fa-building text-success"></i>
      <span class="nav-link-text">Empresas</span>
    </a>
    <div class="collapse" id="navbar-companies">
      <ul class="nav nav-sm flex-column">
        {% block FavoritesStocks %}                  
        {% endblock FavoritesStocks %}
      </ul>
    </div>
  </li>
</template>