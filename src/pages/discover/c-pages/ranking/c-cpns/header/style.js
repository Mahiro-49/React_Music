import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;

  .image {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    img {
      width: 150px;
      height: 150px;
    }

    .image_cover {
      background-position: -230px -380px;
    }
  }

  .info {
    margin-left: 30px;

    .title {
      font-size: 20px;
      color: #333;
    }

    .time {
      display: flex;
      align-items: center;
      color: #666;
      margin: 8px 0 30px;
      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        position: relative;
        top: 0;
        margin-right: 6px;
      }
      .update {
        color: #999;
      }
    }
  }

`