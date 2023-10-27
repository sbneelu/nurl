async function fetchUrls() {
  const res = await fetch("urls.json");
  return res.json();
}
function lookup(acronym, urls) {
  return urls[acronym];
}

async function main() {
  const params = Object.fromEntries(new URLSearchParams(location.search));
  const urls = await fetchUrls();
  const url = urls(params.a, urls);
  if (url !== undefined) location.href = url;
  else document.write("Invalid URL.");
}

main();
