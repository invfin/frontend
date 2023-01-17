<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { TextContent, Author, Tag } from '@/models/WritenContent'

@Options({
  props: {
    texContent: TextContent,
  },
})
export default class ListCard extends Vue {
  texContent!: TextContent
}
</script>

<template>
  <div class="card-translucent bg-transparent">
    <div class="card-body p-3">
      <div class="row">
        <div class="col-lg-9">
          <div class="d-flex flex-column h-100">
            <a href="{{texContent.url}}">
              <p class="h1 mb-1 pt-2 text-bold">
                {{ texContent.title }}
              </p>
            </a>
            <h5 class="font-weight-bolder">
              <div class="d-flex" v-for="tag in texContent.tags" :key="tag">
                <a href="#" class="badge badge-info text-center mr-2">
                  <span class="font-weight-bolder">{{ tag.title }}</span>
                </a>
              </div>
            </h5>
            <p class="mb-5">
              <a href="{{texContent.url}}">
                {{ texContent.resume }}
              </a>
            </p>
            <div class="row">
              <div class="clearfix">
                <div class="float-start">
                  <img class="avatar" src="{{texContent.author.image}}" />
                  <a href="{{texContent.author.url}}">
                    {{ texContent.author }}
                  </a>
                </div>
                <div class="float-end"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 ms-auto text-center mt-5 mt-lg-0">
          <div class="bg-gradient-yellow border-radius-lg h-100">
            <img
              src="{{texContent.image}}"
              class="h-100 w-100 rounded top-0 d-lg-block d-none"
              alt="waves"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
