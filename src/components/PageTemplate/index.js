import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import { Main } from './styles';

const PageTemplate = ({children}) => {
    return (
        <>
            <Menu/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    )
}

export default PageTemplate;