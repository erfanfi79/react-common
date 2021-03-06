import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment-jalaali';

import { toFarsiNumber } from '../../../common/utils';
import { colors } from '../../../common/torobStyles/colors';

moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

const DateAndSellersTag = ({ date, sellers, showDate }) => {
  const persianDate = moment(date, 'YY-MM-DD HH:mm:ss').format('jD jMMMM jYYYY');
  return (
    <span className={css(styles.dateSellerTagWrapper)}>
      {toFarsiNumber(showDate ? `${persianDate} / ${sellers} فروشنده` : `${sellers} فروشنده`)}
    </span>
  );
};

DateAndSellersTag.propTypes = {
  date: PropTypes.object,
  sellers: PropTypes.number,
  showDate: PropTypes.bool,
};

DateAndSellersTag.defaultProps = {
  date: undefined,
  sellers: 1,
  showDate: false,
};

const styles = StyleSheet.create({
  dateSellerTagWrapper: {
    fontSize: '14px',
    color: colors['ink50'],
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px',
  },
});

export default DateAndSellersTag;
