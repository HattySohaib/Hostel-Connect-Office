function truncate(text, maxAllowed) {
  if (text.length > maxAllowed) {
    text = text.slice(0, maxAllowed) + "...";
  }
  return text;
}

module.exports = { truncate };
