const replaceItem = (state, item, arrFrom, arrTo) => {
  const duplicate = state[arrFrom].find(i => i.id === item.id)
  state[arrFrom].splice(state[arrFrom].indexOf(duplicate), 1)
  state[arrTo].push(duplicate)
  state[arrTo].sort((a, b) => a.id - b.id)
}

const createItem = (state, item, array, event) => {
  state[array].push({
    ...item,
    event: event,
    time: new Date()
  })
}

const containsDeep = text => value => {
  if (!value) return false
  const valueType = typeof value

  if (valueType === 'string') {
    return value.toLowerCase().indexOf(text.toLowerCase()) > -1
  }
  if (Array.isArray(value)) {
    return value.some(containsDeep(text))
  }
  if (valueType === 'object') {
    return Object.values(value).some(containsDeep(text))
  }
  return false
}

const filterDeeply = (arr, str) => arr.filter(containsDeep(str))

export {
  replaceItem,
  createItem,
  filterDeeply
}
