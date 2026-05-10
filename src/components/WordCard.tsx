import "./WordCard.css";

import { LANGS } from "../constants/langs";

import type {
  Translation,
  Word,
} from "../types/dictionary";

type Props = {
  item: Word;
};

export default function WordCard({
  item,
}: Props) {
  return (
    <div className="wordCard">
      <div className="wordTitle">
        {item.word}
      </div>

      <div className="wordPos">
        {item.pos}
      </div>

      <div className="sectionTitle">
        Definitions
      </div>

      <ul>
        {Array.isArray(
          item.definitions
        ) &&
          item.definitions
            .slice(0, 5)
            .map((d, index) => (
              <li
                key={index}
                className="definitionItem"
              >
                {d}
              </li>
            ))}
      </ul>

      <div className="sectionTitle">
        Translations
      </div>

      <div>
        {Array.isArray(
          item.translations
        ) &&
          item.translations
            .filter((t) => t.word)
            .slice(0, 10)
            .map(
              (
                t: Translation,
                index: number
              ) => (
                <div
                  key={index}
                  className="translationItem"
                >
                  <span className="lang">
                    {LANGS[t.lang] ||
                      t.lang}
                  </span>
                  : {t.word}
                </div>
              )
            )}
      </div>
    </div>
  );
}