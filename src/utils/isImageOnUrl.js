// CHECK IF IMAGE EXISTS
export const checkIfImageExists = (url, callback) => {
  const img = new Image();
  img.src = url;
  
  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve(true);
    } else {
      img.onload = () => {
        resolve(true);
      };
      
      img.onerror = () => {
        resolve(false);
      };
    }
  })
}
