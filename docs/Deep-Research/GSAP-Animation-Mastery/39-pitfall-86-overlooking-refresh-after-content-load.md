### Pitfall 8.6: Overlooking refresh after content load

**Issue:** If content (images, AJAX-loaded elements) appears after ScrollTrigger setup, triggers might fire at wrong times because calculations were done before content expanded the page.

**Before:** AI sets up all ScrollTriggers on page load, but images haven't loaded and later push content down, so start positions shift. This can make triggers activate too early. User scrolls and things are off -- e.g., animation triggers before it's actually in view.

**Solution:** - Use `ScrollTrigger.refresh()` after images load or after content injection. For images, simplest is: `window.addEventListener('load', () => ScrollTrigger.refresh());` which runs when all images fully loaded. - Or if using something like Masonry layout that changes heights, call refresh in its callback.

**Alternatively,** use `ScrollTrigger.matchMedia` which automatically refreshes on changes in media query, etc., but still if content size changes, a manual refresh may be needed.

**AI memory:** Many models forget this, causing broken scroll triggers if images not accounted. Good practice: once all dynamic content in place, refresh.
