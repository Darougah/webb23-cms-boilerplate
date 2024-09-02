// src/utils/cleanRichText.js

export function cleanRichText(html) {
  return html
    .replace(/<\/?p[^>]*>/g, "")  // Remove <p> tags
    .replace(/<\/?span[^>]*>/g, "");  // Remove <span> tags
}
