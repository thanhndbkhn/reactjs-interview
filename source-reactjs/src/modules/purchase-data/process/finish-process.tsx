
import { IRootState } from 'app/shared/reducers';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = ({ customerControlSidebar }: IRootState) => ({
});


export interface IPreviewConditionSearchProps extends StateProps, DispatchProps {
  isNext?: any,
  isPrev?: any
}
const PreviewConditionSearch = (props: IPreviewConditionSearchProps) => {

  return (
    <>
      <div className="popup-content-common-wrap layout-overview">
        <div className="popup-content-common-left scroll-table-v2 style-3">
          <div className="popup-content-common-content">
            <label>エリアから絞る</label>
            <div className="item-column item-column-three">
              <div className="item">
                <label className="title">地域</label>
                <div className="item-content">
                  <div className="search-box-no-button-style">
                    <button className="icon-search">
                      <i className="far fa-search"></i>
                    </button>
                    <input type="text" placeholder="テキストを入力" />
                  </div>
                  <ul className="list-item">
                    <li>
                      <p className="check-box-item m-0">
                        <label className="icon-check">
                          <input type="checkbox" name="" /><i></i>
                                                                北海道
                                                            </label>
                      </p>
                    </li>
                    <li>
                      <p className="check-box-item m-0">
                        <label className="icon-check">
                          <input type="checkbox" name="" /><i></i>
                                                                中部
                                                            </label>
                      </p>
                    </li>
                    <li>
                      <p className="check-box-item m-0">
                        <label className="icon-check">
                          <input type="checkbox" name="" /><i></i>
                                                                関西
                                                            </label>
                      </p>
                    </li>                            </ul>
                </div>
              </div>
              <div className="item">
                <label className="title">地域</label>
                <div className="item-content">
                  <div className="search-box-no-button-style">
                    <button className="icon-search">
                      <i className="far fa-search"></i>
                    </button>
                    <input type="text" placeholder="テキストを入力" />
                  </div>
                  <ul className="list-item">
                    <li>
                      <p className="check-box-item m-0">
                        <label className="icon-check">
                          <input type="checkbox" name="" /><i></i>
                                                                北海道
                                                            </label>
                      </p>
                    </li>
                    <li>
                      <p className="check-box-item m-0">
                        <label className="icon-check">
                          <input type="checkbox" name="" /><i></i>
                                                                信越
                                                            </label>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <label className="title">地域</label>
                <div className="item-content">
                  <div className="search-box-no-button-style">
                    <button className="icon-search">
                      <i className="far fa-search"></i>
                    </button>
                    <input type="text" placeholder="テキストを入力" />
                  </div>
                  <ul className="list-item">                              <li>
                    <p className="check-box-item m-0">
                      <label className="icon-check">
                        <input type="checkbox" name="" /><i></i>
                                                                東北
                                                            </label>
                    </p>
                  </li>                              <li>
                      <p className="check-box-item m-0">
                        <label className="icon-check">
                          <input type="checkbox" name="" /><i></i>
                                                                九州・沖縄
                                                            </label>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4>LAST STEP</h4>
        <div className="popup-content-common-right unset-min-height pt-2 v2">
          <div className="style-3 scroll-table-right v2 pr-2">
            <div className="title">プルダウン編集</div>
            <div className="form-group">
              <button className="button-blue" onClick={() => props.isNext(true)}>Next</button>
            </div>
            <div className="footer-popup-right bg-white pb-2">
              <button className="button-cancel mr-3">キャンセル</button>
              <button className="button-blue">保存</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewConditionSearch);