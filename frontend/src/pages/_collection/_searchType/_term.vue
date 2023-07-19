<template>
  <div>
    <VViewHeader
      :search-term="term"
      :result-count="`Found ${resultCount} items`"
      :view="collection"
    />

    <VImageGrid
      v-if="searchType === 'image'"
      :images="images"
      :fetch-state="fetchState"
      image-grid-label=""
      :is-single-page="false"
    />
    <VAudioCollection
      v-else-if="searchType === 'audio'"
      :items="audio"
      :fetch-state="fetchState"
      audio-collection-label=""
      :is-single-page="false"
    />

    <div>
      <pre v-for="item in images" :key="item.id">
          {{ item }}
       </pre
      >
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue"
import { defineComponent, useFetch, useRoute } from "@nuxtjs/composition-api"

import { supportedMediaTypes } from "~/constants/media"
import { useMediaStore } from "~/stores/media"
import { useProviderStore } from "~/stores/provider"
import { useSearchStore } from "~/stores/search"
import { AudioDetail, ImageDetail } from "~/types/media"
import { isValidCollection, isValidSource } from "~/utils/params-validation"

import VViewHeader from "~/components/VViewHeader.vue"

export default defineComponent({
  name: "CollectionView",
  components: { VViewHeader },
  layout: "content-layout",
  validate({ params, $pinia }): Promise<boolean> | boolean {
    const { collection, searchType, term } = params

    if (
      !isValidCollection(collection) ||
      !supportedMediaTypes.includes(searchType) ||
      term === undefined
    ) {
      return false
    }

    if (collection === "source") {
      return isValidSource(term, useProviderStore($pinia).providers[searchType])
    }

    return true
  },
  setup() {
    console.log("In setup")
    const searchStore = useSearchStore()
    const mediaStore = useMediaStore()
    const route = useRoute()
    const { collection, searchType, term } = route.value.params

    const resultCount = computed(() => mediaStore.resultCount)
    const fetchState = computed(() => mediaStore.fetchState)

    const images = computed(() => mediaStore.resultItems.image as ImageDetail[])
    const audio = computed(() => mediaStore.resultItems.audio as AudioDetail[])

    useFetch(async () => {
      searchStore.setSearchTerm(term)
      searchStore.setSearchType(searchType)
      searchStore.setSearchBy(collection as "tag" | "creator" | "source")
      const numberOfResults = await mediaStore.fetchMedia()
      console.log("[useFetch] Number of results: ", numberOfResults)
    })

    return {
      collection: collection as "tag" | "creator" | "source",
      searchType,
      term,
      resultCount,
      audio,
      images,
      fetchState,
    }
  },
})
</script>
