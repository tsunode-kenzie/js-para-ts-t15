import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../../components/Card";
import { api } from "../../services/api";

const Info = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBook() {
      setLoading(true);
      try {
        const response = await api.get<IBook>(`/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadBook();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!book) {
    return <p>Livro não encontrado</p>;
  }

  return (
    <main>
      <div>
        <h1>{book.name}</h1>
        <p>
          {book.published} - {book.publishingCompany}
        </p>
        <p>{book.art}</p>
      </div>
    </main>
  );
};

export default Info;
