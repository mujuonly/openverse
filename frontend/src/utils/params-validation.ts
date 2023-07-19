import type { MediaProvider } from "~/types/media-provider"

export const isValidCollection = (collection: string) => {
  return ["tag", "creator", "source"].includes(collection)
}

export const isValidSource = (source: string, providers: MediaProvider[]) => {
  const sourceArray = providers.map((provider) => provider.source_name)

  return sourceArray.includes(source)
}
