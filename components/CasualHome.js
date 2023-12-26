import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import PropTypes from 'deprecated-react-native-prop-types';



const CasualHome = () => {
    const images = [
        "https://pixnio.com/free-images/2023/06/28/2023-06-28-14-23-33-960x960.jpg",
        "https://pixnio.com/free-images/2023/06/28/2023-06-28-14-23-26-960x960.jpg",
        "https://pixnio.com/free-images/2022/06/02/2022-06-02-11-04-19-1152x768.jpg",
      ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{

            borderRadius:16,
            width:"94%",
            marginTop:10,
            marginLeft:10
        }}
      />
    </View>
  )
}

export default CasualHome

const styles = StyleSheet.create({})