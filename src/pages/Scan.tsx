import { useState } from "react";
import { supabaseWord } from "./../hooks/clienWord";

type OCRWord = {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  translation?: string;
  part_of_speech?: string;
};

function Scan() {
  const [file, setFile] = useState<File | null>(null);
  const [words, setWords] = useState<OCRWord[]>([]);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(
      "https://tesseract-fatlas-1.onrender.com/ocr",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    // 1. lấy danh sách từ
    const wordsList = data.words
  .map((w: any) =>
    w.text.toLowerCase().replace(/[^a-z0-9]/g, "").trim()
  )
  .filter(Boolean);

const { data: dict } = await supabaseWord
  .from("words")
  .select("word, translations, pos")
  .in("word", wordsList);

const enrichedWords = data.words.map((w: any) => {
  const clean = w.text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();

  const match = dict?.find(
    d => d.word?.toLowerCase().trim() === clean
  );

  return {
    ...w,
    translation: match?.translations?.word,
    part_of_speech: match?.pos,
  };
});
    

    setWords(enrichedWords);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>OCR Upload</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <button onClick={handleUpload}>Upload</button>

      <hr />

      {words.map((word, index) => (
        <div key={index}>
          <strong>{word.text}</strong>

          {word.translation && (
  <div>meaning: {word.translation}</div>
)}
          {word.part_of_speech && (
  <div>type: {word.part_of_speech}</div>
)}

          <div>
            x: {word.x} | y: {word.y}
          </div>

          <div>
            confidence: {word.confidence}
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Scan;