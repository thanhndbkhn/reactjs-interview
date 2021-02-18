import { IRootState } from 'app/shared/reducers';
import { RouteComponentProps } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { PURCHASE_DATA_STEP } from './constant';
import SetupConditionSearch from 'app/modules/customers/purchase-data/process/setup-condition-search';
import PreviewConditionSearch from 'app/modules/customers/purchase-data/process/preview-condtion-search';
import ConfirmPolicy from 'app/modules/customers/purchase-data/process/confirm-policy';
import FinishProcess from 'app/modules/customers/purchase-data/process/finish-process';

import {
  handleGetListDataCondition
} from './purchase-data-ntt.reducer'

export interface IPurchaseDataNTTProps extends StateProps, DispatchProps {
  dispayPurchaseData: (condition) => void
};

const PurchaseDataNTT = (props: IPurchaseDataNTTProps) => {
  const [currentStep, setCurrentStep] = useState(PURCHASE_DATA_STEP.SETUP_CONDITION_SEARCH);

  useEffect(() => {
    props.handleGetListDataCondition();
  },[])
  const step = currentStep;
  const handleNextStep = () => {
    switch(step){
      case PURCHASE_DATA_STEP.SETUP_CONDITION_SEARCH:
        setCurrentStep(PURCHASE_DATA_STEP.PREIVEW_CONDITON_SEARCH);
        break;
      case PURCHASE_DATA_STEP.PREIVEW_CONDITON_SEARCH:
        setCurrentStep(PURCHASE_DATA_STEP.CONFIRM_POLICY);
        break;
      case PURCHASE_DATA_STEP.CONFIRM_POLICY:
        setCurrentStep(PURCHASE_DATA_STEP.FINISH_PROCESS);
        break;
      default:
        break;
    }
  }
  const handlePrevStep = () => {
    switch(step){
      case PURCHASE_DATA_STEP.FINISH_PROCESS:
        setCurrentStep(PURCHASE_DATA_STEP.CONFIRM_POLICY);
        break;
      case PURCHASE_DATA_STEP.CONFIRM_POLICY:
        setCurrentStep(PURCHASE_DATA_STEP.PREIVEW_CONDITON_SEARCH);
        break;
      case PURCHASE_DATA_STEP.PREIVEW_CONDITON_SEARCH:
        setCurrentStep(PURCHASE_DATA_STEP.SETUP_CONDITION_SEARCH);
        break;
      default:
        break;
    }
  }
  const renderComponent = () => {
    return (
      <div className="modal popup-esr popup-esr4 user-popup-page popup-align-right popup-task popup-modal-common show" id="popup-esr" aria-hidden="true">
        <div className="modal-dialog form-popup">
          <div className="modal-content">
            <div className="modal-header">
              <div className="left">
                <div className="popup-button-back"><a title="" onClick={handlePrevStep} className="icon-small-primary icon-return-small"></a><span className="text"><img className="icon-group-user" title="" src="../../../content/images/ic-sidebar-client.svg" alt="" />顧客情報購入</span></div>
              </div>
              <div className="right">
                <a title="" onClick ={() => props.dispayPurchaseData(false)} className="icon-small-primary icon-close-up-small line"></a>
              </div>
            </div>
            <div className="modal-body style-3 search-townpage two-column-common">
              <div className="popup-content h-calc94">
                <div className="popup-tab position-relative m-0 font-size-12">
                <span className="logo-supplier"><img title="" src="../../../content/images/Logo-customer.svg" alt="" /></span>
                  <ul>
                    <li className={ currentStep === PURCHASE_DATA_STEP.SETUP_CONDITION_SEARCH ? "active" : "pre"}>
                      <a title="">電話帳データの検索</a>
                    </li>
                    <li className={ currentStep === PURCHASE_DATA_STEP.PREIVEW_CONDITON_SEARCH ? "active" : currentStep !== 0 ? "pre" : ""}>
                      <a title="">データ購入の確認</a>
                    </li>
                    <li className={ currentStep === PURCHASE_DATA_STEP.CONFIRM_POLICY ? "active" : currentStep > 1 ? "pre" : "" }>
                      <a className="pl-3" title="">データ登録の確認</a>
                    </li>
                    <li className={ currentStep === PURCHASE_DATA_STEP.FINISH_PROCESS ? "active" : "" }>
                      <a title="">データ登録の完了</a>
                    </li>
                  </ul>
                </div>
                {currentStep === PURCHASE_DATA_STEP.SETUP_CONDITION_SEARCH && props.dataConditionSearch && <SetupConditionSearch isNext={handleNextStep} isPrev={handlePrevStep} />}
                {currentStep === PURCHASE_DATA_STEP.PREIVEW_CONDITON_SEARCH && <PreviewConditionSearch isNext={handleNextStep} isPrev={handlePrevStep} />}
                {currentStep === PURCHASE_DATA_STEP.CONFIRM_POLICY && <ConfirmPolicy isNext={handleNextStep} isPrev={handlePrevStep} />}
                {currentStep === PURCHASE_DATA_STEP.FINISH_PROCESS && <FinishProcess isNext={handleNextStep} isPrev={handlePrevStep} />}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <>
      <Modal isOpen={true} fade={true} toggle={() => { }} backdrop={true} zIndex="auto" id="upload-step-modal">
        {renderComponent()}
      </Modal>
    </>
  )
}

const mapStateToProps = ({ purchaseDataNTT }: IRootState) => ({
  dataConditionSearch : purchaseDataNTT.dataConditionSearch
})

const mapDispatchToProps = {
  handleGetListDataCondition
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseDataNTT);