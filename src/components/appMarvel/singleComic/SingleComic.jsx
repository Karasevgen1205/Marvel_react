import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import useMarvelService from "../../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import AppHeader from "../appHeader/AppHeader";
import "./singleComic.scss";

const SingleComic = () => {
  const { comicID } = useParams();
  const [comic, setComic] = useState(null);
  const { loading, error, getComics, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicID]);

  const updateComic = () => {
    clearError();
    getComics(comicID).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      <AppHeader />
      <section className="single-comic">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {errorMessage}
              {spinner}
              {content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, language, thumbnail, price, pageCount } = comic;

  return (
    <div className="single-comic__wrapper">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/marvel-comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComic;
