const URLS = {
  example: "https://example.com",
};

function lookup(acronym) {
  return acronym in URLS ? URLS[acronym] : undefined;
}

function main() {
  const params = Object.fromEntries(new URLSearchParams(location.search));
  const url = lookup(params.a);
  if (url !== undefined) location.href = url;
  else document.write("Invalid URL.");
}
