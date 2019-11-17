export const BASE_COLORS = {
  OFF_WHITE: '#e9eefc',
  WHITE: '#f5f5f5',
  BLACK: '#040714',
  GREY: '#5D6066',
  PRIMARY: {
    DARK: `#3b5898`,
    MID: `#2f78c1`,
    LIGHT: `#6db3fa`
  }
};

export const LINEAR_GRADIENTS = {
  WHITE: `linear-gradient(180deg, ${BASE_COLORS.OFF_WHITE}, ${BASE_COLORS.WHITE})`,
  GREY: `linear-gradient(180deg, ${BASE_COLORS.GREY}, ${BASE_COLORS.WHITE})`,
  PRIMARY: {
    ACTIVE: `linear-gradient(180deg, ${BASE_COLORS.PRIMARY.LIGHT}, ${BASE_COLORS.PRIMARY.MID})`,
    HOVER: `linear-gradient(180deg, ${BASE_COLORS.PRIMARY.MID}, ${BASE_COLORS.PRIMARY.LIGHT})`,
  }

};

export const PADDING = {
  MD: '15px',
};

export const BORDERS = {
  HIDDEN: '1px solid transparent',
  STANDARD: `1px solid ${BASE_COLORS.WHITE}`,
  PRIMARY: {
    DARK: `2px solid ${BASE_COLORS.PRIMARY.DARK}`,
    ACTIVE: `1px solid ${BASE_COLORS.PRIMARY.LIGHT}`,
    HOVER: `1px solid ${BASE_COLORS.PRIMARY.DARK}`
  },
  OUTLINED: {
    ACTIVE: `2px solid ${BASE_COLORS.PRIMARY.MID}`
  }
};

export const BORDER_RADIUS = {
  ROUNDED: '4px',
}

export const
  BOX_SHADOW = {
    INPUT: `0 0 5px ${BASE_COLORS.GREY} inset`,
    BUTTON: {
      PRIMARY: `3px 4px 0 0 ${BASE_COLORS.PRIMARY.DARK}`,
      TEXT: `0 1px 0 ${BASE_COLORS.PRIMARY.LIGHT}`
    }
  }
