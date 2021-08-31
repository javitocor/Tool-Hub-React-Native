/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import wordCall from '../helpers/APIword';
import generateKey from '../helpers/generateKey';
import HeaderList from '../components/HeaderList';
import RowSeparator from '../components/RowSeparator';
import WordDisplay from '../components/WordDisplay';
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

const WordDetail = (props) => {
  const {getWord, route} = props;
  const {resource, word} = route.params;
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        await getWord(resource, word);
        await setData(props.words[resource]);
        setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />
      {isPending ? (
        <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <FlatList 
                data={data}
                renderItem={({ item }) => (<WordDisplay item={item} onButtonPress={()=>null} />)}
                keyExtractor={item => generateKey(item)}
                ListHeaderComponent={<HeaderList category={resource} />}
                ItemSeparatorComponent={() => <RowSeparator />}
              />
            </View>
          )}
    </View>
  );
};

WordDetail.propTypes = {
  words: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    word: PropTypes.string,
    synonyms: PropTypes.array,
    antonyms: PropTypes.array,
    definitions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getWord: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  words: {
    error: state.words.error,
    word: state.words.word,
    definitions: state.words.definitions,
    synonyms: state.words.synonyms,
    antonyms: state.words.antonyms,
    pending: state.words.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getWord: wordCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WordDetail);