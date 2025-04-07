import { useEffect, useRef } from "react";

export const Paging = ({
  totalElements = 0,
  limit = 10,
  page = 1,
  onPageChange = () => {},
  onLimitChange = () => {},
}) => {
  const totalPages = Math.ceil(totalElements / limit);
  const pageInput = useRef(null);

  useEffect(() => {
    if (pageInput.current) {
      pageInput.current.value = page;
    }
  }, [page, pageInput]);

  return (
    <section className="pagingHolder flex justify-center items-center py-4 px-6 bg-gray-50 rounded-lg shadow-sm">
      {/* Parámetros de paginación (select) */}
      <section className="pagingParameters flex items-center gap-3">
        <span className="text-gray-600 text-sm font-medium">Elementos por página:</span>
        <select
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </section>

      {/* Información de paginación */}
      <section className="pagingInfo flex items-center gap-2 mx-6">
        <span className="text-gray-600 text-sm font-medium">
          Mostrando Página
          <input
            ref={pageInput}
            type="number"
            min="1"
            max={totalPages}
            onChange={(e) => {
              const newPage = Number(e.target.value);
              if (newPage > 0 && newPage <= totalPages) {
                onPageChange(newPage);
              }
            }}
            className="w-12 mx-2 border border-gray-300 rounded-md px-2 py-1 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
          de {totalPages}
        </span>
      </section>

      {/* Navegación (botones) */}
      <section className="pagingNavigator flex gap-3">
        <button
          onClick={() => {
            if (page > 1) {
              onPageChange(page - 1);
            }
          }}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md text-white font-medium transition-all duration-200 transform hover:scale-105 ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            if (page < totalPages) {
              onPageChange(page + 1);
            }
          }}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md text-white font-medium transition-all duration-200 transform hover:scale-105 ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Siguiente
        </button>
      </section>
    </section>
  );
};