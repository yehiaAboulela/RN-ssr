export interface BlogItem {
  _id: string;
  label_en: string;
  label_ar: string;
  heading_en: string;
  heading_ar: string;
  subHeading_en: string;
  subHeading_ar: string;
  date: string;
  img: string;
  points: Point[];
  __v: number;
}

export interface Point {
  head_en: string;
  body_en: string;
  head_ar: string;
  body_ar: string;
  _id: string;
}
