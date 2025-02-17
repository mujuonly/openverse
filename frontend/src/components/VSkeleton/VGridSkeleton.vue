<template>
  <section>
    <div
      v-if="isForTab === 'all'"
      class="grid grid-cols-2 gap-4 lg:grid-cols-5"
    >
      <VBone v-for="idx in numElems" :key="idx" class="square" />
    </div>

    <div v-if="isForTab === 'image'" class="masonry">
      <VBone
        v-for="idx in numElems"
        :key="idx"
        class="mb-4"
        :style="{ height: `${getRandomSize()}px` }"
      />
    </div>

    <template v-if="isForTab === 'audio'">
      <VAudioTrackSkeleton v-for="idx in numElems" :key="idx" />
    </template>
  </section>
</template>

<script lang="ts">
/**
 * Display placeholder elements while waiting for the actual elements to be
 * loaded in the results views.
 */
import { computed, defineComponent, PropType } from "vue"

import type { SupportedSearchType } from "~/constants/media"

import VAudioTrackSkeleton from "~/components/VSkeleton/VAudioTrackSkeleton.vue"
import VBone from "~/components/VSkeleton/VBone.vue"

export default defineComponent({
  name: "VGridSkeleton",
  components: { VAudioTrackSkeleton, VBone },
  props: {
    isForTab: {
      type: String as PropType<SupportedSearchType>,
      default: "image",
    },
    numElems: {
      type: Number,
    },
  },
  setup(props) {
    function getRandomSize(max = 300, min = 100) {
      return Math.floor(Math.random() * (max - min) + min)
    }

    const elementCount = computed(() => {
      // Calculate the default element count based on isForTab
      if (props.numElems) return props.numElems
      if (props.isForTab === "all") return 20
      if (props.isForTab === "image") return 30
      return 8
    })

    return { getRandomSize, elementCount }
  },
})
</script>

<style scoped>
.square {
  @apply aspect-square;
}

.masonry {
  @apply columns-2 gap-x-4 md:columns-3 lg:columns-5;
}
</style>
