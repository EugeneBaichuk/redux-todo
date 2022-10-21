import React from "react";
import {connect} from 'react-redux';
import {changeSearchValue} from '../../actions';

import "./style.scss";

const InputSearch = ({searchValue, changeSearchValue}) => {

  // const [searchValue, setSearchValue] = useState('');
  //   const changeSearchValue = (e) => {
  //   setSearchValue(e.target.value);
  //   onSearch(e.target.value);
  // }

  const onChangeSearchVal = (e) => {
    changeSearchValue(e.target.value);
  }

  return (
    <input onChange={onChangeSearchVal} type="text" id="searchField" placeholder="Type here to search..." />
  );
};

const mapStateToProps = ({searchValue, filterList}) => {
  return {searchValue, filterList}
}

const mapDispatchToProps = {
  changeSearchValue
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
