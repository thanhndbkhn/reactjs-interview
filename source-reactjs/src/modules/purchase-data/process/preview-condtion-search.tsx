
import { IRootState } from 'app/shared/reducers';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
export interface IPreviewConditionSearchProps extends StateProps, DispatchProps {
  isNext?: any,
  isPrev?: any
}
const PreviewConditionSearch = (props: IPreviewConditionSearchProps) => {

  const renderAreaSearch = () => {
    const searchRegions = props.searchCondition.regions;
    const dataRegions = props.dataConditionSearch.region;
    return (
      <li>
      {searchRegions.map(searchRegion => {
        return (
          <span key={searchRegion}>
            {dataRegions.map(dataRegion => {
              return (
                searchRegion === dataRegion.regionCode && (<span className="table-cell">{dataRegion.name}</span>)
              )
            })}
          </span>
        )
      })}
      </li>
    )
  }

  return (
    <>
      <div className="popup-tab-content">
        <div className="condition-search">
          <label className="label-bor-btt">エリアから絞る</label>
          <div className="item-column item-column-three">
            <div className="item">
              <label className="title">地域</label>
              <div className="item-content">
                <div className="item-content-max">
                  <div className="fillter-info">
                    <div className="fillter-info-max">
                      <ul className="table-layout">
                        {renderAreaSearch()}
                        {/* <li>
                          <span className="table-cell">東海</span><span>全域</span><span></span>
                        </li>
                        <li>
                          <span>関東</span><span>埼玉県</span><span>戸田市</span>
                        </li>
                        <li>
                          <span></span><span></span><span>さいたま市</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <label className="title">地域</label>
              <div className="item-content">
                <div className="item-content-max">
                  <div className="fillter-info-max">
                    <dl className="list-data-text">
                      <dt>
                        <span>〇〇〇</span>
                        <span>〇〇〇</span>
                      </dt>
                      <dt>
                        <span>〇〇〇</span>
                      </dt>
                      <dt>
                        <span>〇〇〇</span>
                        <span>〇〇〇</span>
                      </dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <label className="title">地域</label>
              <div className="item-content">
                <div className="item-content-max">
                  <div className="fillter-info-max">
                    <div contentEditable={true}>〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center row-arr-btt"><span className="arr-btt-cavas position-relative"></span></div>
          <div className="record-data text-center">
            <span>esmsに未登録(新規・更新)のデータが <strong>1,983</strong>件あります</span>
          </div>
        </div>
        <div className="buy-customer">
          <label className="label-bor-btt">購入対象を選択してください</label>
          <div className="d-flex">
            <div className="form-popup w-50">
              <p className="check-box-item record-data">
                <label className="icon-check font-weight-normal">
                  <input type="checkbox" name="" /><i></i>
                  <span>タウンページで未購入の新規データ<strong>983</strong>件</span>
                </label>
              </p>
            </div>
            <div className="form-popup w-50 position-relative">
              <p className="check-box-item record-data">
                <label className="icon-check font-weight-normal">
                  <input type="checkbox" name="" /><i></i>
                  <span>内 esmsに同一電話番号があるデータ<strong>82</strong>件</span>
                </label>
              </p>
              <a title="" className="button-primary button-activity-registration">購入対象を選択</a>
            </div>
          </div>
          <div>
            <div className="form-popup position-relative d-inline-block">
              <p className="check-box-item record-data">
                <label className="icon-check font-weight-normal">
                  <input type="checkbox" name="" /><i></i>
                  <span>過去にタウンページで購入し更新があるデータ<strong>1,000</strong>件</span>
                </label>
              </p>
              <a title="" className="button-primary button-activity-registration">購入対象を選択</a>
            </div>
          </div>
          <div className="align-center row-arr-btt"><span className="arr-btt-cavas position-relative"></span></div>
          <div className="record-data text-center">
            <span>購入件数<strong>1,983</strong>件 × 9円 ＝ 購入金額<strong>17,847</strong>円（税抜）</span>
          </div>
        </div>
      </div>
      <div className="user-popup-form-bottom user-popup-tab3-form-bottom">
        <button title="" className="button-cancel button-cancel-csv">閉じる</button>
        <button title="" className="button-blue " onClick={() => props.isNext(true)}>購入確認とデータ登録の設定をする</button>
      </div>
    </>
  )
}

const mapStateToProps = ({ purchaseDataNTT }: IRootState) => ({
  searchCondition : purchaseDataNTT.searchCondition,
  dataConditionSearch: purchaseDataNTT.dataConditionSearch
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewConditionSearch);