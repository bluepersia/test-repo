// scoped-css.config.js
module.exports = {
  inputDir: 'src', // Write all your vanilla content here
  outputDir: 'dist', // This is where the converted files will be created
  dontFlatten: false, // Keep compound selectors rather than BEM-style flattening
  useIDs: true, // Use IDs (1, 2, 3, 4) instead of hash (3d0ccd)
  dontHashFirst: false, // The first scope of a certain type doesn't get an ID or hash
  mergeCss: 'merged.css', // Merge all the CSS into one file
  writeRuntimeMap: true, // Write the map needed for runtime auto-BEM
  copyImgs: true, // Copy images to the output folder
  copyJs: true, //Copy JS files - auto-disabled with webpack
  contextSymbol: ':', // Stop the path shortener from affecting content with this symbol in class
  teamRepo: 'dist', // Scan team files for usage and only enable hash/ID if module name is already used
  stripClasses: true, //Strip classes that are never targetted with CSS.
  flattenCombis: [], //Flatten combinators, e.g. > becomes _a_
  strictBEM: true, //Use - instead of __ after the first occurence
  overrideConfig: {},
  globalCss: 'global.css',
};
