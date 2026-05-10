type Props = {
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  page,
  setPage,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginTop: 20,
      }}
    >
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span>Page {page}</span>

      <button
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}