export function convertMapToArrayAllLevels(map: any) {
    const array = new Array(map.size) // Preallocate array size
    for (const [mapKey, mapValue] of map.entries()) {
        const item = { ...mapValue, id: mapKey } // Include the key as an ID
        array.push(item)
        // If there are children, convert them as well
        if (mapValue.children instanceof Map) {
            item.children = convertMapToArrayAllLevels(mapValue.children)
        }
    }
    return array
}
