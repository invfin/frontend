<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
onMounted(() => {
    initFlowbite();
});

defineProps<{
    modalId: string,
    modalTitle: string,
    modelValue: boolean
}>();

const name: Ref<string> = ref("");
const amount: Ref<number> = ref(0.0);
const description: Ref<string> = ref("");
const date: Ref<string> = ref("");
const currency: Ref<number> = ref(1);
const is_recurrent: Ref<boolean> = ref(false);
const category: Ref<string> = ref("");
const quantity: Ref<number> = ref(0);
const price: Ref<number> = ref(0);
const isFor: Ref<"income" | "saving" | "spend"> = ref("income");

const emit = defineEmits(['update:modelValue'])

async function saveForm() {
    const body = {
        name: name.value,
        amount: amount.value,
        description: description.value,
        date: date.value,
        currency: currency.value,
        is_recurrent: is_recurrent.value,
        category: category.value,
        quantity: quantity.value,
        price: price.value,
    };
    const { data, error } = await CustomClient.post(isFor.value, body);
}

async function emitValue() {
    await saveForm();
    emit('update:modelValue', true)
}


const options = [
    {
        label: "Ingreso",
        value: "income"
    }, {
        label: "Gasto",
        value: "spend"
    },
    {
        label: "Ahorro",
        value: "saving"
    }
]


</script>
<template>
    <GeneralModal :modalId="modalId" :modalTitle="modalTitle">

        <template #body>

            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input v-model="name" type="text" name="name" id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Ex. Apple iMac 27&ldquo;">
                </div>
                <div>
                    <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique
                        quantity</label>
                    <input type="number" v-model="quantity" id="quantity"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required>
                </div>
                <div>
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique
                        price</label>
                    <input type="number" v-model="price" id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required>
                </div>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                    <VueDatePicker v-model="date"></VueDatePicker>
                </div>

                <div>
                    <label for="isFor"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movimiento</label>
                    <select id="isFor" v-model="isFor"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option v-for="option in options" :value="option.value">{{ option.label }}</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <label for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" rows="5" v-model="description"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                </div>
            </div>


        </template>
        <template #footer>
            <div class="flex flex-col items-center">
                <button type="button" @click="emitValue" class="common-button px-10">
                    Guardar
                </button>
            </div>
        </template>

    </GeneralModal>
</template>