export function randomString(prefix) {
    if (prefix === void 0) { prefix = ""; }
    return prefix + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
//# sourceMappingURL=random_string.js.map