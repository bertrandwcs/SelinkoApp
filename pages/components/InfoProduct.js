import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { isEmpty } from "../../utils/isEmpty";

const InfoProduct = ({ data }) => {
  return (
    <View>
      {!isEmpty(data) && (
        <View>
          <Text style={styles.name}>{data.product.name}</Text>
          {data.product.datasheet.data.map((elem) => (
            <View style={styles.containerList} key={elem.label}>
              <Text>
                {elem.label} : {elem.value}
              </Text>
            </View>
          ))}
          <Text>ID : {data.product.id}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    height: 100,
    top: 50,
  },
  containerList: {
    height: 50,
  },
});

export default InfoProduct;
