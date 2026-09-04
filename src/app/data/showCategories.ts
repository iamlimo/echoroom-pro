export type ContentKind =
  | "Live sessions"
  | "Specials"
  | "Behind the scenes"
  | "Podcast"
  | "Stories"
  | "Interviews";

export type ShowItem = {
  id: string;
  category: ContentKind;
  title: string;
  description: string;
  thumbLink: string;
  backgroundVideoUrl: string;
  badge?: string;
  watchLink?: string;
};

export const CONTENT_KINDS: ContentKind[] = [
  "Live sessions",
  "Specials",
  "Behind the scenes",
  "Podcast",
  "Stories",
  "Interviews",
];

const b2 = (path: string) =>
  `https://f005.backblazeb2.com/file/echoroom/${path}`;

export const SHOW_CATEGORY_DATA: Record<ContentKind, ShowItem[]> = {
  "Live sessions": [
    {
      id: "live-leostaytrill",
      category: "Live sessions",
      title: "LEOSTAYTRILL FT. SHODAY",
      description:
        "A live session moving through shadow, rhythm, and intimate cinematic atmosphere.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: "https://f005.backblazeb2.com/file/Echooroom11/new_cuts/shoday+lxt.mp4",
      badge: "Featured",
      watchLink: "https://www.youtube.com/watch?v=lxo0l5Mow_4&list=RDlxo0l5Mow_4&start_radio=1",
    },
     {
      id: "live-leostaytrill",
      category: "Live sessions",
      title: "Odumodublvck - Industry Machine, Legolas & Wage War (Live Performance) | Echooroom Top Notch",
      description:
        "A live session moving through shadow, rhythm, and intimate cinematic atmosphere.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: "https://f005.backblazeb2.com/file/Echooroom11/new_cuts/ODUMODU.mp4",
      badge: "Featured",
      watchLink: "https://www.youtube.com/watch?v=eh8sDn8jXT0&list=RDeh8sDn8jXT0&start_radio=1",
    },
       {
      id: "live-ycee",
      category: "Live sessions",
      title: "ICE PRINCE - JEKINLA, ONLY SON & SLAP THE RING (Live Performance)",
      description:
        "A visually rich performance built around texture, glow, and a subtle cinematic pulse.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: "https://f005.backblazeb2.com/file/Echooroom11/Podcasts/ice+prince.mp4",
      watchLink: "https://www.youtube.com/watch?v=P2jmthJqzBQ&list=RDP2jmthJqzBQ&start_radio=1",
    },
      {
      id: "live-ycee",
      category: "Live sessions",
      title: "Seun Kuti & Vector – Higher Consciousness & The Matter (Live Performance)",
      description:
        "A visually rich performance built around texture, glow, and a subtle cinematic pulse.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: "https://f005.backblazeb2.com/file/Echooroom11/Podcasts/seun+vect.mp4",
      watchLink: "https://f005.backblazeb2.com/file/Echooroom11/Podcasts/seun+vect.mp4",
    },
      {
      id: "live-ycee",
      category: "Live sessions",
      title: "Nasboi Live Rooftop Performance",
      description:
        "A visually rich performance built around texture, glow, and a subtle cinematic pulse.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: "https://f005.backblazeb2.com/file/Echooroom11/Podcasts/NASBOI_COMPLETE_FINAL.+CUTmp4.mp4",
      watchLink: "https://www.youtube.com/watch?v=BmpcMuM4xhU&list=RDBmpcMuM4xhU&start_radio=1",
    },
  ],
  Specials: [

    {
      id: "special-afterglow",
      category: "Specials",
      title: "Afterglow Session",
      description:
        "A cinematic feature set exploring rhythm, ceremony, and visual tension.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("specials/afterglow-session.mp4"),
      watchLink: "/shows?category=Specials",
    },
  ],
  "Behind the scenes": [
    {
      id: "bts-cut-room",
      category: "Behind the scenes",
      title: "The Cut Room Diaries",
      description:
        "A textured preview of the room where every frame is tuned for sound and shadow.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("behind-the-scenes/cut-room-diaries.mp4"),
      badge: "BTS",
      watchLink: "/shows?category=Behind%20the%20scenes",
    },
    {
      id: "bts-engine-room",
      category: "Behind the scenes",
      title: "Engine Room Notes",
      description:
        "A look into the movement, textures, and setup shaping the EchooRoom experience.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("behind-the-scenes/engine-room-notes.mp4"),
      watchLink: "/shows?category=Behind%20the%20scenes",
    },
  ],
  Podcast: [
    {
      id: "podcast-synths",
      category: "Podcast",
      title:
        "CHAOS IN THE FAMILY FT TIKTOKER - RHENIE SISTER || TEDDY A || FOLASADE",
      description: "A deep-dive into influence, and iconic lifestyle.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl:
        "https://f005.backblazeb2.com/file/Echooroom11/Podcasts/Rhennie+sister.mp4",
      badge: "New",
      watchLink: "https://www.youtube.com/watch?v=s97ccnnXwIo",
    },
     {
      id: "podcast-synths",
      category: "Podcast",
      title:
        "APC VS NDC: THE ULTIMATE POLITICAL CLASH | TEDDY A | PRINCEWILL | MOET | FOLASADE",
      description: "A deep-dive into influence, politics and iconic lifestyle.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl:
        "https://f005.backblazeb2.com/file/Echooroom11/new_cuts/APC.mp4",
      badge: "New",
      watchLink: "https://www.youtube.com/watch?v=0b-duRNRAGk",
    },
     {
      id: "podcast-synths",
      category: "Podcast",
      title:
        "GEHGEH DIDN'T HOLD BACK: PELLER, JARVIS, MONEY AND MODERN RELATIONSHIP🔥",
      description: "A deep-dive into influence, politics and iconic lifestyle.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl:
        "https://f005.backblazeb2.com/file/Echooroom11/new_cuts/GEHGEH+UNFILTERED!!++_.mp4",
      badge: "New",
      watchLink: "https://www.youtube.com/watch?v=ADRKAaVbKCk&t=4s",
    },
    {
            id: "podcast-synths",
            category: "Podcast",
            title: "POLYGAMY UNDER FIRE (A Heated Confrontation) Featuring PASTOR JOHN",
            description: "A deep-dive into influence, and iconic lifestyle.",
            thumbLink: "/assets/echoroom-default-thumb.svg",
            backgroundVideoUrl: "https://f005.backblazeb2.com/file/Echooroom11/Podcasts/Pastor+John.MP4",
            badge: "New",
            watchLink: "https://www.youtube.com/watch?v=Ji_cNvUtqPE"
        },
    {
      id: "podcast-goods",
      category: "Podcast",
      title:
        "MAINTENANCE WOMEN VS MALE EGO. FT ASHMUSY | THESLUMFLOWER | TEDDY A | MOET | FOLASADE |SEASON 3 EP1",
      description:
        "A conversation on taste, discipline, and the creative systems behind lasting work.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl:
        "https://youtu.be/rew0JjLR-kk",
      watchLink: "https://www.youtube.com/watch?v=rew0JjLR-kk&t=9s",
    },
    {
      id: "podcast-goods",
      category: "Podcast",
      title:
        "LAGOS DATING SCENE IS SCAM!! | JJ EXCLUSIVE | BUKOLARYY | TEDDY A | MOET | FOLASADE | S3 E7",
      description:
        "A conversation on taste, discipline, and the creative systems behind lasting work.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl:
        "https://f005.backblazeb2.com/file/Echooroom11/new_cuts/Lagos+dating.mp4",
      watchLink: "https://www.youtube.com/watch?v=3bqCzMddGeU&t=3336s",
    },
    {
      id: "podcast-goods",
      category: "Podcast",
      title:
        "NEW AGE RUNS GIRLS .MS JORJI & OMOWUMI | TEDDY A | MOET | FOLASADE.",
      description:
        "A conversation on taste, discipline, and the creative systems behind lasting work.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl:
        "https://f005.backblazeb2.com/file/Echooroom11/new_cuts/new+age+sex+worker.mp4",
      watchLink: "https://www.youtube.com/watch?v=nZG2gcvj5Zc",
    },
  ],
  Stories: [
    {
      id: "story-attention",
      category: "Stories",
      title: "Attention is the new currency",
      description:
        "A reflective narrative on energy, attention, and creative intention.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("stories/attention-new-currency.mp4"),
      badge: "Story",
      watchLink: "/shows?category=Stories",
    },
    {
      id: "story-ritual",
      category: "Stories",
      title: "Rituals of Focus",
      description:
        "An intimate story about the routines that sharpen creative consistency.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("stories/rituals-of-focus.mp4"),
      watchLink: "/shows?category=Stories",
    },
  ],
  Interviews: [
    {
      id: "interview-roundtable",
      category: "Interviews",
      title: "The Creative Roundtable",
      description:
        "A quiet conversation that opens up the creative process and the energy behind it.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("interviews/creative-roundtable.mp4"),
      badge: "Interview",
      watchLink: "/shows?category=Interviews",
    },
    {
      id: "interview-makers",
      category: "Interviews",
      title: "Makers in Motion",
      description:
        "A direct conversation on craft, pressure, and how creative systems evolve.",
      thumbLink: "/assets/echoroom-default-thumb.svg",
      backgroundVideoUrl: b2("interviews/makers-in-motion.mp4"),
      watchLink: "/shows?category=Interviews",
    },
  ],
};

export const ALL_SHOWS = CONTENT_KINDS.flatMap(
  (category) => SHOW_CATEGORY_DATA[category],
);
