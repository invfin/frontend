

export function handleEndOfList<T, S>(
  response_data: T,
  entries: globalThis.Ref<S[]>,
  firstRequest: globalThis.Ref<boolean>) {
  //TODO: handle end of list
  entries.value.push(...response_data.results)
  firstRequest.value = false;
}


export function getAPIPath(path: string): string {
  return `${useRuntimeConfig().public.apiPath}${path}/`
}

export function getPath(path: string): string {
  return `${useRuntimeConfig().public.regularPath}${path}`
}

