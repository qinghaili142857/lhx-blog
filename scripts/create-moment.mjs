import fs from "node:fs/promises";
import path from "node:path";

const cwd = process.cwd();
const outputDir = path.join(cwd, "src", "content", "moments");

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-") || "new-moment";
}

function toDateString(value) {
  return value?.includes("T") ? `${value.replace("T", " ")}:00` : value;
}

function toYamlLine(key, value) {
  if (value === undefined || value === null || value === "")
    return null;
  return `${key}: ${String(value).replace(/\r?\n/g, " ").trim()}`;
}

async function readPayload() {
  const payloadPath = process.argv[2];
  if (payloadPath) {
    const resolved = path.resolve(cwd, payloadPath);
    const raw = await fs.readFile(resolved, "utf8");
    return JSON.parse(raw);
  }

  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  const raw = chunks.join("").trim();
  if (!raw) {
    throw new Error("No payload provided. Pass a JSON file path or pipe JSON into stdin.");
  }
  return JSON.parse(raw);
}

function buildMdx(payload) {
  const slug = payload.slug?.trim() || slugify(payload.title || "");
  const gallery = Array.isArray(payload.gallery)
    ? payload.gallery.map((item) => String(item).trim()).filter(Boolean)
    : [];

  const lines = [
    "---",
    toYamlLine("title", payload.title),
    toYamlLine("description", payload.description),
    toYamlLine("pubDate", toDateString(payload.pubDate)),
    toYamlLine("type", payload.type),
    toYamlLine("icon", payload.icon),
    toYamlLine("badge", payload.badge),
    toYamlLine("mood", payload.mood),
    toYamlLine("accent", payload.accent),
    toYamlLine("cover", payload.cover),
    ...(gallery.length ? ["gallery:", ...gallery.map((item) => `  - ${item}`)] : []),
    toYamlLine("duration", payload.duration),
    toYamlLine("noteTitle", payload.noteTitle),
    toYamlLine("noteBody", payload.noteBody),
    toYamlLine("location", payload.location),
    toYamlLine("music", payload.music),
    toYamlLine("storyTitle", payload.storyTitle),
    toYamlLine("storySubtitle", payload.storySubtitle),
    toYamlLine("draft", payload.draft === true ? "true" : undefined),
    "---",
    "",
    payload.body?.trim() || "",
    "",
  ].filter(Boolean);

  return {
    slug,
    content: lines.join("\n"),
  };
}

async function main() {
  const payload = await readPayload();
  if (!payload.title) {
    throw new Error("Payload must include a title.");
  }

  await fs.mkdir(outputDir, { recursive: true });
  const { slug, content } = buildMdx(payload);
  const outputPath = path.join(outputDir, `${slug}.mdx`);
  await fs.writeFile(outputPath, content, "utf8");
  process.stdout.write(`Created ${path.relative(cwd, outputPath)}\n`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
