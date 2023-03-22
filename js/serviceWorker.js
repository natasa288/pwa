var myCacheName = "myPWAChace";
const addResourcesToCache = async (resources) => {
    console.log("add to chache");
    const cache = await caches.open("myChacheName");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
      console.log("Instaliling ...");
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/app.js",
     
           "/media/icons/icon-32.png"
    
      ])
    );

  });
  