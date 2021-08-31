/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Linking,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import historyCall from '../helpers/APIhistory';
import generateKey from '../helpers/generateKey';
import HeaderList from '../components/HeaderList';
import RowSeparator from '../components/RowSeparator';
import HistoryDisplay from '../components/HistoryDisplay';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: colors.grey,
  },
  waiting:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  content:{
    width: screen.width * 0.85,
  },
});

const HistoryDetail = (props) => {
  const {getHistory, route} = props;
  const {month, day, info} = route.params;
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        await getHistory(month, day);
        await setData(props.history[info.toLowerCase()]);
        setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);

  const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />
      {isPending ? (
        <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <FlatList 
                data={data}
                renderItem={({ item }) => (<HistoryDisplay key={generateKey(item.year)} item={item} onButtonPress={()=>openLink(item.links.link ? item.links.link : item.links[0].link)} />)}
                keyExtractor={item => generateKey(item)}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<HeaderList category={info} />}
                ItemSeparatorComponent={() => <RowSeparator />}
              />
            </View>
          )}
    </View>
  );
};

HistoryDetail.propTypes = {
  searches: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    day: PropTypes.string,
    events: PropTypes.array,
    births: PropTypes.array,
    deaths: PropTypes.array,
  }).isRequired,
  getHistory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  history: {
    error: state.history.error,
    day: state.history.day,
    births: state.history.births,
    events: state.history.events,
    deaths: state.history.deaths,
    pending: state.history.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getHistory: historyCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);