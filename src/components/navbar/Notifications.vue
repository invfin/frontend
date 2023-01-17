<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link"
      href="#!"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="text-dark fas fa-bell"></i>
      {% if count_notifications > 0 %}
      <span
        class="badge badge-md badge-circle badge-floating badge-danger border-white"
      >
        {{ count_notifications }}
      </span>
      {% endif %}
    </a>
    <div
      class="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
    >
      <div class="px-3 py-3">
        <h6 class="text-sm text-muted m-0">
          Tienes
          <strong class="text-primary">{{ count_notifications }}</strong>
          notificaciones
        </h6>
      </div>
      {% include "notifications/notifications_dropdown.html" %}

      <a
        href="{% url 'general:notifications_list' %}"
        class="dropdown-item text-center text-primary font-weight-bold py-3"
        >Ver todas</a
      >
    </div>
  </li>
</template>

<script lang="ts">
import { fetchData } from '@/utils/DataFetcher'
import { onMounted } from 'vue'
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/pages/HelloWorld.vue' // @ is an alias to /src

export default {
  name: 'Notifications',
  setup() {
    const { error, loading, data, performRequest } = fetchData()

    onMounted(() => {
      performRequest('lista-sectores/', {})
    })

    return {
      error,
      loading,
      data,
      msg: 'HEY',
    }
  },
}
export class HomeView extends Vue {}
</script>
