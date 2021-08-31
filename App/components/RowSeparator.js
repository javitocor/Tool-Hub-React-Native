import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.white,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginBottom: 15,
  },
});

const RowSeparator = () => <View style={styles.separator} />;

export default RowSeparator;