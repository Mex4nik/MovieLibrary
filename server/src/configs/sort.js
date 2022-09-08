export const ascendedSort = (array, fieldName) =>{
    return array.sort((a, b) => {
        let fa = a[fieldName].toLowerCase(),
            fb = b[fieldName].toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}
