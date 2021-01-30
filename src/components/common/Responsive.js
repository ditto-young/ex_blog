import React from 'react';
import styled from 'styled-components';

const ResonsiveBlock = styled.div`
    padding-left:1rem;
    paddging-right:1rem;
    width:1024px;
    margin:0 auto;

    @media (max-width:1024px){
        width:768px;
    }
    @media (max-width:768px){
        width:100%;
    }
`;

const Responsive = ({children, ...rest}) => {
    //style, className, onCick, onMousMove 등의 props를 사용할 수 있도록
    //...rest를 사용하여 ResonsiveBlock 에게 전달
    return <ResonsiveBlock {...rest}>{children}</ResonsiveBlock>;
};

export default Responsive;