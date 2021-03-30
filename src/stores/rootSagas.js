// import libs
import { all } from 'redux-saga/effects';
// sign in
import singInSaga from 'modules/accounts/sagas/signInSaga';
import signUpSaga from 'modules/accounts/sagas/signUpSaga';
import getListCompanySaga from 'modules/accounts/sagas/getListCompanySaga';
import getListAreaSaga from 'modules/accounts/sagas/getListAreaSaga';
import getListInverterSaga from 'modules/accounts/sagas/getListInverterSaga';
import getCompanySaga from 'modules/device/sagas/getCompanySaga';
import getDeviceListSaga from 'modules/device/sagas/getDeviceListSaga';
import getListPositionSaga from 'modules/device/sagas/getListPositionSaga';
import getDeivceDetailSaga from 'modules/device/sagas/getDeivceDetailSaga';
import updateDeviceSaga from 'modules/device/sagas/updateDeviceSaga';
import addDeviceSaga from 'modules/device/sagas/addDeviceSaga';
import getAccountListSaga from 'modules/accounts/sagas/getAccountListSaga';
import updateAccountSaga from 'modules/accounts/sagas/updateAccountSaga';

import getListStatusCompanySaga from 'modules/statusCompany/sagas/getListCompanySaga';
import getListDeviceTestDashboardSaga from 'modules/testDashboard/saga/getListDeviceSaga';
import getListDeviceTestSolarDashboardSaga from 'modules/solarDashboard/saga/getListDeviceSaga';
import getListCompanyInverterSaga from 'modules/main/saga/getListCompanyInverterSaga';
import getListPositionMainSaga from 'modules/main/saga/getListPositionSaga';
import getListCompanyMainSaga from 'modules/main/saga/getListCompanySaga';
import getListDeviceSaga from 'modules/operationStatus/saga/getListDeviceSaga';
import getEventListSaga from 'commons/saga/getEventListSaga';
import deleteEventSaga from 'commons/saga/deleteEventSaga';
import addNewEventSaga from 'commons/saga/addNewEventSaga';

import updateEventSaga from 'commons/saga/updateEventSaga';
import getSearchMainSaga from 'modules/main/saga/getSearchMainSaga';
import getCardMeasureMainSaga from 'modules/main/saga/getCardMeasureMainSaga';
import getDataChartSaga from 'modules/operationStatus/saga/getDataChartSaga';
import deleteAccountSaga from 'modules/accounts/sagas/deleteAccountSaga';
import getCardMeasureSearchPositionSaga from 'modules/main/saga/getCardMeasureSearchPositionSaga';
import getCardMeasureSearchCompanySaga from 'modules/main/saga/getCardMeasureSearchCompanySaga';
import getTrendChartSaga from 'modules/operationStatus/saga/getTrendChartSaga';
import getPosListSaga from 'commons/saga/getPosListSaga';
import getCompanyListSaga from 'commons/saga/getCompanyListSaga';
import getCardInfoSaga from 'modules/operationStatus/saga/getCardInfoSaga';
import getDevicesListSaga from 'commons/saga/getDevicesListSaga';

import getCardInformationSaga from 'modules/testSolarMonitoringStatus/sagas/getCardInformationSaga';
import getDataRawTableSaga from 'modules/testSolarMonitoringStatus/sagas/getDataRawTableSaga';
import getDataTrendChartSagaSaga from 'modules/testSolarMonitoringStatus/sagas/getDataTrendChartSaga';
import getCardMeasureAreaSaga from 'modules/main/saga/getCardMeasureAreaSaga';

import getCardInformationStatisticsGeneratorSaga from 'modules/testSolarMonitoringStatistics/sagas/generator/getCardInformationSaga';
import getDataTrendChartStatisticsGeneratorSaga from 'modules/testSolarMonitoringStatistics/sagas/generator/getTrendChartSaga';
import getDataRawTableGeneratorSaga from 'modules/testSolarMonitoringStatistics/sagas/generator/getTrendRawSaga';

import getCardInformationStatisticsOperationGenerator from 'modules/testSolarMonitoringStatistics/sagas/operation/getCardInformationSaga';
import getDataTrendChartStatisticsOperationSaga from 'modules/testSolarMonitoringStatistics/sagas/operation/getTrendChartSaga';
import getDataRawTableOperationSaga from 'modules/testSolarMonitoringStatistics/sagas/operation/getTrendRawSaga';

import getStatusGeneratorRawSaga from 'modules/statusCompany/sagas/getStatusGeneratorRawSaga';
import getStatusGeneratorCardSaga from 'modules/statusCompany/sagas/getStatusGeneratorCardSaga';
import getStatusGeneratorChartSaga from 'modules/statusCompany/sagas/getStatusGeneratorChartSaga';

import getStatisticOperatorRawDataSaga from 'modules/operationStatistics/saga/getStatisticOperatorRawDataSaga';
import getCardInformationTestMkSaga from 'modules/testMockupStatus/sagas/generator/getCardInformationSaga';
import getDataRawTableTestMkSaga from 'modules/testMockupStatus/sagas/generator/getDataRawTableSaga';
import getDataTrendChartTestMkSaga from 'modules/testMockupStatus/sagas/generator/getDataTrendChartSaga';

import getCardInformationOperationSaga from 'modules/testSolarMonitoringStatus/sagas/operation/getCardInformationOperationSaga';

import getDataRawTableTestOperationSaga from 'modules/testSolarMonitoringStatus/sagas/operation/getDataRawTableSaga';

