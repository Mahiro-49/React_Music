import styled from "styled-components"

export const LoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .font {
    color: #666;
    line-height: 22px;
  }

  .login {
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    margin-top: 15px;

    :hover {
      background-position: -110px -195px;
    }
  }
`