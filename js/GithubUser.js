export class GithubUser {
  static search(userlogin) {
    const endpoint = `https://api.github.com/users/${userlogin}`

    return fetch(endpoint)
      .then((data) => data.json())
      .then((data) => {
        const { avatar_url, name, login, public_repos, followers } = data
        return {
          avatar: avatar_url,
          name,
          login,
          repositories: public_repos,
          followers,
        }
      })
  }

  static ClickInputEnterButton() {
    const input = document.querySelector("#input-search")
    const inputButton = document.querySelector(".input-wrapper button")

    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
        inputButton.click()
      }
    })
  }
}
