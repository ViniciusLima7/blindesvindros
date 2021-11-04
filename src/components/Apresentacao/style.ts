import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    max-width: 992px;
    margin:  auto;
    width: 100%;
    min-width: 320px;
    height:100vh;
    align-items: center;
    justify-content: space-around;
`;

export const Texto = styled.div`
    min-height: 200px;
`;

export const Title = styled.h1`
    color:  #C96C61;
    font-size:48px;
    margin-bottom:10px;
    font-size: 60px;
`;

export const Link = styled.a`
    background-color:   #C96C61;
    color: white;
    text-align: center;
    border-radius:30px;
    width:220px;
    display: block;
    text-decoration: none;
    height:50px;
    line-height: 50px;
    margin-bottom:10px;
    margin-top:10px;
    font-size: 20px;
&:hover{
    background-color: #FFE1DD;
    color: #122A57;
    transition: .3s ease all;
}

`;

export const Image = styled.img`
height: 300px;
width: 400px;
border-radius: 50px;
-webkit-box-reflect: below 5px linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.4));

`;

