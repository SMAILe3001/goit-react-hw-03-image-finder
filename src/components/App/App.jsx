import { Component } from 'react';

import CSS from './App.module.css';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { fetchPictures } from 'servises/servise';

export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: false,
    page: 1,
    search: '',
    total: NaN,
  };

  searchPictures = async values => {
    try {
      this.setState({ pictures: [], isLoading: true });
      const pistures = await fetchPictures(values);
      this.setState({
        pictures: pistures.hits,
        page: 2,
        search: values,
        total: pistures.totalHits,
      });
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  nextPagePictures = async () => {
    try {
      const { search, page } = this.state;

      this.setState({ isLoading: true });
      const pistures = await fetchPictures(search, page);
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...pistures.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, pictures, error, total } = this.state;
    return (
      <div className={CSS.App}>
        <Searchbar onSubmit={this.searchPictures} isLoading={isLoading} />
        <ImageGallery
          pistures={pictures}
          totalHits={total}
          onClick={this.nextPagePictures}
          isLoading={isLoading}
        />
        {error && <div>Походу щось зламалося</div>}
      </div>
    );
  }
}
