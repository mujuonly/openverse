<template>
  <li>
    <VButton
      as="VLink"
      size="small"
      variant="filled-gray"
      class="label-bold"
      :href="href"
    >
      {{ name }}
    </VButton>
  </li>
</template>

<script lang="ts">
/**
 * Displays a tag associated with a media item. Set up as a link, it can be
 * used as a link to find other items that are similarly tagged.
 */
import { defineComponent, PropType } from "vue"
import { useContext } from "@nuxtjs/composition-api"

import type { SupportedMediaType } from "~/constants/media"

export default defineComponent({
  name: "VMediaTag",
  props: {
    name: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String as PropType<SupportedMediaType>,
      required: true,
    },
  },
  setup(props) {
    const { app } = useContext()

    const href = app.localePath({
      path: `/tag/${props.mediaType}/${props.name}`,
    })

    return {
      href,
    }
  },
})
</script>
