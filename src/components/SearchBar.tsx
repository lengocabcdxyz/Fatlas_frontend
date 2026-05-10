type Props = {
  q: string;
  setQ: (v: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  q,
  setQ,
  onSearch,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 20,
      }}
    >
      <input
        value={q}
        onChange={(e) =>
          setQ(e.target.value)
        }
        placeholder="search..."
        style={{
          flex: 1,
          padding: 10,
        }}
      />

      <button onClick={onSearch}>
        Search
      </button>
    </div>
  );
}