/**
 * Shows Search Grid / search meta information (count, etc.)
 * On clicking 'Load More', requests the same URL with the additional
 * `page=page+1` parameter
 * When finished, shows 'No more images'
 * When pending: does not show 'No images', Safer Browsing, search rating or error message
 * On error: shows error message
 */
import { expect, test } from "@playwright/test"

import { mockProviderApis } from "~~/test/playwright/utils/route"
import {
  goToSearchTerm,
  scrollToBottom,
  searchFromHeader,
} from "~~/test/playwright/utils/navigation"

test.describe.configure({ mode: "parallel" })

test.beforeEach(async ({ context }) => {
  await mockProviderApis(context)
})

test("scroll to top on new search term submitted", async ({ page }) => {
  await goToSearchTerm(page, "galah")
  await scrollToBottom(page)
  let scrollY = await page.evaluate(() => window.scrollY)

  expect(scrollY).not.toBe(0)

  await searchFromHeader(page, "honey")
  scrollY = await page.evaluate(() => window.scrollY)

  expect(scrollY).toBe(0)
})
