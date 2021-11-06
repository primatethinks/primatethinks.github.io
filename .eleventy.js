module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src/views",
      output: "dist",
      layouts: "../layouts",
      data: "../data"
    }
  }
};
