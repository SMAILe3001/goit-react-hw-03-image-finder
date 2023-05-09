import { Component } from 'react';
import CSS from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelInputSubmit = e => {
    e.preventDefault();
    const { searchText } = this.state;

    this.props.onSubmit(searchText);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    const { handelInputChange, handelInputSubmit } = this;
    const {
      searchbar,
      searchForm,
      searchFormButton,
      searchFormLabel,
      searchFormInput,
    } = CSS;
    const { isLoading } = this.props;
    const { searchText } = this.state;

    return (
      <header className={searchbar}>
        <form className={searchForm} onSubmit={handelInputSubmit}>
          <button
            type="submit"
            className={searchFormButton}
            disabled={isLoading}
          ></button>
          <label className={searchFormLabel}>
            <input
              className={searchFormInput}
              type="text"
              name="searchText"
              required
              value={searchText}
              onChange={handelInputChange}
            />
          </label>
        </form>
      </header>
    );
  }
}
