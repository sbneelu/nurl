async function fetchUrls() {
  const res = await fetch("urls.json");
  return res.json();
}

async function main() {
  const acronym = location.pathname.slice(1).toLowerCase() ;
  const urls = await fetchUrls();
  const url = urls[acronym];
  if (url !== undefined) location.href = url;
  else document.write("Invalid URL.");
}

main();
