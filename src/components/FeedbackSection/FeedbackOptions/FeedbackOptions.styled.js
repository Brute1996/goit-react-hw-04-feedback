import styled from "@emotion/styled"

export const FeedbackButtonList = styled.ul`
display: flex;
justify-content: space-evenly;
margin: 20px 0;

.feedback-button{
    width: 150px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid grey;

    &:hover,
    &:focus{
        background-color: #a4c2f4;
        box-shadow: 1px 1px 1px black;
    }
}
`