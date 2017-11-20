let API = {
  fetch(path) {
    return new Promise((res, rej) => {
      let uri = `http://localhost:3000/${path}`
      let request = new XMLHttpRequest();
      request.open("GET", uri, true);
      request.onload = () => {
        if(request.status >= 200 && request.status < 400) {
          res(JSON.parse(request.response));
        }
      };
    
      request.onerror = () => {
        rej(new Error("Something went wrong"));
      }
      request.send();
      //console.log("ok posts!");
    });
  }
}

export default API;