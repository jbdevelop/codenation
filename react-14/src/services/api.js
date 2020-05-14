export const getApi = async url => await (await fetch(url)).json()
