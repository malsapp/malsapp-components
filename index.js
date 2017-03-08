import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';

import Default from './templates/Default'

function getProperty(object, string) {
  if (!string) {
    return null;
  }

  const arr = string.split('.');
  let prop = object;

  arr.forEach(key => (prop = prop && prop[key] && prop[key]));

  return prop;
}

const Annotation = (property, LoadingIndicator = Default) => Child => (props) => {
  const isLoading = getProperty(props, property);
  if (isLoading) {
    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>);
  }

  return (<Child {...props}/>);
};

Annotation.DEFAULT = Default;

export default Annotation
