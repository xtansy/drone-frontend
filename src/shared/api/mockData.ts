/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ВРЕМЕННЫЕ МОК-ДАННЫЕ  ⚠️  СГЕНЕРИРОВАНО из /dataExamples — УДАЛИТЬ С ./mocks.ts
 * ─────────────────────────────────────────────────────────────────────────────
 *  Реальные SD-данные объектов Воронежа (координаты в EPSG:3857, как в OpenLayers).
 *  _id проставлены синтетически, устройства дедуплицированы по serialNumber.
 *  Форма соответствует моделям drone-backend (см. drone-backend/models/*).
 *  Регенерация при изменении dataExamples: см. коммит, где добавлялся мок.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { PointModel, PolygonModel } from "../types";

export const mockPolygons: PolygonModel[] = [
  {
    "_id": "plg000000000000000000001",
    "coordinates": [
      [
        4364578.48960449,
        6738297.108359874
      ],
      [
        4364540.475824477,
        6738419.653279074
      ],
      [
        4364400.597952719,
        6738385.7171447715
      ],
      [
        4364299.726814394,
        6738518.949016774
      ],
      [
        4364290.656808279,
        6738356.067580247
      ],
      [
        4364186.805278284,
        6738297.108359874
      ],
      [
        4364242.551480903,
        6738203.198573339
      ],
      [
        4364306.867979852,
        6738097.245950338
      ],
      [
        4364404.524171812,
        6738196.415915108
      ],
      [
        4364576.197207521,
        6738148.610336735
      ],
      [
        4364578.48960449,
        6738297.108359874
      ]
    ],
    "points": [
      {
        "_id": "pnt000000000000000000001",
        "latitude": 6738217.368408009,
        "longitude": 4364248.609259135,
        "measurements": [
          {
            "_id": "mea000000000000000000001",
            "temperature": 23.1,
            "co2_level": 450,
            "humidity": 52,
            "pressure": 1012,
            "createdAt": "2025-05-01T08:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000001",
              "name": "Sensor-X200",
              "manufacturer": "EcoTech",
              "serialNumber": "ET-88741"
            }
          },
          {
            "_id": "mea000000000000000000002",
            "temperature": 25.7,
            "co2_level": 520,
            "humidity": 48,
            "pressure": 1011,
            "createdAt": "2025-05-01T12:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000001",
              "name": "Sensor-X200",
              "manufacturer": "EcoTech",
              "serialNumber": "ET-88741"
            }
          },
          {
            "_id": "mea000000000000000000003",
            "temperature": 21.3,
            "co2_level": 410,
            "humidity": 60,
            "pressure": 1013,
            "createdAt": "2025-05-01T05:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000002",
              "name": "ClimateGuard Pro",
              "manufacturer": "AtmoSense",
              "serialNumber": "AS-45632"
            }
          },
          {
            "_id": "mea000000000000000000004",
            "temperature": 26.5,
            "co2_level": 680,
            "humidity": 45,
            "pressure": 1010,
            "createdAt": "2025-05-01T15:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000003",
              "name": "AirQuality Monitor 5",
              "manufacturer": "CleanAir Labs",
              "serialNumber": "CAL-78901"
            }
          },
          {
            "_id": "mea000000000000000000005",
            "temperature": 19.8,
            "co2_level": 390,
            "humidity": 65,
            "pressure": 1014,
            "createdAt": "2025-05-01T22:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000001",
              "name": "Sensor-X200",
              "manufacturer": "EcoTech",
              "serialNumber": "ET-88741"
            }
          },
          {
            "_id": "mea000000000000000000006",
            "temperature": 24.2,
            "co2_level": 580,
            "humidity": 50,
            "pressure": 1012,
            "createdAt": "2025-05-02T10:20:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000004",
              "name": "EnviroTrack V2",
              "manufacturer": "GreenSensors",
              "serialNumber": "GS-33456"
            }
          },
          {
            "_id": "mea000000000000000000007",
            "temperature": 27.1,
            "co2_level": 710,
            "humidity": 42,
            "pressure": 1009,
            "createdAt": "2025-05-02T14:50:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000003",
              "name": "AirQuality Monitor 5",
              "manufacturer": "CleanAir Labs",
              "serialNumber": "CAL-78901"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000001",
          "name": "ВГУ",
          "latitude": 6738285,
          "longitude": 4364393
        }
      },
      {
        "_id": "pnt000000000000000000002",
        "latitude": 6738155.108308361,
        "longitude": 4364285.339857416,
        "measurements": [
          {
            "_id": "mea000000000000000000008",
            "temperature": 22.7,
            "co2_level": 420,
            "humidity": 48,
            "pressure": 1013,
            "createdAt": "2025-05-01T09:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000005",
              "name": "ClimateGuard",
              "manufacturer": "AirQ",
              "serialNumber": "AQ-55632"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000001",
          "name": "ВГУ",
          "latitude": 6738285,
          "longitude": 4364393
        }
      },
      {
        "_id": "pnt000000000000000000003",
        "latitude": 6738281.984685328,
        "longitude": 4364534.86611623,
        "measurements": [
          {
            "_id": "mea000000000000000000009",
            "temperature": 24.3,
            "co2_level": 380,
            "humidity": 44,
            "pressure": 1011,
            "createdAt": "2025-05-01T10:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000006",
              "name": "AtmoProbe",
              "manufacturer": "SkyMetrics",
              "serialNumber": "SM-30987"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000001",
          "name": "ВГУ",
          "latitude": 6738285,
          "longitude": 4364393
        }
      }
    ],
    "organizationPoint": {
      "_id": "org000000000000000000001",
      "name": "ВГУ",
      "latitude": 6738285,
      "longitude": 4364393
    }
  },
  {
    "_id": "plg000000000000000000002",
    "coordinates": [
      [
        4364106.736915316,
        6741960.70639741
      ],
      [
        4364119.454610542,
        6741992.892596702
      ],
      [
        4364137.826779302,
        6741985.624844141
      ],
      [
        4364148.6876654215,
        6742013.116277998
      ],
      [
        4364167.899517102,
        6742005.517468854
      ],
      [
        4364151.309573389,
        6741963.535289386
      ],
      [
        4364218.024012138,
        6741937.172668188
      ],
      [
        4364234.2594032725,
        6741978.537517045
      ],
      [
        4364222.624067456,
        6741987.400312192
      ],
      [
        4364221.476363506,
        6742000.100395466
      ],
      [
        4364231.255001536,
        6742007.533680256
      ],
      [
        4364244.877724221,
        6742006.0440067835
      ],
      [
        4364246.566663536,
        6742009.896190206
      ],
      [
        4364248.39542013,
        6742014.049254558
      ],
      [
        4364199.148011362,
        6742033.505529422
      ],
      [
        4364211.175303106,
        6742063.976672068
      ],
      [
        4364215.728715557,
        6742062.170847872
      ],
      [
        4364234.735294096,
        6742110.292726024
      ],
      [
        4364252.165032048,
        6742103.400971538
      ],
      [
        4364233.167693027,
        6742055.294214118
      ],
      [
        4364312.105345824,
        6742024.115965354
      ],
      [
        4364320.624292495,
        6742015.854888547
      ],
      [
        4364320.8202148,
        6742004.012715911
      ],
      [
        4364312.5812366465,
        6741995.480761218
      ],
      [
        4364300.712575178,
        6741995.285262044
      ],
      [
        4364283.012330864,
        6742002.282124704
      ],
      [
        4364269.240217421,
        6741967.402532431
      ],
      [
        4364265.078760897,
        6741956.869496575
      ],
      [
        4364239.223362006,
        6741891.414110739
      ],
      [
        4364144.06901975,
        6741928.986898716
      ],
      [
        4364138.946430742,
        6741916.858877241
      ],
      [
        4364121.638031035,
        6741924.156727722
      ],
      [
        4364131.827104027,
        6741950.805462781
      ],
      [
        4364106.736915316,
        6741960.70639741
      ]
    ],
    "points": [
      {
        "_id": "pnt000000000000000000004",
        "latitude": 6742097.263582661,
        "longitude": 4364233.00294018,
        "measurements": [
          {
            "_id": "mea000000000000000000010",
            "temperature": 22.8,
            "co2_level": 480,
            "humidity": 55,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000011",
            "temperature": 25.3,
            "co2_level": 520,
            "humidity": 48,
            "pressure": 1011,
            "createdAt": "2025-05-01T14:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000012",
            "temperature": 20.1,
            "co2_level": 410,
            "humidity": 62,
            "pressure": 1013,
            "createdAt": "2025-05-01T06:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000008",
              "name": "NightMonitor",
              "manufacturer": "EcoVarsity",
              "serialNumber": "EV-77892"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000002",
          "name": "ВГМУ им. Бурденко",
          "latitude": 6741990.357750936,
          "longitude": 4364251.50423955
        }
      },
      {
        "_id": "pnt000000000000000000005",
        "latitude": 6742045.901932047,
        "longitude": 4364225.243971672,
        "measurements": [
          {
            "_id": "mea000000000000000000013",
            "temperature": 23.5,
            "co2_level": 510,
            "humidity": 52,
            "pressure": 1012,
            "createdAt": "2025-05-01T10:20:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000014",
            "temperature": 19.7,
            "co2_level": 390,
            "humidity": 67,
            "pressure": 1014,
            "createdAt": "2025-05-01T22:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000015",
            "temperature": 26.2,
            "co2_level": 590,
            "humidity": 45,
            "pressure": 1010,
            "createdAt": "2025-05-01T15:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000010",
              "name": "SolarTrack V3",
              "manufacturer": "SunMetrics",
              "serialNumber": "SM-11223"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000002",
          "name": "ВГМУ им. Бурденко",
          "latitude": 6741990.357750936,
          "longitude": 4364251.50423955
        }
      },
      {
        "_id": "pnt000000000000000000006",
        "latitude": 6742031.576020964,
        "longitude": 4364277.174514127,
        "measurements": [
          {
            "_id": "mea000000000000000000016",
            "temperature": 21.9,
            "co2_level": 430,
            "humidity": 58,
            "pressure": 1013,
            "createdAt": "2025-05-01T08:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000017",
            "temperature": 24.8,
            "co2_level": 540,
            "humidity": 50,
            "pressure": 1011,
            "createdAt": "2025-05-01T13:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000018",
            "temperature": 18.5,
            "co2_level": 380,
            "humidity": 70,
            "pressure": 1014,
            "createdAt": "2025-05-01T05:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000012",
              "name": "DawnPatrol",
              "manufacturer": "MorningLabs",
              "serialNumber": "ML-33445"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000002",
          "name": "ВГМУ им. Бурденко",
          "latitude": 6741990.357750936,
          "longitude": 4364251.50423955
        }
      },
      {
        "_id": "pnt000000000000000000007",
        "latitude": 6741948.565223606,
        "longitude": 4364239.570790136,
        "measurements": [
          {
            "_id": "mea000000000000000000019",
            "temperature": 22.3,
            "co2_level": 470,
            "humidity": 56,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          },
          {
            "_id": "mea000000000000000000020",
            "temperature": 26.7,
            "co2_level": 610,
            "humidity": 44,
            "pressure": 1010,
            "createdAt": "2025-05-01T16:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000014",
              "name": "HeatMap X1",
              "manufacturer": "ThermoUni",
              "serialNumber": "TU-88901"
            }
          },
          {
            "_id": "mea000000000000000000021",
            "temperature": 20.5,
            "co2_level": 420,
            "humidity": 63,
            "pressure": 1013,
            "createdAt": "2025-05-01T07:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000002",
          "name": "ВГМУ им. Бурденко",
          "latitude": 6741990.357750936,
          "longitude": 4364251.50423955
        }
      },
      {
        "_id": "pnt000000000000000000008",
        "latitude": 6741939.60714541,
        "longitude": 4364186.44912913,
        "measurements": [
          {
            "_id": "mea000000000000000000022",
            "temperature": 23,
            "co2_level": 490,
            "humidity": 54,
            "pressure": 1012,
            "createdAt": "2025-05-01T11:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          },
          {
            "_id": "mea000000000000000000023",
            "temperature": 27.3,
            "co2_level": 650,
            "humidity": 42,
            "pressure": 1009,
            "createdAt": "2025-05-01T17:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000016",
              "name": "PeakHeat Sensor",
              "manufacturer": "MaxThermo",
              "serialNumber": "MT-77654"
            }
          },
          {
            "_id": "mea000000000000000000024",
            "temperature": 19.2,
            "co2_level": 400,
            "humidity": 68,
            "pressure": 1014,
            "createdAt": "2025-05-01T23:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000002",
          "name": "ВГМУ им. Бурденко",
          "latitude": 6741990.357750936,
          "longitude": 4364251.50423955
        }
      }
    ],
    "organizationPoint": {
      "_id": "org000000000000000000002",
      "name": "ВГМУ им. Бурденко",
      "latitude": 6741990.357750936,
      "longitude": 4364251.50423955
    }
  },
  {
    "_id": "plg000000000000000000003",
    "coordinates": [
      [
        4362760.887165933,
        6737569.578035074
      ],
      [
        4362828.68396409,
        6737615.98906923
      ],
      [
        4362837.520171312,
        6737603.070294629
      ],
      [
        4362853.335665327,
        6737614.184412017
      ],
      [
        4362849.164857966,
        6737620.275176567
      ],
      [
        4362957.680767383,
        6737694.6296657985
      ],
      [
        4362994.415754067,
        6737641.029491891
      ],
      [
        4363011.154977217,
        6737615.056597164
      ],
      [
        4363044.027066251,
        6737567.066637011
      ],
      [
        4363004.819451038,
        6737539.2591947755
      ],
      [
        4363024.339323748,
        6737511.722596589
      ],
      [
        4363004.875444741,
        6737497.916922868
      ],
      [
        4363013.161065761,
        6737486.231504599
      ],
      [
        4363021.65207124,
        6737492.262246249
      ],
      [
        4363122.843380803,
        6737348.32517265
      ],
      [
        4363182.550480246,
        6737389.666684121
      ],
      [
        4363183.47420938,
        6737390.40356243
      ],
      [
        4363193.075515461,
        6737397.336537419
      ],
      [
        4363233.225450165,
        6737331.662172528
      ],
      [
        4363224.799900545,
        6737333.391590554
      ],
      [
        4363222.644532564,
        6737278.064390778
      ],
      [
        4363239.495743122,
        6737251.927412103
      ],
      [
        4363246.633660192,
        6737250.212903009
      ],
      [
        4363253.10922629,
        6737241.56572559
      ],
      [
        4363168.405223871,
        6737188.194242463
      ],
      [
        4363163.002666343,
        6737176.5243401015
      ],
      [
        4363071.403312025,
        6737116.686660252
      ],
      [
        4363060.589068771,
        6737113.438369339
      ],
      [
        4363022.566449538,
        6737170.689395188
      ],
      [
        4363044.605593645,
        6737205.473422059
      ],
      [
        4363064.265283636,
        6737219.098285949
      ],
      [
        4363073.558680004,
        6737213.909926477
      ],
      [
        4363128.880348108,
        6737255.175758327
      ],
      [
        4363063.042995626,
        6737346.249831367
      ],
      [
        4363008.029237235,
        6737422.376286863
      ],
      [
        4362908.489463638,
        6737357.378489605
      ],
      [
        4362906.492614612,
        6737360.506487506
      ],
      [
        4362902.125884947,
        6737366.777737581
      ],
      [
        4362883.361871579,
        6737393.636892672
      ],
      [
        4362878.948499047,
        6737399.938310902
      ],
      [
        4362872.333004348,
        6737409.006756639
      ],
      [
        4362860.417700012,
        6737425.444203774
      ],
      [
        4362775.228455932,
        6737549.876759805
      ],
      [
        4362760.887165933,
        6737569.578035074
      ]
    ],
    "points": [
      {
        "_id": "pnt000000000000000000009",
        "latitude": 6737450.987654321,
        "longitude": 4362905.123456789,
        "measurements": [
          {
            "_id": "mea000000000000000000025",
            "temperature": 22.8,
            "co2_level": 480,
            "humidity": 55,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000026",
            "temperature": 25.3,
            "co2_level": 520,
            "humidity": 48,
            "pressure": 1011,
            "createdAt": "2025-05-01T14:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000027",
            "temperature": 20.1,
            "co2_level": 410,
            "humidity": 62,
            "pressure": 1013,
            "createdAt": "2025-05-01T06:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000008",
              "name": "NightMonitor",
              "manufacturer": "EcoVarsity",
              "serialNumber": "EV-77892"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000003",
          "name": "ВГТУ",
          "latitude": 6737531.83232609,
          "longitude": 4362862.092279111
        }
      },
      {
        "_id": "pnt000000000000000000010",
        "latitude": 6737413.342095558,
        "longitude": 4363033.602218577,
        "measurements": [
          {
            "_id": "mea000000000000000000028",
            "temperature": 23.5,
            "co2_level": 510,
            "humidity": 52,
            "pressure": 1012,
            "createdAt": "2025-05-01T10:20:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000029",
            "temperature": 19.7,
            "co2_level": 390,
            "humidity": 67,
            "pressure": 1014,
            "createdAt": "2025-05-01T22:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000030",
            "temperature": 26.2,
            "co2_level": 590,
            "humidity": 45,
            "pressure": 1010,
            "createdAt": "2025-05-01T15:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000010",
              "name": "SolarTrack V3",
              "manufacturer": "SunMetrics",
              "serialNumber": "SM-11223"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000003",
          "name": "ВГТУ",
          "latitude": 6737531.83232609,
          "longitude": 4362862.092279111
        }
      },
      {
        "_id": "pnt000000000000000000011",
        "latitude": 6737300.345678912,
        "longitude": 4363100.567890123,
        "measurements": [
          {
            "_id": "mea000000000000000000031",
            "temperature": 21.9,
            "co2_level": 430,
            "humidity": 58,
            "pressure": 1013,
            "createdAt": "2025-05-01T08:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000032",
            "temperature": 24.8,
            "co2_level": 540,
            "humidity": 50,
            "pressure": 1011,
            "createdAt": "2025-05-01T13:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000033",
            "temperature": 18.5,
            "co2_level": 380,
            "humidity": 70,
            "pressure": 1014,
            "createdAt": "2025-05-01T05:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000012",
              "name": "DawnPatrol",
              "manufacturer": "MorningLabs",
              "serialNumber": "ML-33445"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000003",
          "name": "ВГТУ",
          "latitude": 6737531.83232609,
          "longitude": 4362862.092279111
        }
      },
      {
        "_id": "pnt000000000000000000012",
        "latitude": 6737520.567890123,
        "longitude": 4362950.987654321,
        "measurements": [
          {
            "_id": "mea000000000000000000034",
            "temperature": 22.3,
            "co2_level": 470,
            "humidity": 56,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          },
          {
            "_id": "mea000000000000000000035",
            "temperature": 26.7,
            "co2_level": 610,
            "humidity": 44,
            "pressure": 1010,
            "createdAt": "2025-05-01T16:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000014",
              "name": "HeatMap X1",
              "manufacturer": "ThermoUni",
              "serialNumber": "TU-88901"
            }
          },
          {
            "_id": "mea000000000000000000036",
            "temperature": 20.5,
            "co2_level": 420,
            "humidity": 63,
            "pressure": 1013,
            "createdAt": "2025-05-01T07:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000003",
          "name": "ВГТУ",
          "latitude": 6737531.83232609,
          "longitude": 4362862.092279111
        }
      },
      {
        "_id": "pnt000000000000000000013",
        "latitude": 6737200.749399653,
        "longitude": 4363105.247442851,
        "measurements": [
          {
            "_id": "mea000000000000000000037",
            "temperature": 23,
            "co2_level": 490,
            "humidity": 54,
            "pressure": 1012,
            "createdAt": "2025-05-01T11:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          },
          {
            "_id": "mea000000000000000000038",
            "temperature": 27.3,
            "co2_level": 650,
            "humidity": 42,
            "pressure": 1009,
            "createdAt": "2025-05-01T17:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000016",
              "name": "PeakHeat Sensor",
              "manufacturer": "MaxThermo",
              "serialNumber": "MT-77654"
            }
          },
          {
            "_id": "mea000000000000000000039",
            "temperature": 19.2,
            "co2_level": 400,
            "humidity": 68,
            "pressure": 1014,
            "createdAt": "2025-05-01T23:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000003",
          "name": "ВГТУ",
          "latitude": 6737531.83232609,
          "longitude": 4362862.092279111
        }
      }
    ],
    "organizationPoint": {
      "_id": "org000000000000000000003",
      "name": "ВГТУ",
      "latitude": 6737531.83232609,
      "longitude": 4362862.092279111
    }
  },
  {
    "_id": "plg000000000000000000004",
    "coordinates": [
      [
        4363390.839488913,
        6738857.2418591855
      ],
      [
        4363489.474235049,
        6738925.951806142
      ],
      [
        4363503.768882182,
        6738903.705285544
      ],
      [
        4363495.166000614,
        6738897.342585115
      ],
      [
        4363497.106744616,
        6738894.635172889
      ],
      [
        4363548.10832592,
        6738823.533757674
      ],
      [
        4363558.614659462,
        6738829.896400348
      ],
      [
        4363568.523875255,
        6738815.486608169
      ],
      [
        4363583.863589767,
        6738796.338971675
      ],
      [
        4363547.063258542,
        6738770.392534532
      ],
      [
        4363390.839488913,
        6738857.2418591855
      ]
    ],
    "points": [
      {
        "_id": "pnt000000000000000000014",
        "latitude": 6738902.1849557245,
        "longitude": 4363482.219766473,
        "measurements": [
          {
            "_id": "mea000000000000000000040",
            "temperature": 22.8,
            "co2_level": 480,
            "humidity": 55,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000041",
            "temperature": 25.3,
            "co2_level": 520,
            "humidity": 48,
            "pressure": 1011,
            "createdAt": "2025-05-01T14:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000042",
            "temperature": 20.1,
            "co2_level": 410,
            "humidity": 62,
            "pressure": 1013,
            "createdAt": "2025-05-01T06:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000008",
              "name": "NightMonitor",
              "manufacturer": "EcoVarsity",
              "serialNumber": "EV-77892"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000004",
          "name": "Сквер Платонова",
          "latitude": 6738865.755985801,
          "longitude": 4363460.111715602
        }
      },
      {
        "_id": "pnt000000000000000000015",
        "latitude": 6738851.435676792,
        "longitude": 4363499.541079241,
        "measurements": [
          {
            "_id": "mea000000000000000000043",
            "temperature": 23.5,
            "co2_level": 510,
            "humidity": 52,
            "pressure": 1012,
            "createdAt": "2025-05-01T10:20:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000044",
            "temperature": 19.7,
            "co2_level": 390,
            "humidity": 67,
            "pressure": 1014,
            "createdAt": "2025-05-01T22:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000045",
            "temperature": 26.2,
            "co2_level": 590,
            "humidity": 45,
            "pressure": 1010,
            "createdAt": "2025-05-01T15:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000010",
              "name": "SolarTrack V3",
              "manufacturer": "SunMetrics",
              "serialNumber": "SM-11223"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000004",
          "name": "Сквер Платонова",
          "latitude": 6738865.755985801,
          "longitude": 4363460.111715602
        }
      },
      {
        "_id": "pnt000000000000000000016",
        "latitude": 6738838.299776416,
        "longitude": 4363528.216980069,
        "measurements": [
          {
            "_id": "mea000000000000000000046",
            "temperature": 21.9,
            "co2_level": 430,
            "humidity": 58,
            "pressure": 1013,
            "createdAt": "2025-05-01T08:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000047",
            "temperature": 24.8,
            "co2_level": 540,
            "humidity": 50,
            "pressure": 1011,
            "createdAt": "2025-05-01T13:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000048",
            "temperature": 18.5,
            "co2_level": 380,
            "humidity": 70,
            "pressure": 1014,
            "createdAt": "2025-05-01T05:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000012",
              "name": "DawnPatrol",
              "manufacturer": "MorningLabs",
              "serialNumber": "ML-33445"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000004",
          "name": "Сквер Платонова",
          "latitude": 6738865.755985801,
          "longitude": 4363460.111715602
        }
      },
      {
        "_id": "pnt000000000000000000017",
        "latitude": 6738787.532951085,
        "longitude": 4363544.948299536,
        "measurements": [
          {
            "_id": "mea000000000000000000049",
            "temperature": 22.3,
            "co2_level": 470,
            "humidity": 56,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          },
          {
            "_id": "mea000000000000000000050",
            "temperature": 26.7,
            "co2_level": 610,
            "humidity": 44,
            "pressure": 1010,
            "createdAt": "2025-05-01T16:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000014",
              "name": "HeatMap X1",
              "manufacturer": "ThermoUni",
              "serialNumber": "TU-88901"
            }
          },
          {
            "_id": "mea000000000000000000051",
            "temperature": 20.5,
            "co2_level": 420,
            "humidity": 63,
            "pressure": 1013,
            "createdAt": "2025-05-01T07:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000004",
          "name": "Сквер Платонова",
          "latitude": 6738865.755985801,
          "longitude": 4363460.111715602
        }
      },
      {
        "_id": "pnt000000000000000000018",
        "latitude": 6738825.75608808,
        "longitude": 4363473.258547464,
        "measurements": [
          {
            "_id": "mea000000000000000000052",
            "temperature": 23,
            "co2_level": 490,
            "humidity": 54,
            "pressure": 1012,
            "createdAt": "2025-05-01T11:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          },
          {
            "_id": "mea000000000000000000053",
            "temperature": 27.3,
            "co2_level": 650,
            "humidity": 42,
            "pressure": 1009,
            "createdAt": "2025-05-01T17:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000016",
              "name": "PeakHeat Sensor",
              "manufacturer": "MaxThermo",
              "serialNumber": "MT-77654"
            }
          },
          {
            "_id": "mea000000000000000000054",
            "temperature": 19.2,
            "co2_level": 400,
            "humidity": 68,
            "pressure": 1014,
            "createdAt": "2025-05-01T23:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000004",
          "name": "Сквер Платонова",
          "latitude": 6738865.755985801,
          "longitude": 4363460.111715602
        }
      }
    ],
    "organizationPoint": {
      "_id": "org000000000000000000004",
      "name": "Сквер Платонова",
      "latitude": 6738865.755985801,
      "longitude": 4363460.111715602
    }
  },
  {
    "_id": "plg000000000000000000005",
    "coordinates": [
      [
        4359044.808458365,
        6747809.654398172
      ],
      [
        4359056.910445486,
        6747819.652836303
      ],
      [
        4359529.976536549,
        6747860.535806216
      ],
      [
        4359564.695972531,
        6747391.531645958
      ],
      [
        4359488.361637346,
        6747386.351880211
      ],
      [
        4359480.859705543,
        6747385.854993651
      ],
      [
        4359470.595937172,
        6747385.147208801
      ],
      [
        4359481.251661469,
        6747222.454616084
      ],
      [
        4359492.205833322,
        6747196.0596638685
      ],
      [
        4359494.211921865,
        6747165.554366233
      ],
      [
        4359312.188858371,
        6747153.8099550735
      ],
      [
        4359307.2248996375,
        6747212.532000963
      ],
      [
        4359296.419895902,
        6747340.005572807
      ],
      [
        4359315.491930301,
        6747342.083466865
      ],
      [
        4359310.17341899,
        6747404.149636684
      ],
      [
        4359305.489428775,
        6747458.6725519365
      ],
      [
        4359273.373087765,
        6747456.474088022
      ],
      [
        4359264.434355293,
        6747569.737071485
      ],
      [
        4359298.090133542,
        6747572.311922217
      ],
      [
        4359289.421907433,
        6747669.705401323
      ],
      [
        4359280.679097265,
        6747698.646781593
      ],
      [
        4359079.304030851,
        6747684.627802042
      ],
      [
        4359054.885655268,
        6747683.046725097
      ],
      [
        4359044.808458365,
        6747809.654398172
      ]
    ],
    "points": [
      {
        "_id": "pnt000000000000000000019",
        "latitude": 6747780.591718396,
        "longitude": 4359145.535231692,
        "measurements": [
          {
            "_id": "mea000000000000000000055",
            "temperature": 22.4,
            "co2_level": 430,
            "humidity": 58,
            "pressure": 1013,
            "createdAt": "2025-05-01T09:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000017",
              "name": "ParkSensor-ECO",
              "manufacturer": "GreenTech",
              "serialNumber": "GT-22987"
            }
          },
          {
            "_id": "mea000000000000000000056",
            "temperature": 19.8,
            "co2_level": 380,
            "humidity": 65,
            "pressure": 1014,
            "createdAt": "2025-05-01T21:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000018",
              "name": "NightGuard",
              "manufacturer": "EcoSystems",
              "serialNumber": "ES-44521"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000005",
          "name": "Парк Победы",
          "latitude": 6747673.0542037515,
          "longitude": 4359394.156182429
        }
      },
      {
        "_id": "pnt000000000000000000020",
        "latitude": 6747808.060182438,
        "longitude": 4359460.758633771,
        "measurements": [
          {
            "_id": "mea000000000000000000057",
            "temperature": 25.1,
            "co2_level": 510,
            "humidity": 47,
            "pressure": 1011,
            "createdAt": "2025-05-01T14:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000019",
              "name": "SunTracker V2",
              "manufacturer": "SolarMetrics",
              "serialNumber": "SM-77892"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000005",
          "name": "Парк Победы",
          "latitude": 6747673.0542037515,
          "longitude": 4359394.156182429
        }
      },
      {
        "_id": "pnt000000000000000000021",
        "latitude": 6747301.426576014,
        "longitude": 4359370.255887756,
        "measurements": [
          {
            "_id": "mea000000000000000000058",
            "temperature": 20.7,
            "co2_level": 405,
            "humidity": 62,
            "pressure": 1012,
            "createdAt": "2025-05-01T07:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000020",
              "name": "DewPoint Pro",
              "manufacturer": "HydroLabs",
              "serialNumber": "HL-33654"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000005",
          "name": "Парк Победы",
          "latitude": 6747673.0542037515,
          "longitude": 4359394.156182429
        }
      },
      {
        "_id": "pnt000000000000000000022",
        "latitude": 6747453.097170996,
        "longitude": 4359525.479785719,
        "measurements": [
          {
            "_id": "mea000000000000000000059",
            "temperature": 23.6,
            "co2_level": 485,
            "humidity": 53,
            "pressure": 1012,
            "createdAt": "2025-05-01T11:20:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000021",
              "name": "UrbanClimate Pro",
              "manufacturer": "AtmoSense",
              "serialNumber": "AS-11235"
            }
          },
          {
            "_id": "mea000000000000000000060",
            "temperature": 18.9,
            "co2_level": 395,
            "humidity": 68,
            "pressure": 1013,
            "createdAt": "2025-05-01T23:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000022",
              "name": "NightOwl Eco",
              "manufacturer": "Noctis Labs",
              "serialNumber": "NL-88763"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000005",
          "name": "Парк Победы",
          "latitude": 6747673.0542037515,
          "longitude": 4359394.156182429
        }
      },
      {
        "_id": "pnt000000000000000000023",
        "latitude": 6747620.309962301,
        "longitude": 4359457.419049047,
        "measurements": [
          {
            "_id": "mea000000000000000000061",
            "temperature": 24.3,
            "co2_level": 520,
            "humidity": 49,
            "pressure": 1010,
            "createdAt": "2025-05-01T15:10:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000023",
              "name": "HeatScan 3000",
              "manufacturer": "ThermoDynamics",
              "serialNumber": "TD-55678"
            }
          },
          {
            "_id": "mea000000000000000000062",
            "temperature": 21.2,
            "co2_level": 415,
            "humidity": 60,
            "pressure": 1011,
            "createdAt": "2025-05-01T08:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000024",
              "name": "MorningBreeze",
              "manufacturer": "AeroSense",
              "serialNumber": "AR-33421"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000005",
          "name": "Парк Победы",
          "latitude": 6747673.0542037515,
          "longitude": 4359394.156182429
        }
      }
    ],
    "organizationPoint": {
      "_id": "org000000000000000000005",
      "name": "Парк Победы",
      "latitude": 6747673.0542037515,
      "longitude": 4359394.156182429
    }
  },
  {
    "_id": "plg000000000000000000006",
    "coordinates": [
      [
        4364552.510695502,
        6738658.335053388
      ],
      [
        4364578.785880192,
        6738671.270398681
      ],
      [
        4364647.263842314,
        6738704.4213973945
      ],
      [
        4364644.371316666,
        6738710.392747557
      ],
      [
        4364654.691078739,
        6738715.386462082
      ],
      [
        4364657.872812426,
        6738708.90367804
      ],
      [
        4364663.00475227,
        6738711.385460722
      ],
      [
        4364660.0749345925,
        6738717.432005285
      ],
      [
        4364685.939573,
        6738729.946276239
      ],
      [
        4364676.739462364,
        6738748.9435566915
      ],
      [
        4364653.683414709,
        6738737.7828464415
      ],
      [
        4364646.312171987,
        6738753.004692332
      ],
      [
        4364672.027530958,
        6738765.458902128
      ],
      [
        4364663.975124272,
        6738782.0946926
      ],
      [
        4364645.724293755,
        6738773.265358856
      ],
      [
        4364639.8180155335,
        6738785.478956049
      ],
      [
        4364644.100698983,
        6738787.539590762
      ],
      [
        4364678.409700003,
        6738804.506334604
      ],
      [
        4364722.245311728,
        6738715.311272808
      ],
      [
        4364667.866074434,
        6738688.582877094
      ],
      [
        4364589.236331347,
        6738649.836755914
      ],
      [
        4364585.933259417,
        6738656.530164849
      ],
      [
        4364559.742009624,
        6738643.639884384
      ],
      [
        4364552.510695502,
        6738658.335053388
      ]
    ],
    "points": [
      {
        "_id": "pnt000000000000000000024",
        "latitude": 6738786.940763052,
        "longitude": 4364654.825886643,
        "measurements": [
          {
            "_id": "mea000000000000000000063",
            "temperature": 22.8,
            "co2_level": 480,
            "humidity": 55,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000064",
            "temperature": 25.3,
            "co2_level": 520,
            "humidity": 48,
            "pressure": 1011,
            "createdAt": "2025-05-01T14:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000007",
              "name": "CampusSensor-1",
              "manufacturer": "UniTech",
              "serialNumber": "UT-33456"
            }
          },
          {
            "_id": "mea000000000000000000065",
            "temperature": 20.1,
            "co2_level": 410,
            "humidity": 62,
            "pressure": 1013,
            "createdAt": "2025-05-01T06:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000008",
              "name": "NightMonitor",
              "manufacturer": "EcoVarsity",
              "serialNumber": "EV-77892"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000006",
          "name": "Клиническая больница №2",
          "latitude": 6738714.676201646,
          "longitude": 4364679.895035969
        }
      },
      {
        "_id": "pnt000000000000000000025",
        "latitude": 6738778.578354824,
        "longitude": 4364673.327186013,
        "measurements": [
          {
            "_id": "mea000000000000000000066",
            "temperature": 23.5,
            "co2_level": 510,
            "humidity": 52,
            "pressure": 1012,
            "createdAt": "2025-05-01T10:20:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000067",
            "temperature": 19.7,
            "co2_level": 390,
            "humidity": 67,
            "pressure": 1014,
            "createdAt": "2025-05-01T22:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000009",
              "name": "LabZone Sensor",
              "manufacturer": "SciTech",
              "serialNumber": "ST-44567"
            }
          },
          {
            "_id": "mea000000000000000000068",
            "temperature": 26.2,
            "co2_level": 590,
            "humidity": 45,
            "pressure": 1010,
            "createdAt": "2025-05-01T15:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000010",
              "name": "SolarTrack V3",
              "manufacturer": "SunMetrics",
              "serialNumber": "SM-11223"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000006",
          "name": "Клиническая больница №2",
          "latitude": 6738714.676201646,
          "longitude": 4364679.895035969
        }
      },
      {
        "_id": "pnt000000000000000000026",
        "latitude": 6738751.696680196,
        "longitude": 4364656.606998496,
        "measurements": [
          {
            "_id": "mea000000000000000000069",
            "temperature": 21.9,
            "co2_level": 430,
            "humidity": 58,
            "pressure": 1013,
            "createdAt": "2025-05-01T08:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000070",
            "temperature": 24.8,
            "co2_level": 540,
            "humidity": 50,
            "pressure": 1011,
            "createdAt": "2025-05-01T13:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000011",
              "name": "EduClimate Pro",
              "manufacturer": "AcademSense",
              "serialNumber": "AS-55678"
            }
          },
          {
            "_id": "mea000000000000000000071",
            "temperature": 18.5,
            "co2_level": 380,
            "humidity": 70,
            "pressure": 1014,
            "createdAt": "2025-05-01T05:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000012",
              "name": "DawnPatrol",
              "manufacturer": "MorningLabs",
              "serialNumber": "ML-33445"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000006",
          "name": "Клиническая больница №2",
          "latitude": 6738714.676201646,
          "longitude": 4364679.895035969
        }
      },
      {
        "_id": "pnt000000000000000000027",
        "latitude": 6738660.339129728,
        "longitude": 4364564.66823105,
        "measurements": [
          {
            "_id": "mea000000000000000000072",
            "temperature": 22.3,
            "co2_level": 470,
            "humidity": 56,
            "pressure": 1012,
            "createdAt": "2025-05-01T09:45:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          },
          {
            "_id": "mea000000000000000000073",
            "temperature": 26.7,
            "co2_level": 610,
            "humidity": 44,
            "pressure": 1010,
            "createdAt": "2025-05-01T16:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000014",
              "name": "HeatMap X1",
              "manufacturer": "ThermoUni",
              "serialNumber": "TU-88901"
            }
          },
          {
            "_id": "mea000000000000000000074",
            "temperature": 20.5,
            "co2_level": 420,
            "humidity": 63,
            "pressure": 1013,
            "createdAt": "2025-05-01T07:30:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000013",
              "name": "QuadSensor",
              "manufacturer": "PolyTech",
              "serialNumber": "PT-66789"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000006",
          "name": "Клиническая больница №2",
          "latitude": 6738714.676201646,
          "longitude": 4364679.895035969
        }
      },
      {
        "_id": "pnt000000000000000000028",
        "latitude": 6738682.429223161,
        "longitude": 4364630.346730617,
        "measurements": [
          {
            "_id": "mea000000000000000000075",
            "temperature": 23,
            "co2_level": 490,
            "humidity": 54,
            "pressure": 1012,
            "createdAt": "2025-05-01T11:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          },
          {
            "_id": "mea000000000000000000076",
            "temperature": 27.3,
            "co2_level": 650,
            "humidity": 42,
            "pressure": 1009,
            "createdAt": "2025-05-01T17:15:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000016",
              "name": "PeakHeat Sensor",
              "manufacturer": "MaxThermo",
              "serialNumber": "MT-77654"
            }
          },
          {
            "_id": "mea000000000000000000077",
            "temperature": 19.2,
            "co2_level": 400,
            "humidity": 68,
            "pressure": 1014,
            "createdAt": "2025-05-01T23:00:00Z",
            "measurementDevice": {
              "_id": "dev000000000000000000015",
              "name": "UniAir Monitor",
              "manufacturer": "CampusTech",
              "serialNumber": "CT-22334"
            }
          }
        ],
        "organizationPoint": {
          "_id": "org000000000000000000006",
          "name": "Клиническая больница №2",
          "latitude": 6738714.676201646,
          "longitude": 4364679.895035969
        }
      }
    ],
    "organizationPoint": {
      "_id": "org000000000000000000006",
      "name": "Клиническая больница №2",
      "latitude": 6738714.676201646,
      "longitude": 4364679.895035969
    }
  }
];

// getAllPoints на бэке возвращает все точки; здесь — плоский список из всех полигонов
export const mockPoints: PointModel[] = mockPolygons.flatMap((p) => p.points);
