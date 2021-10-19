import styled from "styled-components"

export const PlayerListWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2!important;

  .header {
    display: flex;
    height: 41px;
    line-height: 41px;
    background: url(${require("@/assets/img/playpanel_bg.png").default}) 0 0;
    font-weight: 700;
    font-size: 14px;
    padding: 0 20px;

    .header-left {
      width: 516px;
      display: flex;
      justify-content: space-between;

      .operator {
        a {
          margin-left: 20px;
          color: #ccc;
          font-weight: normal;
          :hover {
            text-decoration: underline!important;
            color: #f9f9f9;
          }
        }

        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          position: relative;
          top: 4px;
          right: 2px;
        }
  
        .favor {
          background-position: -24px 0;
        }
  
        .delete {
          width: 13px;
          background-position: -51px 0;
        }
      }

    }

    .header-right {
      flex: 1;
      margin-left: 40px;

      .title {
        display: inline-block;
        width: 370px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        font-weight: normal;
      }
    }
  }

  .main {
    display: flex;
    background: url(${require("@/assets/img/playpanel_bg.png").default}) -1014px 0 repeat-y;
    height: 260px;
    
    .main-list {
      width: 555px;
      padding: 2px;

      .play-item {
        padding: 0 8px 0 25px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        height: 28px;
        line-height: 28px;
        color: #ccc;

        &.active {
          color: #fff;
          background-color: #000;

          ::before {
            content: "";
            position: absolute;
            left: 8px;
            width: 10px;
            height: 13px;
            background: url(${require("@/assets/img/playlist_sprite.png").default}) -182px 0;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;

        .singer {
          width: 80px;
        }

        .duration {
           width: 45px;
        }

        .link {
          margin-left: 20px;
          width: 14px;
          height: 16px;
          background-position: -100px 0;
        }
     }
    }

    .main-lyric {
      position: relative;
      flex: 1;
      margin: 21px 0 20px 0;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .item {
          height: 40px;
          text-align: center;
          color: #989898;

          &.active {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
  }


`

// export const HeaderWrapper = styled.div`



//   .header-left {
//     display: flex;
//     justify-content: space-between;
//     color: #e2e2e2;
//   }

// `