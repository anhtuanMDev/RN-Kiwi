import {
  View,
  Image,
  ViewStyle,
  TouchableOpacity,
  Text,
  FlatList,
  ColorValue,
} from 'react-native';
import React, {useState} from 'react';
import {styles, font, Colors, components} from '../../customs/Styles';
import PagerView from 'react-native-pager-view';
import Tag from '../Others/Tag';

type Props = {
  name?: string;
  image?: any[];
  tag?: string[];
  deliveryFee?: string;
  bannerOnly?: boolean;
  rate?: number;
  rateAmounts?: number;
  time?: string;
  style?: ViewStyle | ViewStyle[];
  tint?: ColorValue;
  onPress?: () => void;
  coverPressable?: boolean;
  coverPress?: () => void;
};

const Big = (prop: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  let rates: string | number = prop?.rateAmounts || 0;

  if (prop?.rateAmounts) {
    switch (true) {
      case prop?.rateAmounts > 100:
        rates = '100+';
        break;
      case prop?.rateAmounts > 200:
        rates = '200+';
        break;
      case prop?.rateAmounts > 500:
        rates = '500+';
        break;
      case prop?.rateAmounts > 1000:
        rates = '999+';
        break;
      default:
        rates = prop?.rateAmounts;
        break;
    }
  }

  const handlePageScroll = (position: number) => {
    setCurrentPage(position);
  };

  const handlePageSelected = (position: number) => {
    setCurrentPage(position);
  };

  const renderIndicators = () => {
    const indicators = [];
    const totalPages = prop?.image?.length || 0;

    for (let i = 0; i < totalPages; i++) {
      const indicatorStyle =
        i === currentPage
          ? components.activeIndicator2
          : components.inactiveIndicator;
      indicators.push(
        <View key={i} style={[components.indicator, indicatorStyle]} />,
      );
    }

    return indicators;
  };

  return (
    <View
      style={[
        components.cardBig,
        {height: prop?.bannerOnly ? 185 : 285},
        prop?.style,
      ]}>
      <TouchableOpacity
        disabled={prop?.coverPressable || true}
        onPress={() => {
          prop?.coverPress && prop?.coverPress();
        }}>
        <PagerView
          onPageScroll={event => handlePageScroll(event.nativeEvent.position)}
          onPageSelected={event =>
            handlePageSelected(event.nativeEvent.position)
          }
          style={{width: 335, height: 185}}
          initialPage={0}>
          {prop?.image?.map((imageSource, index) => (
            <Image
              borderRadius={10}
              key={index}
              style={{width: '100%', height: '100%'}}
              source={imageSource}
              resizeMode="stretch"
            />
          ))}
        </PagerView>
      </TouchableOpacity>
      <View
        style={[
          components.indicatorContainer,
          {position: 'absolute', right: 20, top: 140},
        ]}>
        {renderIndicators()}
      </View>

      <TouchableOpacity
        onPress={() => {
          prop?.onPress && prop?.onPress();
        }}
        style={[
          {
            display: prop?.bannerOnly ? 'none' : 'flex',
          },
        ]}>
        <Text
          style={[
            font.subhead,
            {
              color: Colors.Main,
              fontSize: 20,
              marginBottom: 4,
              marginTop: 16,
            },
          ]}>
          {prop?.name || "McDonald's"}
        </Text>

        <View
          style={[
            {
              flexDirection: 'row',
              paddingRight: 10,
              alignItems: 'center',
              width: '80%',
            },
          ]}>
          <Text style={[font.body, {color: Colors.gray, fontWeight: '500'}]}>
            $$
          </Text>

          <FlatList
            horizontal
            data={prop?.tag}
            renderItem={({item}) => (
              <Tag font={[font.body]} dot={{marginHorizontal: 8}} name={item} />
            )}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={[
            {
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            },
          ]}>
          <Text style={[font.caption, {color: Colors.Main, fontWeight: '500'}]}>
            {prop?.rate || 4.5}
          </Text>

          <Image
            style={[{tintColor: prop?.tint || '#FFA832', marginHorizontal: 5}]}
            source={require('../../../assets/icon/24/rating.png')}
          />

          <Text style={[font.caption, {color: Colors.Main, fontWeight: '500'}]}>
            {rates} Rating
          </Text>

          <Image
            style={[{tintColor: Colors.gray, marginLeft: 15, marginRight: 5}]}
            source={require('../../../assets/icon/24/clock.png')}
          />

          <Text style={[font.caption, {color: Colors.Main, fontWeight: '500'}]}>
            {prop?.time || '25 min'}
          </Text>

          <Tag showIcon name={prop?.deliveryFee} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Big;
