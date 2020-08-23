import {
  Muli_400Regular,
  Muli_700Bold,
  useFonts as _useFonts,
} from "@expo-google-fonts/muli";

// https://docs.expo.io/guides/using-custom-fonts/
// https://github.com/expo/google-fonts/tree/master/font-packages/muli

const useFonts = (): ReturnType<typeof _useFonts> =>
  _useFonts({
    Muli_400Regular,
    Muli_700Bold,
  });

export default useFonts;
