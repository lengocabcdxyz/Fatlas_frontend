import {
  useEffect,
  useState,
} from "react";

import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import WordCard from "./components/WordCard";

import {
  getWords,
  searchWords,
} from "./services/dictionary";
import "./Dictionary.css";

import type { Word } from "./types/dictionary";

export default function Library() {
  const [q, setQ] = useState("");
  const [results, setResults] =
    useState<Word[]>([]);
  const [page, setPage] =
    useState(1);

  async function search() {
    if (!q.trim()) {
      loadWords();
      return;
    }

    const { data, error } =
      await searchWords(q);

    if (error) {
      console.log(error);
      return;
    }

    setResults(data || []);
  }

  async function loadWords() {
    const { data, error } =
      await getWords(page);

    if (error) {
      console.log(error);
      return;
    }

    setResults(data || []);
  }

  useEffect(() => {
    loadWords();
  }, [page]);

  return (
  <div className="container">
    <div className="wrapper">
      <div className="title">
        Dictionary
      </div>

      <div className="subtitle">
        Search words and translations
      </div>

      <SearchBar
        q={q}
        setQ={setQ}
        onSearch={search}
      />

      {results.map((item) => (
        <WordCard
          key={item.id}
          item={item}
        />
      ))}

      {!q.trim() && (
        <Pagination
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  </div>
);
}