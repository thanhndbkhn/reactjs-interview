import React, { forwardRef, useCallback, useState } from 'react'
import _ from 'lodash';
import BoxConditionCommon from './detail-condition-search/box-condition-common';
import { DATA_DUMY, LABEL_DISPLAY, TYPE_SEARCH } from '../constant';
import { getFieldLabel } from 'app/shared/util/string-utils';
import { reCheckChilds } from '../purchase-data-helper';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';

export type SearchCondition = {
  regions: number[],
  prefectures: number[],
  municipalitys: number[],
  townAreas: number[]
}

export interface IAreaFilterProps extends StateProps, DispatchProps {
  onSearch: (condition: SearchCondition) => void
}

const AreaFilter = forwardRef((props: IAreaFilterProps, ref) => {
  // #region variables
  const [regionCheckeds, setRegionCheckeds] = useState([]);
  const [prefectureCheckeds, setPrefectureCheckeds] = useState([]);
  const [municipalityCheckeds, setMunicipalityCheckeds] = useState([]);
  const [townAreaCheckeds, setTownAreaCheckeds] = useState([]);
  const [updatePrefectureIds, setUpdatePrefectureIds] = useState([]);
  const [updateMunicipalityIds, setUpdateMunicipalityIds] = useState([]);
  const [updateTownAreaIds, setUpdateTownAreaIds] = useState([]);
  // #endregion

  // #region functions
  const getInfoData = useCallback((fieldNameCondition) => {
    const _infoData = {
      label: null,
      items: null
    };
    const fieldInfoData = [];
    switch (fieldNameCondition) {
      case TYPE_SEARCH.REGION:
        _infoData.label = getFieldLabel(LABEL_DISPLAY, 'REGION');
        DATA_DUMY[fieldNameCondition].forEach((element, idx) => {
          fieldInfoData.push({
            itemId: element.regionCode,
            itemLabel: element.name,
            parentCode: null
          })
        })
        break;
      case TYPE_SEARCH.PREFECTURE:
        _infoData.label = getFieldLabel(LABEL_DISPLAY, 'PREFECTURE');
        DATA_DUMY[fieldNameCondition].forEach((element, idx) => {
          fieldInfoData.push({
            itemId: element.prefectureCode,
            itemLabel: element.name,
            parentCode: element.regionCode
          })
        })
        break;
      case TYPE_SEARCH.MUNICIPALITY:
        _infoData.label = getFieldLabel(LABEL_DISPLAY, 'MUNICIPALITY');
        DATA_DUMY[fieldNameCondition].forEach((element, idx) => {
          fieldInfoData.push({
            itemId: element.municipalityCode,
            itemLabel: element.name,
            parentCode: element.prefectureCode
          })
        })
        break;
      case TYPE_SEARCH.TOWNAREA:
        _infoData.label = getFieldLabel(LABEL_DISPLAY, 'TOWNAREA');
        DATA_DUMY[fieldNameCondition].forEach((element, idx) => {
          fieldInfoData.push({
            itemId: element.townAreaCode,
            itemLabel: element.name,
            parentCode: element.municipalityCode
          })
        })
        break;
      default:
        break;
    }

    _infoData.items = fieldInfoData;
    return _infoData;
  }, [])

  const handleItemChange = (checkedItems, type) => {
    switch (type) {
      case TYPE_SEARCH.REGION: {
        const preferctureNews = reCheckChilds(regionCheckeds, checkedItems, getInfoData(TYPE_SEARCH.PREFECTURE).items, prefectureCheckeds);
        const municipalityNews = reCheckChilds(prefectureCheckeds, preferctureNews, getInfoData(TYPE_SEARCH.MUNICIPALITY).items, municipalityCheckeds);
        const townAreaNews = reCheckChilds(municipalityCheckeds, municipalityNews, getInfoData(TYPE_SEARCH.TOWNAREA).items, townAreaCheckeds);
        setRegionCheckeds(checkedItems);
        setPrefectureCheckeds(preferctureNews);
        setMunicipalityCheckeds(municipalityNews);
        setTownAreaCheckeds(townAreaNews);
        // update childs
        setUpdatePrefectureIds(preferctureNews.map(e => e.itemId));
        setUpdateMunicipalityIds(municipalityNews.map(e => e.itemId));
        setUpdateTownAreaIds(townAreaNews.map(e => e.itemId));
        props.onSearch({
          regions: checkedItems.map(e => e.itemId),
          prefectures: preferctureNews.map(e => e.itemId),
          municipalitys: municipalityNews.map(e => e.itemId),
          townAreas: townAreaNews.map(e => e.itemId)
        });
      }
        break;
      case TYPE_SEARCH.PREFECTURE: {
        const pMunicipalityNews = reCheckChilds(prefectureCheckeds, checkedItems, getInfoData(TYPE_SEARCH.MUNICIPALITY).items, municipalityCheckeds);
        const pTownAreaNews = reCheckChilds(municipalityCheckeds, pMunicipalityNews, getInfoData(TYPE_SEARCH.TOWNAREA).items, townAreaCheckeds);
        setPrefectureCheckeds(checkedItems);
        setMunicipalityCheckeds(pMunicipalityNews);
        setTownAreaCheckeds(pTownAreaNews);
        // update childs
        setUpdateMunicipalityIds(pMunicipalityNews.map(e => e.itemId));
        setUpdateTownAreaIds(pTownAreaNews.map(e => e.itemId));
        props.onSearch({
          regions: regionCheckeds.map(e => e.itemId),
          prefectures: checkedItems.map(e => e.itemId),
          municipalitys: pMunicipalityNews.map(e => e.itemId),
          townAreas: pTownAreaNews.map(e => e.itemId)
        });
      }
        break;
      case TYPE_SEARCH.MUNICIPALITY: {
        const mTownAreaNews = reCheckChilds(municipalityCheckeds, checkedItems, getInfoData(TYPE_SEARCH.TOWNAREA).items, townAreaCheckeds);
        setMunicipalityCheckeds(checkedItems);
        setTownAreaCheckeds(mTownAreaNews);
        // update childs
        setUpdateTownAreaIds(mTownAreaNews.map(e => e.itemId));
        props.onSearch({
          regions: regionCheckeds.map(e => e.itemId),
          prefectures: prefectureCheckeds.map(e => e.itemId),
          municipalitys: checkedItems.map(e => e.itemId),
          townAreas: mTownAreaNews.map(e => e.itemId)
        });
      }

        break;
      case TYPE_SEARCH.TOWNAREA: {
        setTownAreaCheckeds(checkedItems);
        props.onSearch({
          regions: regionCheckeds.map(e => e.itemId),
          prefectures: prefectureCheckeds.map(e => e.itemId),
          municipalitys: municipalityCheckeds.map(e => e.itemId),
          townAreas: checkedItems.map(e => e.itemId)
        });
      }
        break;
      default:
        break;
    }
  }
  // #endregion

  // #region useEffect
  // #endregion

  const renderComponent = () => {
    return <>
      <BoxConditionCommon {...getInfoData(TYPE_SEARCH.REGION)}
        onItemChange={(items) => handleItemChange(items, TYPE_SEARCH.REGION)}
      />
      <BoxConditionCommon {...getInfoData(TYPE_SEARCH.PREFECTURE)}
        parentCodes={regionCheckeds.map(e => e.itemId)}
        updateCheckedIds={updatePrefectureIds}
        onItemChange={(items) => handleItemChange(items, TYPE_SEARCH.PREFECTURE)}
      />
      <BoxConditionCommon {...getInfoData(TYPE_SEARCH.MUNICIPALITY)}
        parentCodes={prefectureCheckeds.map(e => e.itemId)}
        updateCheckedIds={updateMunicipalityIds}
        onItemChange={(items) => handleItemChange(items, TYPE_SEARCH.MUNICIPALITY)}
      />
      <BoxConditionCommon {...getInfoData(TYPE_SEARCH.TOWNAREA)}
        parentCodes={municipalityCheckeds.map(e => e.itemId)}
        updateCheckedIds={updateTownAreaIds}
        onItemChange={(items) => handleItemChange(items, TYPE_SEARCH.TOWNAREA)}
      />
    </>;
  }
  return renderComponent();
});

const mapStateToProps = ({ purchaseDataNTT }: IRootState) => ({
  searchCondition : purchaseDataNTT.searchCondition
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AreaFilter);

