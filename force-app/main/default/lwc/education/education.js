import { LightningElement } from "lwc";

export default class Education extends LightningElement {
  columns = [
    { label: "기간", fieldName: "Period" },
    {
      label: "학교",
      fieldName: "School"
    },
    { label: "학과", fieldName: "Department" },
    { label: "졸업여부", fieldName: "Graduation" }
  ];

  rows = [
    {
      Period: "1994.03 ~ 2002.02",
      School: "아주대학교",
      Department: "산업정보시스템공학",
      Graduation: "졸업"
    },
    {
      Period: "1991.03 ~ 1994.02",
      School: "배문고등학교",
      Department: "이과계열",
      Graduation: "졸업"
    }
  ];
}