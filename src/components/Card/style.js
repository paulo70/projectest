import styled from 'styled-components'

export const CardWrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  overflow: hidden;
  
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: ${props => props.width ? props.width : 'auto'};
`
export const CardImage = styled.div`
  width: 100%;
`

export const CardBody = styled.div`

  &{
    img{
      width: 100%;
      object-fit: contain;
    }

    button{
      width: 90%;
      margin-left: 10px;
      font-size: 12px;
    }

    p{
      padding: 15px 10px 0;
      margin: 0;
      
      color:#6C6667;
      font-weight: bold;
      line-height: 1.5;
      text-align: left;
    }

    p + p {
      padding-top: 8px;  
    }

  }

`