import React, { useState } from "react"
import { Image, StyleSheet, Text, View, FlatList } from "react-native"
import constants from "../utils/constants"

const slides = [
  {
    id: "1",
    image: require("../../assets/images/image1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../../assets/images/image2.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../../assets/images/image3.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const Slide = ({ item }) => {
  return (
    <View style={styles.slider}>
      <Image
        style={styles.sliderImage}
        source={item.image}
        resizeMode="contain"
      />
      <Text style={styles.sliderTitle}>{item.title}</Text>
      <Text style={styles.sliderSubtitle}>{item.subtitle}</Text>
    </View>
  )
}
const LoginScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const updateCurrentSlide = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / constants.width)
    setCurrentSlide(currentIndex)
  }
  const SlideFooter = () => {
    return (
      <View
        style={{
          height: constants.height * 0.05,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((item, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                currentSlide == i && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
      </View>
    )
  }
  return (
    <View style={styles.Container}>
      <View style={styles.slideContainer}>
        <FlatList
          pagingEnabled
          data={slides}
          contentContainerStyle={{ height: constants.height * 0.75 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
          onMomentumScrollEnd={updateCurrentSlide}
        />
        <SlideFooter />
      </View>
      <View style={styles.btnContainer}>
        <Image
          source={require("../../assets/images/google.png")}
          style={styles.google}
        />
        <Text style={styles.btn}>Sign up with Google</Text>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: constants.colors.black,
    // justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: constants.colors.white,
    alignSelf: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: constants.colors.lightBlack,
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
  },
  google: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  activeIndicator: {
    backgroundColor: constants.colors.white,
    width: 25,
  },
  slider: {
    alignItems: "center",
  },
  slideContainer: {
    height: "75%",
  },
  sliderImage: {
    width: constants.width,
    height: "65%",
  },
  sliderTitle: {
    color: constants.colors.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  sliderSubtitle: {
    color: constants.colors.white,
    fontSize: 13,
    marginTop: 20,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
})
