const validate = (payload) => {
  let result
  switch (true) {
    case !payload.name.first:
      result = false
      break
    case !payload.name.last:
      result = false
      break
    case !payload.name.middle:
      result = false
      break
    case !payload.password:
      result = false
      break
    case !payload.email:
      result = false
      break
    case !payload.occupation:
      result = false
      break
    case !payload.state:
      result = false
      break
    default:
      result = true
      break
  }
  return result
}

export default validate
