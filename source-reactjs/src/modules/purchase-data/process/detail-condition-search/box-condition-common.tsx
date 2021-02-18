import React, { forwardRef, useEffect, useRef, useState } from 'react'
import _ from 'lodash';

type Item = {
  itemId: number,
  itemLabel: string,
  parentCode: number
}

type IBoxConditionCommonProps = {
  items: Item[],
  label: string,
  parentCodes?: number[],
  updateCheckedIds?: number[],
  // just call when user click
  onItemChange: (checkeds: any[]) => void
}

const BoxConditionCommon = forwardRef((props: IBoxConditionCommonProps, ref) => {
  // #region variables
  const fieldRef = useRef(null)  // React.createRef();
  const placeholder = `${props.label}を入力`;
  const [checks, setChecks] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  // #endregion

  // #region functions
  const handleCheck = (evt, item: Item) => {
    if (evt.currentTarget.checked && !checks.filter(e => e.itemId === item.itemId)[0]) {
      checks.push(item);
    } else if (checks.filter(e => e.itemId === item.itemId)[0]) {
      const ido = checks.map(e => e.itemId).indexOf(item.itemId);
      checks.splice(ido, 1);
    }
    setChecks(_.cloneDeep(checks));
    props.onItemChange(checks);
  }

  const isCheck = (item) => {
    return !_.isEmpty(checks.filter(e => e.itemId === item.itemId));
  }

  const handleSearch = (evt) => {
    setTextSearch(evt.target.value);
  }

  const isShow = (item: Item) => {
    // match parent
    if (props.parentCodes && !props.parentCodes.includes(item.parentCode)) {
      return false;
    }
    // match search
    if (_.trim(textSearch).length > 0 && !item.itemLabel.includes(_.trim(textSearch))) {
      return false;
    }
    return true;
  }
  // #endregion

  // #region useEffect
  useEffect(() => {
    if (props.updateCheckedIds) {
      const _checks = props.items.filter(e => props.updateCheckedIds.includes(e.itemId))
      setChecks(_checks);
    }
  }, [props.updateCheckedIds])
  // #endregion

  const renderComponent = () => {
    return <>
      <div className="item" ref={fieldRef}>
        <label className="title">{props.label}</label>
        <div className="item-content">
          <div className="search-box-no-button-style">
            <button className="icon-search">
              <i className="far fa-search"></i>
            </button>
            <input type="text" placeholder={placeholder} onChange={handleSearch} />
          </div>
          <div className="item-content-max">
            <ul className="list-item">
              {!_.isEmpty(props.items) && props.items.filter(e => isShow(e))
                .map(it => <li key={it.itemId}>
                  <p className="check-box-item m-0">
                    <label className="icon-check">
                      <input type="checkbox" checked={isCheck(it)} onChange={(e) => handleCheck(e, it)} /><i></i>{it.itemLabel}</label>
                  </p>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>;
  }
  return renderComponent();
});

export default BoxConditionCommon;

