import React from 'react';
import {View, Modal, Image, Text} from 'react-native';
import {styles} from './styles';
import Btn from './Btn';

const ModalComponent = ({
  isVisible,
  toggleModal,
  text1,
  text2,
  text3,
  text4,
  modalaboutContainer,
  txtStyle1,
  txtStyle2,
  txtStyle3,
  txtStyle4,
  modalContainer,
  rectangle,
  bgTxt,
  lineImage,
  aboutImage,
  writeImage,
  line,
  about,
  write,
  bigRectangle,
  contentTxt,
  letsButton,
  letsButtonStyle,
  letsBtntxtStyle,
}) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        animationDuration={1500}
        onRequestClose={toggleModal}>
        <View style={modalContainer}>
          <View style={[rectangle, bigRectangle]}>
            {/* {imageData.map((image, index) => (
              <View key={index} style={[styles.imageContainer]}>
                <Image source={image.source} style={styles.icons} />
                </View>
            ))} */}

            <View style={[styles.imageContainer, lineImage]}>
              <Image source={line} style={styles.icons} />
            </View>
            <View style={[styles.imageContainer, aboutImage]}>
              <Image source={write} style={styles.icons} />
            </View>
            <View style={[styles.imageContainer, writeImage]}>
              <Image source={about} style={styles.icons} />
            </View>

            <View style={modalaboutContainer}>
              <Text style={txtStyle1}>{text1}</Text>
              <Text style={txtStyle2}>{text2}</Text>
            </View>
            <View style={bgTxt}>
              <Text style={txtStyle3}>{text3}</Text>
            </View>
            <View style={contentTxt}>
              <Text style={txtStyle4}>{text4}</Text>
            </View>
            <View style={letsButtonStyle}>
              {letsButton && (
                <Btn
                  label="Let's Do It"
                  onPress={() => {
                    console.log('Lets Do It');
                  }}
                  style={letsBtntxtStyle}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
