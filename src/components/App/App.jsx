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
  };

  searchPictures = async values => {
    try {
      this.setState({ isLoading: true });
      const pistures = await fetchPictures(values);
      this.setState({ pictures: [...pistures] });
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, pictures, error } = this.state;
    return (
      <div className={CSS.App}>
        <Searchbar onSubmit={this.searchPictures} isLoading={isLoading} />
        {!isLoading && (
          <ImageGallery pistures={pictures} onClick={this.searchPictures} />
        )}
        {error && <div>Походу все зламалося</div>}
        {isLoading && <div>гружу</div>}
      </div>
    );
  }
}
