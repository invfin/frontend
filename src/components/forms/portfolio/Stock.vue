<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
    initFlowbite();
});

defineProps<{
    modalId: string,
    modalTitle: string,
    modelValue: boolean
}>();

const name: string = ref("");
const amount: number = ref("");
const description: string = ref("");
const date: string = ref("");
const currency: number = ref("");
const is_recurrent: boolean = ref("");
const category: string = ref("");
const quantity: number = ref("");
const price: number = ref("");
const movement: "BUY" | "SELL" = ref("");

const emit = defineEmits(['update:modelValue'])

async function saveForm() {
    const body: InvestmentMove = {
        name: name.toValue,
        amount: amount.toValue,
        description: description.toValue,
        date: date.toValue,
        currency: currency.toValue,
        is_recurrent: is_recurrent.toValue,
        category: category.toValue,
        quantity: quantity.toValue,
        price: price.toValue,
        movement: movement.toValue,
    };
    const { data, error } = await useFetch(getAPIPath("jwt-token"), {
        method: 'POST',
        body: body,
        headers: { Authorization: 'Bearer ' + "" }
    });
}

function emitValue(e) {
    emit('update:modelValue', true)
}

const options = [
    {
        label: "Compra",
        value: "BUY"
    },
    {
        label: "Venta",
        value: "SELL"
    }
];

</script>
<template>
    <GeneralModal :modalId="modalId" :modalTitle="modalTitle">

        <template #body>

            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="name" id="name" value="iPad Air Gen 5th Wi-Fi"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Ex. Apple iMac 27&ldquo;">
                </div>
                <div>
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                    <input type="text" name="brand" id="brand" value="Google"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Ex. Apple">
                </div>
                <div>
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number" value="399" name="price" id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$299">
                </div>
                <div>
                    <FormsSelect title="Movimiento" :options="options" v-model:value="movement"></FormsSelect>
                </div>
                <div class="sm:col-span-2">
                    <label for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" rows="5"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                </div>
            </div>


        </template>
        <template #footer>
            <button type="button" onclick="emitValue"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Crear
            </button>
            <button type="button"
                class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                Cancelar
            </button>
        </template>

    </GeneralModal>
</template>
