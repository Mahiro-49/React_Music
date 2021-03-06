import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;

  .left {
    width: 206px;
    .left-top {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 198px;
      height: 198px;

      .cover {
        background-position: -140px -580px;
        width: 206px;
        height: 205px;
        top: -4px;
        left: -4px;
      }
    }

    .left-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;

      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }

      a {
        color: #0c73c2;
        text-decoration: underline!important;
      }
    }
  }

  .right {
    width: 414px;
    margin-left: 20px;

    .title {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }

      .title-name {
        font-size: 24px;
        margin-left: 10px;
      }
    }

    .singer, .album {
      margin: 10px;
      .label {
        color: #999
      }

      a {
        color: #0c73c2
      }
    }

    .lyric-list {
      margin-top: 50px;

      .list {
        display: block;
        padding-top: 10px;
      }
      P:nth-child(n+13) {
        display: ${props => props.isOpen ?  "initial" : "none"};
      }

      .lyric-button {
        position: relative;
        color: #0c73c2;
        background-color: #fff;
        text-decoration: underline;
        cursor: pointer;

        i {
          position: absolute;
          width: 11px;
          height: 8px;
          right: -10px;
          top: 5px;
          background-position: ${props => props.isOpen ? "-46px" : "-65px"} -520px;
        }
      }
    }

    
  }
`