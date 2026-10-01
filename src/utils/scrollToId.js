/**
 * Scrolls to a section on the current page.
 *
 * If the section does not exist on the current page,
 * navigate to the homepage with the section hash.
 */
export function scrollToId(id) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return;
  }

  // Section doesn't exist on the current page.
  // Navigate to homepage and let the hash handler scroll there.
  window.location.href = `/#${id}`;
}