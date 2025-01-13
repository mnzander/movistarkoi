export const getImageUrl = (path) => {
    const basePath = "/assets/";
    const fullPath = basePath + path;
    
    return new URL(fullPath, import.meta.url).href
}