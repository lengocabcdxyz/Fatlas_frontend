export type Translation = {
  lang: string;
  word: string;
  sense?: string;
};

export type Word = {
  id: number;
  word: string;
  pos: string;
  definitions: string[];
  translations: Translation[];
};