<template>
  <section class="-mx-2 md:-mx-4">
    <VSnackbar size="large" :is-visible="isSnackbarVisible">
      <i18n path="audioResults.snackbar.text" tag="p">
        <template
          v-for="keyboardKey in ['spacebar', 'left', 'right']"
          #[keyboardKey]
        >
          <kbd :key="keyboardKey" class="font-sans">{{
            $t(`audioResults.snackbar.${keyboardKey}`)
          }}</kbd>
        </template>
      </i18n>
    </VSnackbar>
    <VGridSkeleton
      v-if="results.length === 0 && !fetchState.isFinished"
      is-for-tab="audio"
    />
    <ol aria-label="">
      <li v-for="audio in results" :key="audio.id">
        <VAudioTrack
          class="mb-2 md:mb-1"
          :audio="audio"
          :size="audioTrackSize"
          layout="row"
          :search-term="searchTerm"
          @interacted="handleInteraction"
          @mousedown="handleMouseDown"
          @focus="showSnackbar"
        />
      </li>
    </ol>
    <VLoadMore />
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue"

import { useMediaStore } from "~/stores/media"
import { useSearchStore } from "~/stores/search"
import { useUiStore } from "~/stores/ui"
import { useAnalytics } from "~/composables/use-analytics"
import { IsSidebarVisibleKey } from "~/types/provides"
import type { AudioInteractionData } from "~/types/analytics"
import type { AudioDetail } from "~/types/media"

import VAudioTrack from "~/components/VAudioTrack/VAudioTrack.vue"
import VGridSkeleton from "~/components/VSkeleton/VGridSkeleton.vue"
import VLoadMore from "~/components/VLoadMore.vue"
import VSnackbar from "~/components/VSnackbar.vue"

export default defineComponent({
  name: "VAudioCollection",
  components: { VAudioTrack, VGridSkeleton, VLoadMore, VSnackbar },
  setup() {
    const mediaStore = useMediaStore()
    const searchStore = useSearchStore()

    const uiStore = useUiStore()

    const { sendCustomEvent } = useAnalytics()

    const searchTerm = computed(() => searchStore.searchTerm)
    const results = computed(
      () => mediaStore.resultItems.audio as AudioDetail[]
    )
    const fetchState = computed(() => mediaStore.mediaFetchState.audio)

    const isDesktopLayout = computed(() => uiStore.isDesktopLayout)
    const filterVisibleRef = inject(IsSidebarVisibleKey, ref(false))

    const audioTrackSize = computed(() =>
      !isDesktopLayout.value ? "s" : filterVisibleRef.value ? "l" : "m"
    )

    const isMouseDown = ref(false)
    const handleMouseDown = () => {
      isMouseDown.value = true
    }

    const isSnackbarVisible = computed(() => uiStore.areInstructionsVisible)
    const showSnackbar = () => {
      if (isMouseDown.value) {
        // The audio player was clicked to open the single result view, not
        // focused via keyboard.
        isMouseDown.value = false
      } else {
        uiStore.showInstructionsSnackbar()
      }
    }
    const hideSnackbar = () => {
      uiStore.hideInstructionsSnackbar()
    }

    const handleInteraction = (
      data: Omit<AudioInteractionData, "component">
    ) => {
      sendCustomEvent("AUDIO_INTERACTION", {
        ...data,
        component: "AudioSearch",
      })
    }

    return {
      searchTerm,
      fetchState,
      results,
      audioTrackSize,

      handleMouseDown,

      isSnackbarVisible,
      showSnackbar,
      hideSnackbar,
      handleInteraction,
    }
  },
})
</script>
