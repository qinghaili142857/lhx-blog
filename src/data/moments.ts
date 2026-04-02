import type { MomentEntry } from "@/interface/data";

export const momentFilters = ["All", "Photo", "Note", "Video", "Live", "Sayings"] as const;

export const momentStories = [
  { title: "晨光", subtitle: "操场边 / 06:42", image: "/image/image1.jpg" },
  { title: "晚风", subtitle: "教学楼后 / 18:19", image: "/image/image2.jpg" },
  { title: "实验台", subtitle: "一些正在发生的事", image: "/image/image3.png" },
  { title: "路上", subtitle: "日常的间隙", image: "/image/image4.jpg" },
];

export const moments: MomentEntry[] = [
  {
    slug: "april-morning-light",
    type: "Photo",
    icon: "lucide:images",
    title: "把四月开头的光线留住",
    time: "Today · 07:18",
    date: "2026-04-01 07:18",
    mood: "晴 / 微风 / 适合出门",
    location: "兴庆校区操场边",
    music: "Robin - Hope Is the Thing With Feathers",
    text:
      "天气比预想中温柔很多，走到操场旁边的时候，树影和楼体的边界像被轻轻擦亮了一遍。想把这种很普通、却会让人记很久的清晨存下来。",
    cover: "/image/image1.jpg",
    gallery: ["/image/image2.jpg", "/image/image3.png", "/image/image4.jpg"],
    accent: "aurora",
    badge: "Photo Drop",
  },
  {
    slug: "night-note-on-growth",
    type: "Note",
    icon: "lucide:notebook-tabs",
    title: "夜里写下来的小笔记",
    time: "Yesterday · 23:46",
    date: "2026-03-31 23:46",
    mood: "桌灯 / 咖啡 / 轻音乐",
    location: "宿舍书桌",
    music: "Piano Playlist",
    text:
      "今天突然觉得，成长不是一下子成为更厉害的人，而是学会把很多微小的情绪和愿望都安放好。做研究、读书、生活，其实都需要一点耐心和一点浪漫。",
    noteTitle: "Tonight's Note",
    noteBody:
      "想做一个能同时记录‘认真’与‘生活感’的空间。它不需要总是高强度输出，也可以容纳发呆、散步、拍云、记录一句话。",
    accent: "rose",
    badge: "Notebook",
  },
  {
    slug: "a-day-cut-into-video",
    type: "Video",
    icon: "lucide:clapperboard",
    title: "把一天剪成一段 32 秒的视频",
    time: "Mar 30 · 18:02",
    date: "2026-03-30 18:02",
    mood: "轻快 / 有风 / 稍微电影感",
    location: "图书馆到宿舍的路上",
    music: "City Pop Loop",
    text:
      "从图书馆出来的时候顺手拍了几段，回去以后发现每一帧都很像‘普通日子正在发光’。所以把它放进这里，当作一个带声音的片段存档。",
    cover: "/image/image4.jpg",
    duration: "00:32",
    accent: "copper",
    badge: "Video Log",
  },
  {
    slug: "live-photo-on-the-way-back",
    type: "Live",
    icon: "lucide:sparkles",
    title: "一张带呼吸感的实况照片",
    time: "Mar 28 · 20:15",
    date: "2026-03-28 20:15",
    mood: "夜色 / 霓虹 / 走路回宿舍",
    location: "梧桐道",
    text:
      "它不是传统意义上最清晰的照片，但能把快门前后的一点点空气和动作也留住，所以比静止画面更接近当时的真实。",
    cover: "/image/image2.jpg",
    accent: "nocturne",
    badge: "Live Photo",
  },
  {
    slug: "one-line-for-today",
    type: "Sayings",
    icon: "lucide:message-circle-heart",
    title: "一句今天想留下的话",
    time: "Mar 27 · 14:08",
    date: "2026-03-27 14:08",
    mood: "碎片 / 想法 / 记录",
    location: "教学楼走廊",
    text: "认真生活的人，连平凡的日子都会慢慢发亮。",
    accent: "linen",
    badge: "Short Saying",
  },
];

export function getMomentBySlug(slug: string) {
  return moments.find((item) => item.slug === slug);
}
