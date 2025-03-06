import { test, expect } from "@playwright/test"


const BASE_URL = 'https://bi03.therapbd.net/'

test("Visit Therap", async ({ page }) => {
  await page.goto(BASE_URL)

  // await page.get
})