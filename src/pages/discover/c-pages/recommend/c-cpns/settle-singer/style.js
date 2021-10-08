import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  padding: 20px;
  .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 20px;
      background-color: #fafafa;
      border: 1px solid #e9e9e9;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }

  .footer {
    margin-top: 12px;

    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      border-radius: 4px;

      :hover {
        background-color: white;
      }
    }
  }

`