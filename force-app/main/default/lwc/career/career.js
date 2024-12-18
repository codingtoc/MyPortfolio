import CompanyName from "@salesforce/schema/User.CompanyName";
import { LightningElement } from "lwc";

export default class Career extends LightningElement {
  columns = [
    { label: "기간", fieldName: "Period" },
    {
      label: "회사",
      fieldName: "CompanyUrl",
      type: "url",
      typeAttributes: { label: { fieldName: "CompanyName" }, target: "_blank" }
    },
    { label: "부서", fieldName: "Department" },
    { label: "직위", fieldName: "Title" }
  ];

  rows = [
    {
      Period: "2022.12 ~ 2024.07",
      CompanyUrl: "https://www.dkbmc.com",
      CompanyName: "디케이비엠시",
      Department: "Salesforce CRM 컨설팅팀",
      Title: "부장"
    },
    {
      Period: "2019.03 ~ 2022.07",
      CompanyUrl: "https://www.douzone.com",
      CompanyName: "더존비즈온",
      Department: "SCM설계팀",
      Title: "부장"
    },
    {
      Period: "2010.02 ~ 2018.08",
      CompanyUrl: "https://www.douzone.com",
      CompanyName: "더존비즈온",
      Department: "ERP설계팀",
      Title: "부장"
    },
    {
      Period: "2003.06 ~ 2008.12",
      CompanyUrl: "https://www.douzone.com",
      CompanyName: "더존홀딩스",
      Department: "ERP컨설팅팀",
      Title: "과장"
    },
    {
      Period: "2001.12 ~ 2003.06",
      CompanyUrl: "https://www.douzone.com",
      CompanyName: "더존디지털웨어",
      Department: "ERP컨설팅팀",
      Title: "사원"
    }
  ];
}