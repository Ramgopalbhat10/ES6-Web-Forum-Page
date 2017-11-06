// Post.findAll().then(ui.renderPosts);

let Post = {
  findAll() {
    return new Promise((res, rej) => {
      console.log("ok posts!");
    });
  }
}

let ui = {
  renderPosts(posts) {
    console.log(posts);
  }
}

Post.findAll().then(ui.renderPosts);