import Post from "./post";
import xss from "xss-filters";

let ui = {
  renderPosts(posts) {
    let element = posts.map((post) => {
      let { title, lastReply } = post;
      return articleTemplate(title, lastReply);
    });
    let target = document.querySelector(".container");
    target.innerHTML = element.join("");
  },

  renderUsers(users) {
    let element = users.map((user) => {
      let { name, avatar } = user;
      return userTemplate(name, avatar);
    });
    let target = document.querySelector(".sidebar-content");
    target.innerHTML = element.join("");
  }
}

let articleTemplate = (title, lastReply) => {
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);
  let template = `
    <article class="post">
      <h2 class="post-title">${safeTitle}</h2>
      <p class="post-meta">Last reply on ${safeLastReply}</p>
    </article>`;
  return template;
}

let userTemplate = (name, avatar) => {
  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);
  let template = `
    <div class="active-avatar">
      <img src="assets/images/avatar.jpg" alt="avatar" width="50">
      <h5 class="post-author">${safeName}</h5>
    </div>`;
    return template;
}

export default ui;