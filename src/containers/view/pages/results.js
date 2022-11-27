import React from 'react';
import LayoutMain from '../../layout/main';
import { ResultsTable } from '../../../components/tables';
const Results = (props) => {
  return (
    <LayoutMain>
        <ResultsTable {...props} />
    </LayoutMain>
  )
}

export default Results;