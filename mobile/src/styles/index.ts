import { StyleSheet } from "react-native"

const colors = {
    black: "#000",
    bluePill: "#407bff",
    darkGray: "#263238",
    lightGray: "#f2f2f2",
    mediumGray: "#9e9e9e",
    primary: "#407bee",
    red: "#df5753",
    secondary: "#33569B",
    white: "#fff",
};

const text = StyleSheet.create({
    regular: {},
    bold: {},
});

const theme = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: '100%',
        width: '100%',
    },
    draw: {
        height: 225,
        width: 313,
    },
    textContainer: {},
    primaryButton: {},
});

export { colors, theme, text };