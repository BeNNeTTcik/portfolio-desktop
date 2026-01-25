// fakeHistory.ts
export interface HistoryItem {
  title: string;
  url: string;
  time: string;
}

export interface HistoryGroup {
  label: string;
  items: HistoryItem[];
}

export const FAKE_HISTORY: HistoryGroup[] = [
  {
    label: "Today",
    items: [
      {
        title: "Portfolio",
        url: "http://www.portfolio.mdampc-os.com",
        time: "19:24",
      },
      {
        title: "YT",
        url: "https://yt.com",
        time: "20:55",
      },
        {
        title: "YT",
        url: "https://www.youtube.com/results?search_query=funny+cats",
        time: "18:58",
      },
        {
        title: "YT",
        url: "https://yt.com",
        time: "18:57",
      },
    ],
  },
  {
    label: "Yesterday",
    items: [
      {
        title: "Cv",
        url: "http://www.cv.mdampc-os.com",
        time: "22:11",
      },
      {
        title: "Projects",
        url: "http://www.projects.mdampc-os.com",
        time: "21:43",
      },
    ],
  },
  {
    label: "Old",
    items: [
      {
        title: "Google",
        url: "https://www.google.com",
        time: "10:46",
      },
      {
        title: "GitHub",
        url: "https://github.com",
        time: "12:15",
      },
    ],
  },
];
