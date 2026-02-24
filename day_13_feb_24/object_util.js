// objectUtils.js

/* Pick selected fields */
export function pick(obj, keys = []) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k]) => keys.includes(k))
    );
}

/* Remove selected fields */
export function omit(obj, keys = []) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k]) => !keys.includes(k))
    );
}

/* Check empty object */
export function isEmpty(obj) {
    return obj && Object.keys(obj).length === 0;
}

/* Deep clone */
export function clone(obj) {
    return structuredClone(obj);
}

/* Merge objects (shallow) */
export function merge(...objs) {
    return Object.assign({}, ...objs);
}

/* Remove null & undefined fields (very useful for API payload) */
export function clean(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([_, v]) => v !== null && v !== undefined
        )
    );
}

/* Convert object → query string */
export function toQuery(obj) {
    return new URLSearchParams(obj).toString();
}

/* Diff between two objects */
export function diff(oldObj, newObj) {
    const result = {};

    Object.keys(newObj).forEach(key => {
        if (oldObj[key] !== newObj[key]) {
            result[key] = newObj[key];
        }
    });

    return result;
}