export const BAR_STYLE = {
  correctBar: {
    data: { fill: '#56c499' },
    labels: {
      fontFamily: 'Spoqa Han Sans Neo',
      fontSize: '20px',
      fontWeight: 600,
      fill: '#56c499',
    },
  },
  incorrectBar: {
    data: { fill: '#cccccc' },
    labels: {
      fontFamily: 'Spoqa Han Sans Neo',
      fontSize: '20px',
      fontWeight: 600,
      fill: '#111111',
    },
  },
};

export const LINE_STYLE = {
  data: { stroke: '#cccccc' },
  parent: { border: '1px solid #cccccc' },
};

export const SCATTER_STYLE = {
  data: {
    fill: ({ datum }: any) => (datum.x === 1 ? '#cccccc' : '#ffffff'),
    stroke: '#cccccc',
    strokeWidth: ({ datum }: any) => (datum.x === 1 ? 0 : 3),
  },
};

export const AXIS_STYLE = {
  axis: { strokeWidth: 0 },
  tickLabels: { fontSize: '16px', fill: '#111111', fontWeight: 600, fontFamily: 'Spoqa Han Sans Neo' },
};
