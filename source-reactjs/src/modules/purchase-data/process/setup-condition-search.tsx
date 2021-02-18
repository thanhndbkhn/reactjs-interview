
import { IRootState } from 'app/shared/reducers';
import { getFieldLabel } from 'app/shared/util/string-utils';
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { PURCHASE_DATA_STEP } from '../constant';
import { DATA_DUMY, LABEL_DISPLAY, TYPE_SEARCH } from '../constant';
import BoxConditionCommon from './detail-condition-search/box-condition-common';
import { useId } from "react-id-generator"
import {
  handleSearchCustomers
} from '../purchase-data-ntt.reducer';
import DisPlayConditionSearch from './detail-condition-search/display-condition-search';
import AreaFilter, { SearchCondition } from './area-filter';
export interface ISetupConditionSearchProps extends StateProps, DispatchProps {
  isNext?: any,
  isPrev?: any
} 
const SetupConditionSearch = (props: ISetupConditionSearchProps) => {
  // #region variables
  // #endregion
  // #region functions
  const handleAreaSearch = (condition: SearchCondition) => {
    props.handleSearchCustomers(condition.regions, condition.prefectures, condition.municipalitys, condition.townAreas)
  }
  // #endregion

  // #region useEffect
  // #endregion

  return (
    <>
      <div className="popup-content-common-wrap layout-overview">
        <div className="popup-content-common-left scroll-table-v2 style-3">
          <div className="popup-content-common-content">
            <label>エリアから絞る</label>
            <div className="item-column item-column-three">
              <AreaFilter onSearch={handleAreaSearch}/>
            </div>
            <div className="tab-detault">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a title="" className="nav-link active" data-toggle="tab">タウンページの業種から絞る</a>
                </li>
                <li className="nav-item">
                  <a title="" className="nav-link " data-toggle="tab">esmsの業種から絞る</a>
                </li>
              </ul>
              <div className="tab-content ">
                <div className="tab-pane active">
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
                        <div className="item-content-max">
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
                                                      東北
                                                  </label>
                              </p>
                            </li>
                            <li>
                              <p className="check-box-item m-0">
                                <label className="icon-check">
                                  <input type="checkbox" name="" /><i></i>
                                                      関東
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
                            <li>
                              <p className="check-box-item m-0">
                                <label className="icon-check">
                                  <input type="checkbox" name="" /><i></i>
                                                      北陸
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
                            </li>
                            <li>
                              <p className="check-box-item m-0">
                                <label className="icon-check">
                                  <input type="checkbox" name="" /><i></i>
                                                      中国
                                                  </label>
                              </p>
                            </li>
                            <li>
                              <p className="check-box-item m-0">
                                <label className="icon-check">
                                  <input type="checkbox" name="" /><i></i>
                                                      四国
                                                  </label>
                              </p>
                            </li>
                            <li>
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
                    <div className="item">
                      <label className="title">地域</label>
                      <div className="item-content">
                        <div className="search-box-no-button-style">
                          <button className="icon-search">
                            <i className="far fa-search"></i>
                          </button>
                          <input type="text" placeholder="テキストを入力" />
                        </div>
                        <div className="item-content-max">
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
                                                      東北
                                                  </label>
                            </p>
                          </li>
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      関東
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
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      北陸
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
                          </li>
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      中国
                                                  </label>
                            </p>
                          </li>
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      四国
                                                  </label>
                            </p>
                          </li>
                          <li>
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
                    <div className="item">
                      <label className="title">地域</label>
                      <div className="item-content">
                        <div className="search-box-no-button-style">
                          <button className="icon-search">
                            <i className="far fa-search"></i>
                          </button>
                          <input type="text" placeholder="テキストを入力" />
                        </div>
                        <div className="item-content-max">
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
                                                      東北
                                                  </label>
                            </p>
                          </li>
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      関東
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
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      北陸
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
                          </li>
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      中国
                                                  </label>
                            </p>
                          </li>
                          <li>
                            <p className="check-box-item m-0">
                              <label className="icon-check">
                                <input type="checkbox" name="" /><i></i>
                                                      四国
                                                  </label>
                            </p>
                          </li>
                          <li>
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
                  <div className="form-group common freeword-search">
                    <label>ファイル</label>
                    <div className="search-box-button-style w-auto">
                      <button className="icon-search"><i className="far fa-search"></i></button>
                      <input type="text" placeholder="タスクを検索" />
                      <button className="icon-fil"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-content-common-right unset-min-height pt-2 v2">
          <DisPlayConditionSearch 
            searchConditions={props.searchCondition}
            dataConditionSearch={props.dataConditionSearch}
          />
          <div className="footer-popup-right bg-white pb-2">
            <div className="font-size-18">esmsに未登録(新規・更新)のデータが</div>
            <div className="record-data text-right"><strong>1,983</strong><span className="font-size-18">件あります</span></div>
            <button className="button-blue" onClick={() => props.isNext(true)}>データ購入の確認をする</button>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ purchaseDataNTT }: IRootState) => ({
  searchCondition : purchaseDataNTT.searchCondition,
  dataConditionSearch: purchaseDataNTT.dataConditionSearch
});

const mapDispatchToProps = {
  handleSearchCustomers
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupConditionSearch);