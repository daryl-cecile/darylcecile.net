/* esm.sh - esbuild bundle(@shikijs/core@1.1.7/wasm-inlined) esnext production */
var n=async e=>{let a=await import("/v135/@shikijs/core@1.1.7/esnext/dist/onig.js").then(t=>t.default);return WebAssembly.instantiate(a,e).then(t=>t.instance.exports)};export{n as default};
//# sourceMappingURL=wasm-inlined.js.map