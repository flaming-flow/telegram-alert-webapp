module.exports = [
"[project]/dictionaries/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/dictionaries_en_json_d0ab6d62._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/dictionaries/en.json (json)");
    });
});
}),
"[project]/dictionaries/ru.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/dictionaries_ru_json_5f9fe7b2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/dictionaries/ru.json (json)");
    });
});
}),
];