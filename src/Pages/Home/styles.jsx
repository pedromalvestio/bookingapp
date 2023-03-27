import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    flex-direction: column;
`;

export const SearchContainer = styled.div`
    background-color: #F5F4F0;
    padding: 1rem;
    border-radius: .5rem;
`;

export const SearchHeader = styled.h1`
    color: white;
`;

export const SearchFields = styled.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

export const SearchButtons = styled.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: right;
`;