<script setup lang="ts">

defineProps<{
  company: SimpleCompany,
}>()
</script>
<template>
  <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4 p-4 widget-common-style">

    <img class="mb-4 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0" :src="company.image" :alt="company.ticker">

    <div>
      <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">{{ company.name }}</h3>
      <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
        JPG, GIF or PNG. Max size of 800K
      </div>
      <div class="flex items-center space-x-4">
        <button type="button"
          class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Añadir Favoritos
        </button>
        <button type="button"
          class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Añadir Portfolio
        </button>
      </div>
    </div>

    <div class="flex">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">

                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <th>CIK</th>
                    <td>{{ company.cik }}</td>
                    <th>Exchange</th>
                    <td class="whitespace-nowrap px-6 py-4">({{ company.exchange }})</td>
                    <th>OPA</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.ipoDate }}</td>
                    <th>Cantidad de empleados</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.employees }}</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <th>ISIN</th>
                    <td>{{ company.isin }}</td>
                    <th>CEO</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.ceo }}</td>
                    <th>Indústria</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.industry }}</td>
                    <th>Sector</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.sector }}</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <th>CUSIP</th>
                    <td>{{ company.cusip }}</td>
                    <th>País</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.country }}</td>
                    <th>Estado</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.state }} - {{ company.zip_code }}</td>
                    <th>Dirección</th>
                    <td class="whitespace-nowrap px-6 py-4">{{ company.city }}, {{ company.address }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
