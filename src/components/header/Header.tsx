import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ic_delete from "../../img/ic_delete.png";
import ic_help from "../../img/ic_help.png";
import "./Header.css";

const Header: FC = () => {
  const [showModal, setShowModal] = useState(false)

  return <div className="header-root">
    <div className="header-title">ボロノイ MAP</div>
    <img
      className="icon help"
      alt="help"
      src={ic_help}
      onClick={() => setShowModal(true)}></img>
    <CSSTransition
      className="modal-container help"
      in={showModal}
      timeout={300}>
      <div className="modal-container help">
        <img
          className="icon close"
          alt="close"
          src={ic_delete}
          onClick={() => setShowModal(false)}></img>
        <div className="modal-title-container">
          <img className="icon title" src={ic_help}></img>
          <div className="modal-title">地図の説明</div>
        </div>
        <div className="modal-text description">各駅に最も近い範囲を地図上に描画しています</div>
        <div className="modal-text euclid">緯度経度の値を擬似的に正規直交座標系に当てはめてユークリッド距離で計算（ゲーム仕様）</div>
        <div className="modal-text sphere">地球を完全な球体を仮定して測地的距離（本当の最短距離）で計算</div>
        <a className="data-version" href={process.env.REACT_APP_DATA_REPO}>
          データバージョン：{process.env.REACT_APP_DATA_VERSION}
        </a>
      </div>
    </CSSTransition>
  </div>
}

export default Header