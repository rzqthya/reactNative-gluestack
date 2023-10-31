// import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const GButton = (props) => {
    return (
        <GluestackUIProvider config={config}>
            <Button p="15" action="secondary" onPress={props.onPress}>
                <ButtonText fontWeight="$medium">
                    {props.text}
                </ButtonText>
            </Button>
        </GluestackUIProvider>
    );
};

export default GButton;
