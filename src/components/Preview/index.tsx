import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "../../styles/Button";
import { IBook } from "../Card";
import { Section } from "./styles";

interface IResponseError {
  status: string;
  message: string;
}

const Preview = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function loadBook() {
      try {
        const response = await api.get<IBook>(`/books/${bookId}`);
        setBook(response.data);

        // response.
      } catch (error) {
        if (axios.isAxiosError<IResponseError>(error)) {
          console.log(error.response?.data.message);
        }

        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadBook();
  }, [bookId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!book) {
    return <p>Livro não encontrado</p>;
  }

  return (
    <Section>
      <img src={book.cover} alt={book.name} />
      <aside>
        <div>
          <h1>{book.name}</h1>
          <p>
            {book.published} - {book.publishingCompany}
          </p>
          <p>{book.art}</p>
        </div>

        <Link to={`/book/${book.id}`}>Mais infos</Link>
      </aside>
    </Section>
  );
};

export default Preview;