import getDataTrendChartOperationSagaSaga from 'modules/testSolarMonitoringStatus/sagas/operation/getDataTrendChartSaga';
import getDataRawTableMockupOperationSaga from 'modules/testSolarMonitoringStatus/sagas/operation/getDataRawTableMockupSaga';

import getCardTestMKStatusOperationSaga from 'modules/testMockupStatus/sagas/operation/getCardInformationSaga';
import getDataTestMKRawTableOperationSaga from 'modules/testMockupStatus/sagas/operation/getDataRawTableSaga';
import getDataTestMKChartStatusOperationSaga from 'modules/testMockupStatus/sagas/operation/getDataTrendChartSaga';
import getDataTestMKRawEventTableOperation from 'modules/testMockupStatus/sagas/operation/getDataRawTableEventSaga';

import getCardTestMKStatisticsGeneratorSaga from 'modules/testMockupStatistics/sagas/generator/getCardInformationSaga';
import getTrendChartTestMKStatisticsGeneratorSaga from 'modules/testMockupStatistics/sagas/generator/getTrendChartSaga';
import getDataTestMKRawTableGeneratorSaga from 'modules/testMockupStatistics/sagas/generator/getTrendRawSaga';
import getDataRawTableMockupStatisticGeneratorSaga from 'modules//testMockupStatistics/sagas/generator/getDataRawTableMockupSaga';

import getCardTestMKStatisticsOperationSaga from 'modules/testMockupStatistics/sagas/operation/getCardInformationSaga';
import getDataChartTestMKStatisticsOperationSaga from 'modules/testMockupStatistics/sagas/operation/getTrendChartSaga';
import getDataRawTestMKStatisticOperationSaga from 'modules/testMockupStatistics/sagas/operation/getTrendRawSaga';
import getStatisticOperatorCardSaga from 'modules/operationStatistics/saga/getStatisticOperatorCardSaga';
import getStatisticOperatorChartDataSaga from 'modules/operationStatistics/saga/getStatisticOperatorChartDataSaga';
import getTotalMetricSaga from 'modules/main/saga/getTotalMetricSaga';

export default function* RootSagas() {
  yield all([
    singInSaga(),
    signUpSaga(),
    getListCompanySaga(),
    getListAreaSaga(),
    getListInverterSaga(),
    getListStatusCompanySaga(),
    getCompanySaga(),
    getDeviceListSaga(),
    getListPositionSaga(),
    getDeivceDetailSaga(),
    updateDeviceSaga(),
    addDeviceSaga(),
    getAccountListSaga(),
    updateAccountSaga(),
    getListDeviceTestDashboardSaga(),
    getListDeviceTestSolarDashboardSaga(),
    getListCompanyInverterSaga(),
    getListPositionMainSaga(),
    getListCompanyMainSaga(),
    getListDeviceSaga(),
    getEventListSaga(),
    deleteEventSaga(),
    addNewEventSaga(),
    updateEventSaga(),
    getSearchMainSaga(),
    getCardMeasureMainSaga(),
    getDataChartSaga(),
    deleteAccountSaga(),
    getCardMeasureSearchPositionSaga(),
    getCardMeasureSearchCompanySaga(),
    getTrendChartSaga(),
    getCardMeasureAreaSaga(),
    getPosListSaga(),
    getCompanyListSaga(),
    getCardInfoSaga(),
    getListDeviceSaga(),
    getDevicesListSaga(),
    getTotalMetricSaga(),

    /* Test Solar Monitoring
        + Status of generator
    */
    getCardInformationSaga(),
    getDataRawTableSaga(),
    getDataTrendChartSagaSaga(),

    /* Test Solar Monitoring
        + Status of Operation
    */
    getCardInformationOperationSaga(),
    getDataRawTableTestOperationSaga(),
    getDataTrendChartOperationSagaSaga(),
    getDataRawTableMockupOperationSaga(),

    /* Test Solar Monitoring
        + Statistics of Operation
    */
    getCardInformationStatisticsOperationGenerator(),
    getDataTrendChartStatisticsOperationSaga(),
    getDataRawTableOperationSaga(),

    // status generator company
    getStatusGeneratorRawSaga(),
    getStatusGeneratorChartSaga(),
    getStatusGeneratorCardSaga(),

    /* Test Solar Monitoring
        + Statistics of Generator
    */
    getCardInformationStatisticsGeneratorSaga(),
    getDataTrendChartStatisticsGeneratorSaga(),
    getDataRawTableGeneratorSaga(),

    // Statistics generator
    getStatisticOperatorRawDataSaga(),
    /* Test mockup monitoring
        + Status of Generator
    */
    getCardInformationTestMkSaga(),
    getDataRawTableTestMkSaga(),
    getDataTrendChartTestMkSaga(),

    /* Test mockup monitoring
        + Statistics of Generator
    */
    getCardTestMKStatusOperationSaga(),
    getDataTestMKRawTableOperationSaga(),
    getDataTestMKChartStatusOperationSaga(),
    getDataTestMKRawEventTableOperation(),

    /* Test mockup 
        + Status of generator
    */
    getCardTestMKStatisticsGeneratorSaga(),
    getTrendChartTestMKStatisticsGeneratorSaga(),
    getDataTestMKRawTableGeneratorSaga(),
    getDataRawTableMockupStatisticGeneratorSaga(),

    /* Test mockup 
        + Status of operation
    */
    getCardTestMKStatisticsOperationSaga(),
    getDataChartTestMKStatisticsOperationSaga(),
    getDataRawTestMKStatisticOperationSaga(),

    getStatisticOperatorCardSaga(),
    getStatisticOperatorChartDataSaga(),
  ]);
}
