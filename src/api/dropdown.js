const dropdownApi = {
  async fetchOptions() {
    let result
    await fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(response => response.json())
      .then(data => {
        result = data
      })
    return result
  }
}

export default dropdownApi
