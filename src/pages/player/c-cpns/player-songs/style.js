import styled from "styled-components";

export const PlaySongWrapper = styled.div`
  .song-list {
    border-bottom: 1px solid #ccc;
    font-weight: 700;
    margin-bottom: 20px;
    span {
      display: block;
      padding-bottom: 5px;
    }
  }

  .list-item {
    display: flex;
    margin-top: 20px;
    img {
      width: 50px;
      height: 50px;
    }

    .all-name {
      width: 140px;
      margin-left: 10px;

      .name {
        font-size: 14px;
        color: #000;
        :hover {
          text-decoration: underline!important;
        }
      }
    }
  }
`