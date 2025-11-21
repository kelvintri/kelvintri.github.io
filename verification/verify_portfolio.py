from playwright.sync_api import sync_playwright, expect

def verify_portfolio(page):
    # Go to localhost
    page.goto("http://localhost:3000")

    # Wait for hero section to be visible (it has initial animation)
    expect(page.get_by_text("SYSTEM ONLINE")).to_be_visible(timeout=10000)

    # Take screenshot of Hero section
    page.screenshot(path="verification/hero.png")

    # Scroll to About section
    page.get_by_role("link", name="About").click()
    page.wait_for_timeout(1000) # Wait for scroll
    page.screenshot(path="verification/about.png")

    # Scroll to Skills section
    page.get_by_role("link", name="Skills").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/skills.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_portfolio(page)
            print("Verification complete")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
