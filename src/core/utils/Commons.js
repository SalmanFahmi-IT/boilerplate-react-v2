/**
 * 
 * @param {*} num 
 */
export function parseToNumber(num) {
    let val = num && num != '' ? num : 0;
    return parseFloat(val.toString().replace(/ /g, ''));
}
export function FloatingPointFix(value) {
    return parseFloat(value && value.toFixed(2));
}
export function formatDate(date) {
    const d = new Date(date)
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('fr-FR', options).format(d)
}

export function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
export function formatNumber(num) {
    const value = num && num != '' ? parseToNumber(num) : 0;
    return value.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}


