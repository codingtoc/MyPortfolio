import { LightningElement } from "lwc";

export default class Career extends LightningElement {
  workExperienceData = {
    heading: "Career History",
    workExperiences: [
      {
        role: "Salesforce CRM 컨설팅팀 부장",
        companyName: "디케이비엠시",
        companyUrl: "https://www.dkbmc.com",
        duration: "2022.12 ~ 2024.07",
        description: "Salesforce CRM 분석, 설계, 개발, 컨설팅"
      },
      {
        role: "SCM설계팀 부장",
        companyName: "더존비즈온",
        companyUrl: "https://www.douzone.com",
        duration: "2019.03 ~ 2022.07",
        description: "ERP SCM 모듈 분석, 설계, 컨설팅"
      },
      {
        role: "ERP설계팀 부장",
        companyName: "더존비즈온",
        companyUrl: "https://www.douzone.com",
        duration: "2010.02 ~ 2018.08",
        description: "ERP 영업/구매/재고/생산/원가 모듈 분석, 설계, 컨설팅"
      },
      {
        role: "ERP컨설팅팀 과장",
        companyName: "더존홀딩스",
        companyUrl: "https://www.douzone.com",
        duration: "2003.06 ~ 2008.12",
        description: "ERP 영업/구매/재고/생산/원가 모듈 분석, 설계, 컨설팅"
      },
      {
        role: "ERP컨설팅팀 사원",
        companyName: "더존디지털웨어",
        companyUrl: "https://www.douzone.com",
        duration: "2001.12 ~ 2003.06",
        description: "ERP 영업/구매/재고 모듈 분석, 설계, 컨설팅"
      }
    ]
  };
}
