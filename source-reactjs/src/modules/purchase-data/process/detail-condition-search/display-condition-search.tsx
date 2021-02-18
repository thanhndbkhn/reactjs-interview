import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { DATA_DUMY, LABEL_DISPLAY, TYPE_SEARCH } from '../../constant';

export interface IDisPlayConditionSearchProps extends StateProps, DispatchProps {
  searchConditions,
  dataConditionSearch
}

function DisPlayConditionSearch(props: IDisPlayConditionSearchProps) {

  function renderRegions() {
    return (
      <>
        {props.searchConditions.regions.map((e) =>
          <li key={e}>
            <span className="table-cell" >
              {props.dataConditionSearch.region.map((element) => {
                return (e === element.regionCode ? element.name : "")
              })}
            </span>
          </li>
        )}
      </>
    )
  }

  function renderPrefecture() {
    return (
      <>
        {props.searchConditions.prefectures.map((e) =>
          <li key={e}>
            <span className="table-cell" >
              {props.dataConditionSearch.prefecture.map((element) => {
                return (e === element.prefectureCode ? element.name : "")
              })}
            </span>
          </li>
        )}
      </>
    )
  }

  function renderMunicipality() {
    return (
      <>
        {props.searchConditions.municipalitys.map((e) =>
          <li key={e}>
            <span className="table-cell" >
              {props.dataConditionSearch.municipality.map((element) => {
                return (e === element.municipalityCode ? element.name : "")
              })}
            </span>
          </li>
        )}
      </>
    )
  }

  function renderTownArea() {
    return (
      <>
        {props.searchConditions.townAreas.map((e) =>
          <li key={e}>
            <span className="table-cell" >
              {props.dataConditionSearch.townArea.map((element) => {
                return (e === element.townAreaCode ? element.name : "")
              })}
            </span>
          </li>
        )}
      </>
    )
  }

  return (
    <>
      <div className="style-3 list-fillter">
        <div className="title">現在の検索状況</div>
        <div className="fillter-info">
          <div className="fillter-info-max">
            <ul className="table-layout">
              {renderRegions()}
              {renderPrefecture()}
              {renderMunicipality()}
              {renderTownArea()}
            </ul>
          </div>
          <label>のエリアで</label>
          <div className="fillter-info-max">
            <dl className="list-data-text">
              <dt>
                <span>〇〇〇</span>
                <span></span>
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
          <label>の業種で</label>
          <div className="fillter-info-max">
            <div contentEditable={true}>〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇 AND 〇〇〇</div>
          </div>
          <label>の業種で</label>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ purchaseDataNTT }: IRootState) => ({
  searchCondition: purchaseDataNTT.searchCondition
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisPlayConditionSearch);