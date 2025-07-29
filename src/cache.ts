const appCache = new Map();

export const getFromCache = (key:string)=> {
    const entity = appCache.get(key)
    return entity
}

export const setCache = (key:string, value: unknown)=> {
    appCache.set(key, value)
}