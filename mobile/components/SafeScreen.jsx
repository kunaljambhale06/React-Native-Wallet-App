import { View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {COLORS} from "@/constants/colors";

const SafeScreen =({children}) => {//WE did this just to have all the content inside the safe screen.And due to this we are able to use<SafeScreeen>in _layout.jsx 
    const insets = useSafeAreaInsets();
  return (
    <View style = {{paddingTop: insets.top,  flex: 1, backgroundColor: COLORS.background}}>
      {children}
    </View>
  );
};

export default SafeScreen;