module.exports = {
  presets: [
    "@babel/preset-env", 
    ["@babel/preset-react", { "runtime": "automatic" } ]
  ]
};
console.log("babel.config running");
