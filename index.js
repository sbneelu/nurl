async function fetchUrls() {
  const res = await fetch("urls.json");
  return res.json();
}
function lookup(acronym, urls) {
  return urls[acronym];
}

async function main() {
  const url = location.pathname.slice(1).toLowerCase();
  if (url !== undefined) location.href = url;
  else document.write("Invalid URL.");
}

main();
