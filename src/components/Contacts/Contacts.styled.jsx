const { default: styled } = require("styled-components");

export const List = styled.ul`
    list-style: disc;
    padding-left: 50px;
`

export const ListItem=styled.div`
    display: flex;
    align-items: baseline;
    font-size: 20px;

    .item {
        margin-bottom: 15px;
    }
    .btn-delete {
        margin-left: 15px;
        width: 60px;
        height: 20px;
        border-radius: 3px;
        border: 0px;
        background-color: bisque;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            background-color: lightblue;
            transition: transform 250ms ease;
        }
    }
    
`