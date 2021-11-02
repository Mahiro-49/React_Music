import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;
  .left {
    display: flex;
    align-items: center;
    position: relative;
    .select {
      position: relative;
      width: 70px;
      height: 31px;
      background-position: 0 -760px;
      text-align: center;
      line-height: 31px;
      margin-left: 20px;
      color: #0c73c2 !important;
      cursor: pointer;
    }
  }
  .right {
    width: 46px;
    height: 29px;
    text-align: center;
    line-height: 29px;
    background-position: 0 0;
    color: #fff;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`