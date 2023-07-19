<template>
  <div>
    <div class="flex justify-between">
      <div class="flex items-center gap-1">
        <VIcon name="image" />
        <h1 class="heading-2">{{ searchTerm }}</h1>
      </div>
      <VButton
        v-if="view !== 'tag'"
        as="VLink"
        href="href"
        variant="filled-dark"
        size="medium"
        show-external-icon
        has-icon-end
      >
        {{ $t(`additionalSearchViews.links.${view}`) }}</VButton
      >
    </div>
    <p>{{ resultCount }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  name: "VViewHeader",
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
    resultCount: {
      type: String,
      required: true,
    },
    view: {
      type: String as PropType<"tag" | "creator" | "source">,
      required: true,
    },
  },
})
</script>
