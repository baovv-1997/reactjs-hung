import { Card } from 'commons/components/Card';
import TitleHeader from 'commons/components/TitleHeader';
import MainLayout from 'layout/MainLayout';
import React from 'react';

const DashboardCompany = () => {
  const cardCompanyData = {
    title: '벤치 벽면',
    listItem: [
      { title: 'power-day', specifications: 100, progress: 5 },
      { title: 'max-power-day', specifications: 500, progress: 30 },
      { title: 'rate-power-day', specifications: 20, progress: 10 },
      { title: 'current-month', specifications: 1621, progress: 35 },
      { title: 'current-year', specifications: 1611, progress: 40 },
      { title: 'amount-power', specifications: 4.1, progress: 45 },
    ],
  };
  return (
    <MainLayout>
      <div className="content-wrap">
        <TitleHeader
          title="설치 업체"
          subTitle="실증단지 내 설치된 업체들의 발전 데이터를 확인하실 수 있습니다."
        />

        <div className="list-company">
          {/* <div className="company-item item-1 company-hasevent">
            <div className="company-name company-hasevent-title">
              LG하우시스
            </div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
                isEvent
              />
            </div>
          </div>

          <div className="company-item item-3">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div>

          <div className="company-item item-2">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div> */}
          <div className="company-item item-1">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div>

          <div className="company-item item-1">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div>

          <div className="company-item item-2 company-hasevent">
            <div className="company-name company-hasevent-title">
              LG하우시스
            </div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
                isEvent
              />
            </div>
          </div>

          <div className="company-item item-1">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div>

          <div className="company-item item-1">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div>

          <div className="company-item item-1">
            <div className="company-name">LG하우시스</div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
              />
            </div>
          </div>

          <div className="company-item item-1 company-hasevent">
            <div className="company-name company-hasevent-title">
              LG하우시스
            </div>

            <div className="list-card-item ">
              <Card
                customClass="header-company"
                isCardCompany
                listItem={cardCompanyData.listItem}
                title={cardCompanyData.title}
                isEvent
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardCompany;
