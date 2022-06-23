import { FlatList, ImageSourcePropType, View } from "react-native";
import { CategoryItem } from "./CategoryItem";

interface props {
  categories: { name: string; imageSource: ImageSourcePropType }[];
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Categories = ({ categories, term, setTerm }: props) => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              ImageSource={item.imageSource}
              index={index}
              active={term.toLowerCase() === item.name.toLowerCase()}
              handlePress={() => setTerm(item.name)}
            ></CategoryItem>
          );
        }}
        keyExtractor={({ name }) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};
