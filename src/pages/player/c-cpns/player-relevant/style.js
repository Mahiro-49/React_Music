import styled from "styled-components";

export const PlayerRelevant = styled.div`
    margin-top: 50px;
    .same-songs {
        border-bottom: 1px solid #ccc;
        color: #333;
        font-weight: bold;
        margin-bottom: 15px;
        .similar {
            display: block;
            margin-bottom: 5px;
        }
    }
    .song-item {
        display: flex;
        margin-bottom: 20px;
        .info {
            width: 170px;
            display: flex;
            flex-direction: column;
            .info-name {
                cursor: pointer;
                :hover {
                    text-decoration: underline;
                }
            }
            .info-singer {
                color: #999;
                cursor: pointer;
                :hover {
                    text-decoration: underline;
                }
            }
        }
        .icon {
            flex: 1;
            .item {
                display: inline-block;
                width: 10px;
                height: 11px;
                cursor: pointer;
            }
            .play {
                background-position: -69px -455px;
                margin-right: 10px;
            }
            .add {
                background-position: -87px -454px;
            }
        }
    }
`