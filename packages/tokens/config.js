// Just build for DSS in SystemUI for now
const StyleDictionary = require("style-dictionary");
const JsonToTS = require("json-to-ts");

const createPath = (obj, path, value = null) => {
  path = typeof path === "string" ? path.split(".") : path;
  let current = obj;
  while (path.length > 1) {
    const [head, ...tail] = path;
    path = tail;
    if (current[head] === undefined) {
      current[head] = {};
    }
    current = current[head];
  }
  current[path[0]] = value;
  return obj;
};

StyleDictionary.registerFormat({
  name: "javascript/system-ui",
  formatter: (dictionary) => {
    let object = {};
    dictionary.allProperties.forEach((prop) => {
      object = createPath(object, prop.path, prop.value);
    });
    return `const tokens = ${JSON.stringify(object, null, 2)};
module.exports = { tokens };
`;
  },
});

StyleDictionary.registerFormat({
  name: "typescript/system-ui-definitions",
  formatter: (dictionary) => {
    let response = "";
    let object = {};
    dictionary.allProperties.forEach((prop) => {
      object = createPath(object, prop.path, "string");
    });
    JsonToTS(object).forEach((tokensInterface) => {
      response += tokensInterface;
    });

    response = response.replace(/RootObject/gi, "tokens");
    return `declare namespace DSSTokens {
  ${response}
}
export = DSSTokens;
export as namespace DSSTokens;
`;
  },
});

// We will need to change this as more tokens are created
module.exports = {
  source: ["./properties/dss/**/*.json"],
  platforms: {
    web: {
      transformGroup: "js",
      buildPath: "./dist/",
      files: [
        {
          destination: "index.js",
          format: "javascript/system-ui",
        },
        {
          destination: "index.d.ts",
          format: "typescript/system-ui-definitions",
        },
      ],
    },
  },
};
