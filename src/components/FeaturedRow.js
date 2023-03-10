import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row item-center justify-between px-4">
              <Text className="font-bold text-lg">{title}</Text>    
            <ArrowRightIcon color="#00CCBB" />
          </View>
          <Text className="text-xs text-gray-500 px-4">{description}</Text>
          <ScrollView
              horizontal
              contentContainerStyle={{
                  paddingHorizontal: 15,
              }}
              showsHorizontalScrollIndicator={false}
              className="pt-4"
          >
              {/* ResturantCards... */}
              <ResturantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! sushi"
                rating={0.9}
                genre="Japanese"
                address="no: 4 main street"
                short_description="This is test description"
                dishes={[]}
                long={20}
                lat={0}
              />
              <ResturantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! sushi"
                rating={0.9}
                genre="Japanese"
                address="no: 4 main street"
                short_description="This is test description"
                dishes={[]}
                long={20}
                lat={0}
              />
              <ResturantCard
                id={123}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! sushi"
                rating={0.9}
                genre="Japanese"
                address="no: 4 main street"
                short_description="This is test description"
                dishes={[]}
                long={20}
                lat={0}
              />
          </ScrollView>
    </View>
  )
}

export default FeaturedRow