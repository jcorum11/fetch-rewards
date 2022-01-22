const appApi = {
  async sendInputs(inputs) {
    let result
    await fetch('https://frontend-take-home.fetchrewards.com/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then(response => response.status)
    .then(data => {
      result = data
    })
    return result
  }
}

export default appApi
