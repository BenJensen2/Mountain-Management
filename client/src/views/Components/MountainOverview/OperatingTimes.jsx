import React from 'react';

const OperatingTimes = (props) => {

  var operatingData = {
    "title": "Operating Times",
    "regions": [
      {
        "header": "East Side",
        "time": "9:00",
        "chairs": [
          {
            "name": "Chair 8",
            "time": ""
          }
        ]
      },
      {
        "header": "Learning",
        "chairs": [
          {
            "name": "Chair 6",
            "time": ""
          },
          {
            "name": "Chair 7",
            "time": ""
          },
          {
            "name": "MC 4",
            "time": ""
          },
          {
            "name": "MC 3",
            "time": ""
          },
          {
            "name": "MC 2",
            "time": ""
          },
          {
            "name": "MC 1",
            "time": ""
          }
        ]
      },
      {
        "header":"Silver",
        "chairs":[
          {
            "name": "Chair 4",
            "time": ""
          }
        ]
      },
      {
        "header":"Central",
        "chairs":[
          {
            "name": "Chair 2",
            "time": ""
          },
          {
            "name": "Chair 5",
            "time": ""
          },
          {
            "name": "Chair 9",
            "time": ""
          }
        ]
      },
      {
        "header":"West Side",
        "chairs":[
          {
            "name": "Chair 3",
            "time": ""
          }
        ]
      }
    ]
  }



  if (props.times == "open") {
    operatingData.title = "Opening Times"
    operatingData.regions[0].chairs.forEach(chair => chair.time = "9:00")
    operatingData.regions[1].chairs.forEach(chair => chair.time = "8:20")
    operatingData.regions[2].chairs.forEach(chair => chair.time = "8:30")
    operatingData.regions[3].chairs[0].time = "8:00"
    operatingData.regions[3].chairs[1].time = "10:00"
    operatingData.regions[3].chairs[2].time = "8:00"
    operatingData.regions[4].chairs.forEach(chair => chair.time = "10:00")
  } else if (props.times == "close") {
    operatingData.title = "Closing Times"
    operatingData.regions[0].chairs[0].time = "9:00"
    operatingData.regions[0].chairs.forEach(chair => chair.time = "4:00")
    operatingData.regions[1].chairs.forEach(chair => chair.time = "3:45")
    operatingData.regions[2].chairs.forEach(chair => chair.time = "4:00")
    operatingData.regions[3].chairs[0].time = "4:30"
    operatingData.regions[3].chairs[1].time = "4:00"
    operatingData.regions[3].chairs[2].time = "4:45"
    operatingData.regions[4].chairs.forEach(chair => chair.time = "4:00")
  }



  return (
    <div className="operating-times">
      <h4 className='operating-times-title'>{operatingData.title}</h4>
      {
        operatingData.regions.map((region, i) =>
          <div className="operating-times-region">
            <h5 className='operating-times-region-header'>
              {region.header}
            </h5>
            {
              region.chairs.map((chair, i) =>
                <div className="operating-times-chair">
                  <p className="operating-times-chair-name">
                    {chair.name}
                  </p>
                  <input
                    type="text"
                    placeholder={chair.time}
                    className="operating-times-chair-time"
                  />
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default OperatingTimes;