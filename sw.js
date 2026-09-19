self.addEventListener("install", (e) => {
  console.log("[Service Worker] Terinstal");
});

self.addEventListener("fetch", (e) => {
  // Karena aplikasi pakai SheetDB yang butuh internet,
  // kita biarkan request berjalan normal (tidak di-cache offline)
});
