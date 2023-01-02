<template>
    <li class="nav-item">
              <a class="nav-link"
              href="{% url 'roboadvisor:user-robo-results' %}{% utm 'sidebar' 'Roboadvisor' %}">
                <i class="fas fa-robot text-primary"></i>
                <span class="nav-link-text">Roboadvisor</span>
              </a>
            </li>
</template>