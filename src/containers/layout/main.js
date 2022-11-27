import React, { Fragment} from 'react';
import Header from '../../common/header';
const LayoutMain = ({children}) => (
  
  <Fragment>
        <Header  title={'Välkomen åter'} />
      
                {children}
    
    </Fragment>
)

export default LayoutMain;