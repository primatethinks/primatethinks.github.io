module.exports = function(eleventyConfig) {
  /**
   * Global assets
   * Copy `assets/` to `_site/assets/`
   */
  eleventyConfig.addPassthroughCopy('assets');
};
