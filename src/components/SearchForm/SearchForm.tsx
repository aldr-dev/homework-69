import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectInputValue, selectLoading, selectShows, setInputValue} from '../../store/showsSlice';
import {fetchListShows} from '../../store/showsThunks';
import './SearchForm.css';
import {Link} from 'react-router-dom';
import {AppDispatch} from '../../app/store';


const SearchForm = () => {
  const itemShows = useAppSelector(selectShows);
  const dispatch: AppDispatch = useAppDispatch();
  const inputValue = useAppSelector(selectInputValue);
  const isLoading = useAppSelector(selectLoading);

  const handleFieldInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(fetchListShows(event.target.value));
      dispatch(setInputValue(event.target.value));
  };

  return (
    <>
      <div className="search-form">
        <label className="search-form-label">
          <span className="search-form-title">Search for TV Shows:</span>
          <input
            onChange={handleFieldInput}
            value={inputValue}
            className="search-form-field"
            placeholder="Search for TV Shows"
            type="text"/>
        </label>
        {isLoading === 'fetchLoading' ? (
          <span className="search-form-spinner">Loading...</span>
        ) : null}

        <div className="item-shows-details">
          {itemShows && (
            <div className={`${itemShows.length > 0 ? 'item-shows-inner' : ''}`}>
              {itemShows.length > 0 && itemShows.map((item) => (
                <Link key={item.show.id} className="item-shows-details-item" to={`/shows/${item.show.id}`}>
                  {item.show.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchForm;