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
import newsCall from '../helpers/APInews';
import generateKey from '../helpers/generateKey';
import HeaderList from '../components/HeaderList';
import RowSeparator from '../components/RowSeparator';
import NewDisplay from '../components/NewDisplay';
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

const NewsDetail = (props) => {
  const {getNews, route} = props;
  const {category, param} = route.params;
  const [isPending, setIsPending] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        await getNews(category, param);
        setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[param]);

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
                data={props.news.articles}
                renderItem={({ item }) => (<NewDisplay item={item} onButtonPress={()=>openLink(item.url)} />)}
                keyExtractor={item => generateKey(item)}
                ListHeaderComponent={<HeaderList category={`${category}-${param}`} />}
                ItemSeparatorComponent={() => <RowSeparator />}
              />
            </View>
          )}
    </View>
  );
};

NewsDetail.propTypes = {
  news: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    keyword: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getNews: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: {
    error: state.news.error,
    keyword: state.news.keyword,
    articles: state.news.articles,
    pending: state.news.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNews: newsCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);