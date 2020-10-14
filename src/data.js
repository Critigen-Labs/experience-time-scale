export const configData = {
  "mapUrl": "//services.arcgis.com/CQaFpVeTI4SiADzi/arcgis/rest/services/",
  "imageUrl": "//nas-national-prod.s3.amazonaws.com/styles/nas_bird_teaser_illustration/s3/",
  "songUrl": "//nas-national-prod.s3.amazonaws.com/",
  "mapConfig": {
    "useWebMap": false,
    "basemap": "dark-gray-vector",
    "center": [-82.3817961822316, 27.718392174338792],
    "zoom": 3,
    "portalItem": {
      "id": "160f366c67c34b178a91ceb1a8dca2f3"
    },
    "extent": {
      "xmin": -11386639.46,
      "ymin": 141345.29244246761,
      "xmax": -6330937.385,
      "ymax": 5958614.105,
      "spatialReference": {
        "wkid": 102100
      }
    },
    "popup": {
      "defaultPopupTemplateEnabled": false
    }
  },
  "birds": [
    {
      "name": "Prothonotary Warbler",
      "species": "Protonotaria citrea",
      "image": "4237_Sibl_9780307957900_art_r1.jpg?itok=c7p064Vk",
      "layers": [{
        "dataset": "annual",
        "popupTemplate": "annual",
        "endPoint": "Prowar2/FeatureServer/0",
        "definitionExpression": "HexVal <> 0",
        "isTimeEnabled": true
      }],
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 4, 6, 8, 10, 12, 14, 12, 10, 8, 6, 4, 2, 2, 4, 4, 6, 6, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "//www.audubon.org/field-guide/bird/prothonotary-warbler",
      "song": {
        "path": "ABETOW_1.song_AZkc_1.mp3?uuid=5f33e4768e3a4",
        "delay": 13000
      }
    },
    {
      "name": "Tundra Swan",
      "species": "Cygnus columbianus",
      "image": "645_Sibl_9780307957900_art_r1.jpg?itok=0lOFPfzf",
      "layers": [{
        "name": "flights",
        "dataset": "connection",
        "popupTemplate": "flight",
        "endPoint": "TundraSwan/FeatureServer/1",
        "definitionExpression": "1=0"
      },
      {
        "name": "sites",
        "dataset": "connection",
        "popupTemplate": "connection",
        "endPoint": "TundraSwan/FeatureServer/0",
        "definitionExpression": "1=0"
      }
      ],
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 4, 6, 8, 10, 12, 14, 12, 10, 8, 6, 4, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/tundra-swan",
      "song": {
        "path": "TUNSWA_1.courtshipduetting__whg_1.mp3?uuid=5f33eb3db088d",
        "delay": 15000
      },
      "locations": [
        {

          "value": "Fresno, California, United States of America"
        },

        {

          "value": "Reno, Nevada, United States of America"
        },

        {

          "value": "Charlotte, North Carolina, United States of America"
        },

        {

          "value": "Huntsville, Alabama, United States of America"
        },

        {

          "value": "Pittsburgh, Pennsylvania, United States of America"
        },

        {

          "value": "Harrisburg, Pennsylvania, United States of America"
        },

        {

          "value": "Port Heiden, Alaska, United States of America"
        },

        {

          "value": "Chicago, Illinois, United States of America"
        },

        {

          "value": "Swift Current, Saskatchewan, Canada"
        },

        {

          "value": "Great Falls, Montana, United States of America"
        },

        {

          "value": "Sand Point, Alaska, United States of America"
        },

        {

          "value": "Grand Rapids, Michigan, United States of America"
        },

        {

          "value": "Greenville, North Carolina, United States of America"
        },

        {

          "value": "Fort Good Hope, Northwest Territories, Canada"
        },

        {

          "value": "Duluth, Minnesota, United States of America"
        },

        {

          "value": "Fargo, North Dakota, United States of America"
        },

        {

          "value": "Quinhagak, Alaska, United States of America"
        },

        {

          "value": "Kotlit, Alaska, United States of America"
        },

        {

          "value": "Fort Chipewyan, Alberta, Canada"
        },

        {

          "value": "Juneau, Alaska, United States of America"
        },

        {

          "value": "McGrath, Alaska, United States of America"
        },

        {

          "value": "Cold Bay, Alaska, United States of America"
        },

        {

          "value": "Memphis, Tennessee, United States of America"
        },

        {

          "value": "Big Delta, Alaska, United States of America"
        },

        {

          "value": "Denver, Colorado, United States of America"
        },

        {

          "value": "Vegreville, Alberta, Canada"
        },

        {

          "value": "Eureka, California, United States of America"
        },

        {

          "value": "Peace River, Alberta, Canada"
        },

        {

          "value": "Fort St. John, British Columbia, Canada"
        },

        {

          "value": "San Felipe, Baja California, Mexico"
        },

        {

          "value": "Missoula, Montana, United States of America"
        },

        {

          "value": "Brooks, Alberta, Canada"
        },

        {

          "value": "Terrace, British Columbia, Canada"
        },

        {

          "value": "Provo, Utah, United States of America"
        },

        {

          "value": "San Francisco, California, United States of America"
        },

        {

          "value": "Socorro, New Mexico, United States of America"
        },

        {

          "value": "Elko, Nevada, United States of America"
        },

        {

          "value": "Dillingham, Alaska, United States of America"
        },

        {

          "value": "Revelstoke, British Columbia, Canada"
        },

        {

          "value": "Cordova, Alaska, United States of America"
        },

        {

          "value": "Grand Junction, Colorado, United States of America"
        },

        {

          "value": "Twin Falls, Idaho, United States of America"
        },

        {

          "value": "Denali Park, Alaska, United States of America"
        },

        {

          "value": "Nelson, British Columbia, Canada"
        },

        {

          "value": "Palmer, Alaska, United States of America"
        },

        {

          "value": "Madison, Wisconsin, United States of America"
        },

        {

          "value": "Vancouver, British Columbia, Canada"
        },

        {

          "value": "Tuktoyaktuk, Northwest Territories, Canada"
        },

        {

          "value": "Augusta, Georgia, United States of America"
        },

        {

          "value": "Cedar Rapids, Iowa, United States of America"
        },

        {

          "value": "Detroit, Michigan, United States of America"
        },

        {

          "value": "Medford, Oregon, United States of America"
        },

        {

          "value": "Koyuk, Alaska, United States of America"
        },

        {

          "value": "Karluk, Alaska, United States of America"
        },

        {

          "value": "Bakersfield, California, United States of America"
        },

        {

          "value": "Wausau, Wisconsin, United States of America"
        },

        {

          "value": "Kelowna, British Columbia, Canada"
        },

        {

          "value": "Prudhoe Bay, Alaska, United States of America"
        },

        {

          "value": "Joliet, Illinois, United States of America"
        },

        {

          "value": "Aberdeen, Washington, United States of America"
        },

        {

          "value": "Lethbridge, Alberta, Canada"
        },

        {

          "value": "Fort Resolution, Northwest Territories, Canada"
        },

        {

          "value": "Spokane, Washington, United States of America"
        },

        {

          "value": "Smithers, British Columbia, Canada"
        },

        {

          "value": "Williams Lake, British Columbia, Canada"
        },

        {

          "value": "Las Vegas, Nevada, United States of America"
        },

        {

          "value": "Yorkton, Saskatchewan, Canada"
        },

        {

          "value": "Galena, Alaska, United States of America"
        },

        {

          "value": "Prince Rupert, British Columbia, Canada"
        },

        {

          "value": "Shreveport, Louisiana, United States of America"
        },

        {

          "value": "Dodge City, Kansas, United States of America"
        },

        {

          "value": "John Day, Oregon, United States of America"
        },

        {

          "value": "Hay River, Northwest Territories, Canada"
        },

        {

          "value": "San Jose, California, United States of America"
        },

        {

          "value": "North Battleford, Saskatchewan, Canada"
        },

        {

          "value": "Dillon, Montana, United States of America"
        },

        {

          "value": "Seattle, Washington, United States of America"
        },

        {

          "value": "Nanaimo, British Columbia, Canada"
        },

        {

          "value": "King Salmon, Alaska, United States of America"
        },

        {

          "value": "Billings, Montana, United States of America"
        },

        {

          "value": "Kodiak, Alaska, United States of America"
        },

        {

          "value": "Hydaburg, Alaska, United States of America"
        },

        {

          "value": "Tsiigehtchic, Northwest Territories, Canada"
        },

        {

          "value": "St. Cloud, Minnesota, United States of America"
        },

        {

          "value": "Medicine Hat, Alberta, Canada"
        },

        {

          "value": "Fort Nelson, British Columbia, Canada"
        },

        {

          "value": "Whitehorse, Yukon, Canada"
        },

        {

          "value": "Riverton, Wyoming, United States of America"
        },

        {

          "value": "Inuvik, Northwest Territories, Canada"
        },

        {

          "value": "Ketchikan, Alaska, United States of America"
        },

        {

          "value": "Kindersley, Saskatchewan, Canada"
        },

        {

          "value": "Anchorage, Alaska, United States of America"
        },

        {

          "value": "Eagle, Alaska, United States of America"
        },

        {

          "value": "Coeur d'Alene, Idaho, United States of America"
        },

        {

          "value": "Richmond, Virginia, United States of America"
        },

        {

          "value": "Jamestown, North Dakota, United States of America"
        },

        {

          "value": "Unalakleet, Alaska, United States of America"
        },

        {

          "value": "Raleigh, North Carolina, United States of America"
        },

        {

          "value": "Miles City, Montana, United States of America"
        },

        {

          "value": "Evansville, Indiana, United States of America"
        },

        {

          "value": "Fort Simpson, Northwest Territories, Canada"
        },

        {

          "value": "Lake Louise, Alberta, Canada"
        },

        {

          "value": "Selawik, Alaska, United States of America"
        },

        {

          "value": "Polson, Montana, United States of America"
        },

        {

          "value": "Oklahoma City, Oklahoma, United States of America"
        },

        {

          "value": "Bella Bella, British Columbia, Canada"
        },

        {

          "value": "Melville, Saskatchewan, Canada"
        },

        {

          "value": "Toronto, Ontario, Canada"
        },

        {

          "value": "Portland, Oregon, United States of America"
        },

        {

          "value": "Bismarck, North Dakota, United States of America"
        },

        {

          "value": "Talkeetna, Alaska, United States of America"
        },

        {

          "value": "Walla Walla, Washington, United States of America"
        },

        {

          "value": "Washington, D.C., District of Columbia, United States of America"
        },

        {

          "value": "Winnemucca, Nevada, United States of America"
        },

        {

          "value": " "
        },

        {

          "value": "Dauphin, Manitoba, Canada"
        },

        {

          "value": "Columbia, South Carolina, United States of America"
        },

        {

          "value": "Yuba City, California, United States of America"
        },

        {

          "value": "Lake Minchumina, Alaska, United States of America"
        },

        {

          "value": "Yuma, Arizona, United States of America"
        },

        {

          "value": "Red Deer, Alberta, Canada"
        },

        {

          "value": "Edmonton, Alberta, Canada"
        },

        {

          "value": "Cleveland, Ohio, United States of America"
        },

        {

          "value": "Muskegon, Michigan, United States of America"
        },

        {

          "value": "Homer, Alaska, United States of America"
        },

        {

          "value": "Aniak, Alaska, United States of America"
        },

        {

          "value": "Ely, Nevada, United States of America"
        },

        {

          "value": "Kennewick, Washington, United States of America"
        },

        {

          "value": "Kitchener, Ontario, Canada"
        },

        {

          "value": "Fort Yukon, Alaska, United States of America"
        },

        {

          "value": "Fort Wayne, Indiana, United States of America"
        },

        {

          "value": "Bethel, Alaska, United States of America"
        },

        {

          "value": "Steinbach, Manitoba, Canada"
        },

        {

          "value": "Wiseman, Alaska, United States of America"
        },

        {

          "value": "Gulkana, Alaska, United States of America"
        },

        {

          "value": "The Pas, Manitoba, Canada"
        },

        {

          "value": "Klamath Falls, Oregon, United States of America"
        },

        {

          "value": "Sioux Falls, South Dakota, United States of America"
        },

        {

          "value": "Minot, North Dakota, United States of America"
        },

        {

          "value": "Chignik, Alaska, United States of America"
        },

        {

          "value": "Norman Wells, Northwest Territories, Canada"
        },

        {

          "value": "Regina, Saskatchewan, Canada"
        },

        {

          "value": "Dawson City, Yukon, Canada"
        },

        {

          "value": "Charlottesville, Virginia, United States of America"
        },

        {

          "value": "Minneapolis, Minnesota, United States of America"
        },

        {

          "value": "Burwash Landing, Yukon, Canada"
        },

        {

          "value": "Rochester, New York, United States of America"
        },

        {

          "value": "Atlantic City, New Jersey, United States of America"
        },

        {

          "value": "Lincoln, Nebraska, United States of America"
        },

        {

          "value": "Wilmington, North Carolina, United States of America"
        },

        {

          "value": "Bend, Oregon, United States of America"
        },

        {

          "value": "Grand Prairie, Alberta, Canada"
        },

        {

          "value": "Calgary, Alberta, Canada"
        },

        {

          "value": "Virginia Beach, Virginia, United States of America"
        },

        {

          "value": "La Ronge, Saskatchewan, Canada"
        },

        {

          "value": "Pilot Point, Alaska, United States of America"
        },

        {

          "value": "Yakutat, Alaska, United States of America"
        },

        {

          "value": "Doline, Northwest Territories, Canada"
        },

        {

          "value": "Logan, Utah, United States of America"
        },

        {

          "value": "Kalispell, Montana, United States of America"
        },

        {

          "value": "Toledo, Ohio, United States of America"
        },

        {

          "value": "Syracuse, New York, United States of America"
        },

        {

          "value": "Saginaw, Michigan, United States of America"
        },

        {

          "value": "Hooper Bay, Alaska, United States of America"
        },

        {

          "value": "Cedar City, Utah, United States of America"
        },

        {

          "value": "Glasgow, Montana, United States of America"
        },

        {

          "value": "La Crosse, Wisconsin, United States of America"
        },

        {

          "value": "Boise, Idaho, United States of America"
        },

        {

          "value": "Bozeman, Montana, United States of America"
        },

        {

          "value": "Tallahassee, Florida, United States of America"
        },

        {

          "value": "New York, New York, United States of America"
        },

        {

          "value": "Hamilton, Ontario, Canada"
        },

        {

          "value": "Rapid City, South Dakota, United States of America"
        },

        {

          "value": "Watson Lake, Yukon, Canada"
        },

        {

          "value": "Ambler, Alaska, United States of America"
        },

        {

          "value": "Parkersburg, West Virginia, United States of America"
        },

        {

          "value": "Prince Albert, Saskatchewan, Canada"
        },

        {

          "value": "Tanacross, Alaska, United States of America"
        },

        {

          "value": "Sacramento, California, United States of America"
        },

        {

          "value": "Aberdeen, South Dakota, United States of America"
        },

        {

          "value": "Mountain Village, Alaska, United States of America"
        },

        {

          "value": "Brandon, Manitoba, Canada"
        },

        {

          "value": "Eugene, Oregon, United States of America"
        },

        {

          "value": "Kaktovik, Alaska, United States of America"
        },

        {

          "value": "Davenport, Iowa, United States of America"
        },

        {

          "value": "Saskatoon, Saskatchewan, Canada"
        },

        {

          "value": "Quesnel, British Columbia, Canada"
        },

        {

          "value": "Prince George, British Columbia, Canada"
        },

        {

          "value": "Idaho Falls, Idaho, United States of America"
        },

        {

          "value": "Fairbanks, Alaska, United States of America"
        },

        {

          "value": "Lake Havasu City, Arizona, United States of America"
        },

        {

          "value": "Appleton, Wisconsin, United States of America"
        },

        {

          "value": "Charleston, South Carolina, United States of America"
        },

        {

          "value": "Dease Lake, British Columbia, Canada"
        },

        {

          "value": "Marinette, Wisconsin, United States of America"
        },

        {

          "value": "Hughes, Alaska, United States of America"
        },

        {

          "value": "Virginia, Minnesota, United States of America"
        },

        {

          "value": "Salt Lake City, Utah, United States of America"
        }
      ]
    },
    {
      "name": "American White Pelican",
      "species": "Pelecanus erythrorhynchos",
      "image": "267_Sibl_9780307957900_art_r1.jpg?itok=W-nWQ4jh",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 8, 10, 12, 12, 10, 10, 10, 10, 8, 3, 2, 2, 3, 8, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/american-white-pelican",
      "song": {
        "path": "AMWHPE_1.adultcroaksampbarksofnestlings_NDle_1.mp3?uuid=5f33e89488b17",
        "delay": 18000
      },
      "isFake": true
    },
    {
      "name": "Bald Eagle",
      "species": "Haliaeetus leucocephalus",
      "image": "971_Sibl_9780307957900_art_r1.jpg?itok=qzcttSWl",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 10, 12, 12, 10, 10, 10, 10, 8, 2, 2, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/bald-eagle",
      "song": {
        "path": "BALEAG_1.alarmcallsofperchedadult_KYle.mp3?uuid=5f33e5920e736",
        "delay": 13000
      },
      "isFake": true
    },
    {
      "name": "Blackpoll Warbler",
      "species": "Setophaga striata",
      "image": "4047_Sibl_9780307957900_art_r1.jpg?itok=TJQQO1l_",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 8, 10, 12, 12, 10, 10, 10, 10, 8, 6, 6, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/blackpoll-warbler",
      "song": {
        "path": "BLPOWA_3.songsnum1_NYle_1.mp3?uuid=5f33f3873c4c3",
        "delay": 13000
      },
      "isFake": true
    },
    {
      "name": "Black Skimmer",
      "species": "Rynchops niger",
      "image": "2525_Sibl_9780307957900_art_r1.jpg?itok=wWYTIOX0",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 8, 10, 12, 12, 10, 10, 10, 10, 8, 6, 6, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/black-skimmer",
      "isFake": true
    },
    {
      "name": "Broad-winged Hawk",
      "species": "Buteo platypterus",
      "image": "842_Sibl_9780307957900_art_r1.jpg?itok=okhUsLHN",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 8, 10, 12, 12, 10, 10, 10, 10, 8, 6, 6, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/broad-winged-hawk",
      "isFake": true
    },
    {
      "name": "Rufous Hummingbird",
      "species": "Selasphorus rufus",
      "image": "2747_Sibl_9780307957900_art_r1.jpg?itok=FdgbBqKR",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 8, 10, 12, 12, 10, 10, 10, 10, 8, 6, 6, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/rufous-hummingbird",
      "isFake": true
    },
    {
      "name": "Wood Thrush",
      "species": "Hylocichla mustelina",
      "image": "4557_Sibl_9780307957900_art_r1.jpg?itok=yCgRrnOF",
      "data": {
        "annual": [1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 8, 10, 12, 12, 10, 10, 10, 10, 8, 6, 6, 8, 8, 10, 11, 12, 13, 14, 13, 12, 11, 10, 8, 6, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "connection": [],
        "threat": []
      },
      "link": "https://www.audubon.org/field-guide/bird/wood-thrush",
      "isFake": true
    }
  ]
};