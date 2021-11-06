module.exports = function(eleventyConfig) {
  /**
   * Global assets
   * Copy `assets/` to `_site/assets/`
   */
  eleventyConfig.addPassthroughCopy('assets');

  /**
   * Global styles
   * Copy `styles/` to `_site/styles/`
   */
   eleventyConfig.addPassthroughCopy('styles');
};
