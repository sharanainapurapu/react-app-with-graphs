import React from 'react';
import './App.css';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

function App() {
  let data = [
    {
      "country": "AD",
      "hot dog": 11,
      "hot dogColor": "hsl(203, 70%, 50%)",
      "burger": 144,
      "burgerColor": "hsl(192, 70%, 50%)",
      "sandwich": 130,
      "sandwichColor": "hsl(135, 70%, 50%)",
      "kebab": 93,
      "kebabColor": "hsl(210, 70%, 50%)",
      "fries": 37,
      "friesColor": "hsl(267, 70%, 50%)",
      "donut": 11,
      "donutColor": "hsl(242, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 111,
      "hot dogColor": "hsl(191, 70%, 50%)",
      "burger": 41,
      "burgerColor": "hsl(148, 70%, 50%)",
      "sandwich": 26,
      "sandwichColor": "hsl(312, 70%, 50%)",
      "kebab": 107,
      "kebabColor": "hsl(280, 70%, 50%)",
      "fries": 96,
      "friesColor": "hsl(61, 70%, 50%)",
      "donut": 79,
      "donutColor": "hsl(152, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 25,
      "hot dogColor": "hsl(304, 70%, 50%)",
      "burger": 45,
      "burgerColor": "hsl(40, 70%, 50%)",
      "sandwich": 199,
      "sandwichColor": "hsl(144, 70%, 50%)",
      "kebab": 76,
      "kebabColor": "hsl(12, 70%, 50%)",
      "fries": 134,
      "friesColor": "hsl(160, 70%, 50%)",
      "donut": 8,
      "donutColor": "hsl(181, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 30,
      "hot dogColor": "hsl(148, 70%, 50%)",
      "burger": 33,
      "burgerColor": "hsl(19, 70%, 50%)",
      "sandwich": 11,
      "sandwichColor": "hsl(22, 70%, 50%)",
      "kebab": 140,
      "kebabColor": "hsl(221, 70%, 50%)",
      "fries": 160,
      "friesColor": "hsl(173, 70%, 50%)",
      "donut": 37,
      "donutColor": "hsl(357, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 72,
      "hot dogColor": "hsl(12, 70%, 50%)",
      "burger": 6,
      "burgerColor": "hsl(36, 70%, 50%)",
      "sandwich": 37,
      "sandwichColor": "hsl(141, 70%, 50%)",
      "kebab": 181,
      "kebabColor": "hsl(210, 70%, 50%)",
      "fries": 139,
      "friesColor": "hsl(68, 70%, 50%)",
      "donut": 21,
      "donutColor": "hsl(225, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 160,
      "hot dogColor": "hsl(358, 70%, 50%)",
      "burger": 132,
      "burgerColor": "hsl(93, 70%, 50%)",
      "sandwich": 123,
      "sandwichColor": "hsl(130, 70%, 50%)",
      "kebab": 25,
      "kebabColor": "hsl(218, 70%, 50%)",
      "fries": 32,
      "friesColor": "hsl(65, 70%, 50%)",
      "donut": 88,
      "donutColor": "hsl(86, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 107,
      "hot dogColor": "hsl(286, 70%, 50%)",
      "burger": 149,
      "burgerColor": "hsl(82, 70%, 50%)",
      "sandwich": 16,
      "sandwichColor": "hsl(85, 70%, 50%)",
      "kebab": 69,
      "kebabColor": "hsl(335, 70%, 50%)",
      "fries": 99,
      "friesColor": "hsl(358, 70%, 50%)",
      "donut": 105,
      "donutColor": "hsl(15, 70%, 50%)"
    }
  ];
  let data_pie = [
    {
      "id": "elixir",
      "label": "elixir",
      "value": 462,
      "color": "hsl(294, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 232,
      "color": "hsl(11, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 347,
      "color": "hsl(290, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 204,
      "color": "hsl(43, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 311,
      "color": "hsl(283, 70%, 50%)"
    }
  ];

  return (
    <div>
      <div style={{height:'400px'}}>
        <ResponsiveBar
            data={data}
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
      </div>
      <div style={{height:'400px',marginTop:'40px'}}>
        <ResponsivePie
                data={data_pie}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
        />      
      </div>
    </div>  
  )
}

export default App;
