import os
from playwright.sync_api import sync_playwright

filepath = os.path.abspath("certificate.html")
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 900})
    page.goto(f'file://{filepath}')
    page.screenshot(path="certificate_screenshot.png", full_page=True)
    browser.close()
