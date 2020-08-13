import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import { Main } from './styles';

const PageTemplate = ({children, paddingAll}) => {
    return (
        <>
            <Menu/>
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
            <Footer/>
        </>
    )
}

export default PageTemplate;