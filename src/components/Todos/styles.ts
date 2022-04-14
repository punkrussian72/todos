const DIVIDER_COLOR = '#cacaca';
const DIVIDER_STYLE = 'solid';
const DIVIDER_WIDTH = '1px';

export const customStyles = {
  header: {
    style: { },
  },
  headRow: {
    style: {
      borderTopStyle: DIVIDER_STYLE,
      borderTopWidth: DIVIDER_WIDTH,
      borderTopColor: DIVIDER_COLOR,
      height: '30px',
      minHeight: '30px',
    },
  },
  headCells: {
    style: {
      '&:first-of-type': {
        borderLeftStyle: DIVIDER_STYLE,
        borderLeftWidth: DIVIDER_WIDTH,
        borderLeftColor: DIVIDER_COLOR,
      },
      borderRightStyle: DIVIDER_STYLE,
      borderRightWidth: DIVIDER_WIDTH,
      borderRightColor: DIVIDER_COLOR,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 900,
      backgroundColor: DIVIDER_COLOR,
    },
  },
  rows: {
    style: {
      '&:last-of-type': {
        borderBottomStyle: DIVIDER_STYLE,
        borderBottomWidth: DIVIDER_WIDTH,
        borderBottomColor: DIVIDER_COLOR,
      },
      minHeight: '30px',
    }
  },
  cells: {
    style: {
      '&:first-of-type': {
        borderLeftStyle: DIVIDER_STYLE,
        borderLeftWidth: DIVIDER_WIDTH,
        borderLeftColor: DIVIDER_COLOR,
      },
      borderRightStyle: DIVIDER_STYLE,
      borderRightWidth: DIVIDER_WIDTH,
      borderRightColor: DIVIDER_COLOR,
      fontSize: '14px',
    },
  },
};