<template>
  <ul v-if="tags.length && additionalSearchViews" class="flex flex-wrap gap-2">
    <VTag
      v-for="(tag, index) in tags"
      :key="index"
      href="/"
      :title="tag.name"
    />
  </ul>
  <ul v-else class="flex flex-wrap gap-2">
    <VMediaTag v-for="(tag, index) in tags" :key="index" tag="li">{{
      tag.name
    }}</VMediaTag>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue"

import type { Tag } from "~/types/media"
import { useFeatureFlagStore } from "~/stores/feature-flag"

import VMediaTag from "~/components/VMediaTag/VMediaTag.vue"

import VTag from "~/components/VTag/VTag.vue"

export default defineComponent({
  name: "VMediaTags",
  components: { VMediaTag, VTag },
  props: {
    tags: {
      type: Array as PropType<Tag[]>,
      required: true,
    },
  },
  setup() {
    const featureFlagStore = useFeatureFlagStore()

    const additionalSearchViews = computed(() =>
      featureFlagStore.isOn("additional_search_views")
    )

    return { additionalSearchViews }
  },
})
</script>
