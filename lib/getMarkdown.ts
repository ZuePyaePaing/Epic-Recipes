import fs from "fs";
import matter from "gray-matter";

const getMarkdwonData = (bsepath: string) => {
  const folder = bsepath + "/";
  const file = fs.readdirSync(folder);
  const markdown_file = file.filter((file) => file.endsWith(".md"));

  const loaded_markdown_file = markdown_file.map((file) => {
    const fileContent = fs.readFileSync(`${bsepath}/${file}`, "utf8");
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      cook_time: matterResult.data.cook_time,
      author: matterResult.data.author,
      created_at: matterResult.data.created_at,
      description: matterResult.data.description,
      slug: matterResult.data.title.replace(" ", "_").toLowerCase(),
      modified_title: matterResult.data.title.toLowerCase(),
    };
  });
  return loaded_markdown_file;
};

export default getMarkdwonData;
