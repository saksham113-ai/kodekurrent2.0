export interface Track {
  id: string;
  title: string;
  icon: string;
  description: string;
  problemStatementUrl: string;
}

export interface Stats {
  label: string;
  value: string;
  suffix?: string;
}

export interface TimelineEvent {
  date: string;
  time: string;
  function: string;
  description: string;
  args: string[];
}

export interface Review {
  name: string;
  role: string;
  content: string;
  initial: string;
}

export interface Organizer {
  name: string;
  role: string;
  image?: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
  tag: string;
}