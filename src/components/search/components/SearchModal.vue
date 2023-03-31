<script setup lang="ts">
import { useRouter } from "vue-router";
import SearchResult from "./SearchResult.vue";
import SearchFooter from "./SearchFooter.vue";
import { useNav } from "@/layout/hooks/useNav";
import { useDebounceFn, onKeyStroke } from "@vueuse/core";
import { ref, watch, computed, nextTick, shallowRef } from "vue";
import Search from "@iconify-icons/ep/search";
import { SearchResponse } from "../types";
import { http } from "@/utils/http";

interface Props {
  value: boolean;
}

interface Emits {
  (e: "update:value", val: boolean): void;
}

const { device } = useNav();
const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {});
const router = useRouter();

const keyword = ref("");
const activePath = ref("");
const inputRef = ref<HTMLInputElement | null>(null);
const resultOptions = shallowRef([]);
const handleSearch = useDebounceFn(search, 300);

const show = computed({
  get() {
    return props.value;
  },
  set(val: boolean) {
    emit("update:value", val);
  }
});

watch(show, async val => {
  if (val) {
    await nextTick();
    inputRef.value?.focus();
  }
});

async function requestSearch(data) {
  return await http.get<SearchResponse, Promise<SearchResponse>>("/search", {
    data
  });
}

function search() {
  requestSearch(keyword.value)
    .then(data => {
      resultOptions.value = data.data;
      if (resultOptions.value?.length > 0) {
        activePath.value = resultOptions.value[0].path;
      } else {
        activePath.value = "";
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function handleClose() {
  show.value = false;
  setTimeout(() => {
    resultOptions.value = [];
    keyword.value = "";
  }, 200);
}

function handleUp() {
  const { length } = resultOptions.value;
  if (length === 0) return;
  const index = resultOptions.value.findIndex(
    item => item.path === activePath.value
  );
  if (index === 0) {
    activePath.value = resultOptions.value[length - 1].path;
  } else {
    activePath.value = resultOptions.value[index - 1].path;
  }
}

function handleDown() {
  const { length } = resultOptions.value;
  if (length === 0) return;
  const index = resultOptions.value.findIndex(
    item => item.path === activePath.value
  );
  if (index + 1 === length) {
    activePath.value = resultOptions.value[0].path;
  } else {
    activePath.value = resultOptions.value[index + 1].path;
  }
}

//Handle de redirection if there is any path
function handleEnter() {
  const { length } = resultOptions.value;
  if (length === 0 || activePath.value === "") return;
  // window.open(`http://localhost:8848${activePath.value}`, '_blank');
  router.push(activePath.value);
  handleClose();
}

onKeyStroke("Enter", handleEnter);
onKeyStroke("ArrowUp", handleUp);
onKeyStroke("ArrowDown", handleDown);
</script>

<template>
  <el-dialog
    top="5vh"
    :width="device === 'mobile' ? '80vw' : '50vw'"
    v-model="show"
    :before-close="handleClose"
  >
    <el-input
      ref="inputRef"
      v-model="keyword"
      clearable
      placeholder="Buscar"
      @input="handleSearch"
    >
      <template #prefix>
        <span class="el-input__icon">
          <IconifyIconOffline :icon="Search" />
        </span>
      </template>
    </el-input>
    <div class="search-result-container">
      <el-empty
        v-if="resultOptions.length === 0"
        description="No se han encontrado resultados"
      />
      <SearchResult
        v-else
        v-model:value="activePath"
        :options="resultOptions"
        @click="handleEnter"
      />
    </div>
    <template #footer>
      <SearchFooter />
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.search-result-container {
  margin-top: 20px;
}
</style>
