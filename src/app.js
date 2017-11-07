// Post.findAll().then(ui.renderPosts);

let Post = {
  findAll() {
    return new Promise((res, rej) => {
      let uri = "http://localhost/3000/posts"
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

let ui = {
  renderPosts(posts) {
    console.log(posts);
  }
}

Post.findAll().then(ui.renderPosts).catch((error) => console.log(error));