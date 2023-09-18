const searchInput = document.getElementById("search-value");
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", getUserData);

function getUserData() {
  // removes spacebar from input value
  let userName = searchInput.value.replace(/\s+/g, "");
  updateCardData(userName);
}

function updateCardData(user) {
  const card = document.querySelector(".card");

  fetch(`https://api.github.com/users/${user}`)
    
    .then((res) => res.json())
    .then((data) => {
      // fixes the date string
      let date = data.created_at
      let shortDate = date.split("T")[0]
      let finalDate = shortDate.replace(/[^A-Z0-9]+/ig, " ");

      
      // user data
      // name + image
      let image = data.avatar_url || "Not Available";
      let userName = data.name || data.login || "Not Available";
      let userLogin = data.login || "Not Available";
      let userJoined = finalDate || "Not Available";
      let userBio = data.bio || "This profile has no bio";
      // fan base
      let userfollowing = data.following || "0";
      let userfollowers = data.followers || "0";
      let userRepos = data.public_repos || "0";
      // links
      let userLocation = data.location || "Not Available";
      let userBlog = data.blog || "Not Available";
      let userTwitter = data.twitter_username || "Not Available";
      let userCompany = data.company || "Not Available";

      console.log(data);
      // updating card
        card.innerHTML = `
        <div class="container flow-medium" data-type="narrow">
        <div class="card__header">
          <img src="${image}" alt="" />
          <div class="card__header-information">
            <div>
              <h2 class="heading-2">${userName}</h2>
              <h3 class="fs-500 clr-accent-400">@${userLogin}</h3>
            </div>
            <p>Joined ${userJoined}</p>
          </div>
        </div>
        <p class="card__bio | padding-block-start-2">
        ${userBio}
        </p>
        <div class="card-stats | bg-neutral-200 border-radius-1">
          <div>
            <p class="fs-300">Repos</p>
            <h3 class="repos | heading-3">${userRepos}</h3>
          </div>
          <div>
            <p class="fs-300">Followers</p>
            <h3 class="followers | heading-3">${userfollowers}</h3>
          </div>
          <div>
            <p class="fs-300">Following</p>
            <h3 class="following | heading-3">${userfollowing}</h3>
          </div>
        </div>

        <div class="card-information | even-columns" >
          <div class="grid">
            <div class="location | flex-group">
              <svg class="icon" viewBox="0 0 14 20">
                <use xlink:href="#icon-location"></use>
              </svg>
              <p>${userLocation}</p>
            </div>
            <div class="website | flex-group">
              <svg class="icon" viewBox="0 0 20 20">
                <use xlink:href="#icon-website"></use>
              </svg>
              <a href="${userBlog}">${userBlog}</a>
            </div>
          </div>
          <div class="grid">
            <div class="twitter | flex-group in-active">
              <svg class="icon" viewBox="0 0 20 18">
                <use xlink:href="#icon-twitter"></use>
              </svg>
              <p>${userTwitter}</p>
            </div>
            <div class="company | flex-group">
              <svg class="icon" viewBox="0 0 20 20">
                <use xlink:href="#icon-company"></use>
              </svg>
              <p>${userCompany}</p>
            </div>
          </div>
        </div>
      </div>
        `
    })
    .catch((error) => console.log("ERROR"));
  console.log(user);
}

window.onload = () => {
  updateCardData("octocat");
};
