import React, {useEffect} from 'react';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import {Location, useLocation, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchDetailsShows} from '../../store/showsThunks';
import {selectDetailsShows, selectLoading, showsDetailsValue, showsValue} from '../../store/showsSlice';
import './Home.css';
import {AppDispatch} from '../../app/store';

const Home = () => {
  const location: Location = useLocation();
  const {id} = useParams();
  const itemDetailsShows = useAppSelector(selectDetailsShows);
  const isLoading = useAppSelector(selectLoading);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(showsValue([]));
      dispatch(fetchDetailsShows(Number(id)));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(showsDetailsValue([]));
    }
  }, [dispatch, location.pathname]);

  return (
    <Layout>
      <SearchForm/>
      <div className="shows-details-wrapper">
        {isLoading === 'getLoading' && (
          <div className="details-shows-spinner">
            Loading...
          </div>
        )}
        {itemDetailsShows && isLoading !== 'getLoading' && (
          <>
            {itemDetailsShows.map((item) => (
              <div key={item.id}>
                {item.image ? (
                  <img src={item.image.medium} alt={item.name}/>
                ) : null}
                <p><strong>Name: </strong>{item.name ? item.name : 'Unknown'}</p>
                <p><strong>Language: </strong>{item.language ? item.language : 'No name available'}</p>
                <p><strong>Premiered: </strong>{item.premiered ? item.premiered : 'Unknown'}</p>
                <p><strong>Average Runtime: </strong>{item.runtime ? item.runtime : 'Unknown'}</p>
                <p><strong>Type: </strong>{item.type ? item.type : 'Unknown'}</p>
                <div dangerouslySetInnerHTML={{__html: item.summary ? item.summary : ''}}/>
                {item.officialSite && (
                  <a className="show-details-btn" href={item.officialSite} target="_blank" rel="noopener noreferrer">Official
                    WebSite</a>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;