const fs = require("fs");
const jsyaml = require("js-yaml");

const readPost = (filename) => {
  const buffer = fs.readFileSync(filename),
    file = buffer.toString("utf8");

  try {
    const parts = file.split(/---\s*[\n^]/),
      frontmatter = parts[1];

    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2],
    };
  } catch (err) {
    console.log(
      `\nCould not read metadata, check the syntax of the metadata and front matter in ${filename}`
    );
  }
};

const buildList = (dir) => {
  return fs.readdirSync(`${dir}/`).reduce((arr, file) => {
    if (file[0] !== ".") arr.push(`${dir}/${file}`);
    return arr;
  }, []);
};

module.exports = {
  buildList,
  readPost,
};
