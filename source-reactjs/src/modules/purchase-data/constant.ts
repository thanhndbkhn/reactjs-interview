export const enum PURCHASE_DATA_STEP {
  SETUP_CONDITION_SEARCH,
  PREIVEW_CONDITON_SEARCH,
  CONFIRM_POLICY,
  FINISH_PROCESS
}

export const LABEL_DISPLAY = {
  REGION: {"ja_jp": "地域", "en_us": "Region","zh_cn": "地域"},
  PREFECTURE: {"ja_jp": "都道府県", "en_us": "Prefecture","zh_cn": "都道府県"},
  MUNICIPALITY : {"ja_jp": "市町村", "en_us": "Municipality","zh_cn": "市町村"},
  TOWNAREA : {"ja_jp": "町域", "en_us": "Town Area","zh_cn": "町域"}
}

export const TYPE_SEARCH = {
  REGION: 'region',
  PREFECTURE: 'prefecture',
  MUNICIPALITY: 'municipality',
  TOWNAREA: 'townArea',
  XX_CLASSIFICATION: 'xxClassification',
  BASIC_CLASSIFICATION: 'basicClassification',
  OCCUPATION_CLASSIFICATION: 'OccupationcClassification'
}

export const DATA_DUMY = {
  region : [
    { regionCode : 1, name:"Bac" },
    { regionCode : 2, name:"Trung" },
    { regionCode : 3, name:"Nam" }
  ],
  prefecture : [
    { prefectureCode : 1, name:"Hai Duong", regionCode : 1 },
    { prefectureCode : 2, name:"Hai Phong", regionCode : 1 },
    { prefectureCode : 3, name:"Nghe An", regionCode : 2 },
    { prefectureCode : 4, name:"Ha Tinh", regionCode : 2 }
  ],
  municipality : [
    { municipalityCode : 1, name:"Tu Ky", prefectureCode : 1 },
    { municipalityCode : 2, name:"Gia Loc", prefectureCode : 1 },
    { municipalityCode : 3, name:"Hong bang", prefectureCode : 2 },
    { municipalityCode : 4, name:"Le Chan", prefectureCode : 2 },
		{ municipalityCode : 5, name:"Anh Son", prefectureCode : 3 },
    { municipalityCode : 6, name:"Do Luong", prefectureCode : 3 },
    { municipalityCode : 7, name:"Nghi Xuan", prefectureCode : 4 },
    { municipalityCode : 8, name:"Can Loc", prefectureCode : 4}
  ],
  townArea : [
    { townAreaCode : 1, name:"Nam Sach", municipalityCode : 1 },
    { townAreaCode : 2, name:"Thanh Tra", municipalityCode : 1 },
    { townAreaCode : 3, name:"An Hai", municipalityCode : 3 },
    { townAreaCode : 4, name:"Cat Hai", municipalityCode : 3 },
    { townAreaCode : 5, name:"Tieu Dien", municipalityCode : 5 },
    { townAreaCode : 6, name:"Xuan An", municipalityCode : 5 },
    { townAreaCode : 7, name:"An Hai", municipalityCode : 7 },
    { townAreaCode : 8, name:"Cat Hai", municipalityCode : 7 }
  ],
  xxClassification : [
    {xxClassificationCode: 1, name: "16 loai "},
    {xxClassificationCode: 2, name: "64 loai"}
  ],
  basicClassification : [
    {basicClassificationCode : 1, name : "Gioi tinh", xxClassificationCode : 1},
    {basicClassificationCode : 2, name : "Do Tuoi", xxClassificationCode : 1},
    {basicClassificationCode : 3, name : "Kinh Nghiem", xxClassificationCode : 2},
    {basicClassificationCode : 4, name : "Ky Nang", xxClassificationCode : 2},
  ],
  occupationcClassification : [
    {occupationClassificationCode : 1, name : "Ky Su", basicClassificationCode : 1},
    {occupationClassificationCode : 2, name : "Lai Xe", basicClassificationCode : 1},
    {occupationClassificationCode : 3, name : "Tho May", basicClassificationCode : 2},
    {occupationClassificationCode : 4, name : "Tho Mo", basicClassificationCode : 2},
    {occupationClassificationCode : 5, name : "IT", basicClassificationCode : 3},
    {occupationClassificationCode : 6, name : "Dau Bep", basicClassificationCode : 3},
    {occupationClassificationCode : 7, name : "Tho May", basicClassificationCode : 4},
    {occupationClassificationCode : 8, name : "Tho Mo", basicClassificationCode : 4}
  ]
}
