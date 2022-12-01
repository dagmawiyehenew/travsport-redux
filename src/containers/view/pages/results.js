import React from 'react';
import LayoutMain from '../../layout/main';
import { ResultsTable } from '../../../components/tables';

import { connect } from 'react-redux';
import {logoutUser, loginUser} from '../../../actions/authenticate';
import {getResults} from '../../../actions/results';
const Results = (props) => {
  return (
    <LayoutMain>
        <ResultsTable {...props}/>
    </LayoutMain>
  )
}

function mapStateToProps(state) {
  return {
      auth : state.auth,
      race : state.race ?? null
  };
};

export default connect(mapStateToProps,{
  logoutUser,
  loginUser,
  getResults
}  
)(Results);