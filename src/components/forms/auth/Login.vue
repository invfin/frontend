<script setup lang="ts">
let username = ref("");
let password = ref("");
let errorMessage = ref("");

async function submitForm() {
  const [result, message] = await handleLogin(username.value, password.value);
  if (result) {
    username.value = "";
    password.value = "";
    return navigateTo('/', { redirectCode: 301 })
  }
  errorMessage.value = message;
}
</script>

<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Bienvenido</h3>
    <div>
      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
      <input type="text" name="username" id="username" v-model="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
      <input type="password" name="password" id="password" v-model="password" placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required="">
    </div>
    <button type="submit" class="w-full button-blue-gradient">Ingresar</button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      ¿No tienes un perfil?
      <NuxtLink to="/auth/signup/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Crear perfil
      </NuxtLink>
    </p>
  </form>
</template>
