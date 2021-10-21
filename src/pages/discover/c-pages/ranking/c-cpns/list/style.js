import styled from "styled-components";

export const RankingListWrapper = styled.div`
  padding: 0 40px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;

    .left {
      display: flex;
      .title {
        font-size: 20px;
      }
      .count-1 {
        margin: auto 0;
        margin-left: 15px;
      }
    }
    .right {
      .count-2 {
        color: #c20c0c;
        font-weight: 700;
        margin-left: 5px;
      }
    }
  }

  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;
      thead {
        .list-header {
          th {
            height: 34px;
            line-height: 34px;
            background-image: url(${require("@/assets/img/sprite_table.png").default});
            color: #666;
            border: 1px solid #ddd;
            border-width: 0 0 1px 1px;
            font-weight: normal;
            text-align: left;
            padding-left: 10px;
          }
          .rank {
            width: 78px;
            border-left: none;
          }
          .duration {
            width: 91px;
          }
          .singer {
            width: 173px;
          }
        }
      }
      tbody {
        td {
          padding: 6px 10px;
        }
        tr:nth-child(2n) {
          background-color: #fff;
        }
        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;
          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }
          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            cursor: pointer;
            :hover {
              background-position: 0 -128px;
            }
          }
          .name {
            margin-left: 10px;
          }
        }
      }

    }
  }


`