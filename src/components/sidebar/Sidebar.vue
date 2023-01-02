<template>
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  d-flex align-items-center">
        
        <a class="navbar-brand text-right">
          <img src="{% static 'general/assets/img/general/finanzaseinversiones.WebP' %}" height="40" class="navbar-brand-img" alt="Logo">
        </a>

        <div class=" ml-auto ">
          <!-- Sidenav toggler -->
          <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            </li>
            <hr class="my-3">
            <h6 class="navbar-heading pl-4 text-muted">
              <span class="docs-normal">Exploradores</span>
            </h6>   
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>