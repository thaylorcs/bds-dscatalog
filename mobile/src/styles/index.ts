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
    regular: {
        color: colors.mediumGray,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
    },
    bold: {
        color: colors.darkGray,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 15,
    },
    primaryText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        textTransform: 'uppercase',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    currency: {
        color: colors.mediumGray,
        fontSize: 16,
        fontWeight: '400',
    },
    productPrice: {
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
    },
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
        justifyContent: 'space-around',
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
    textContainer: {
        paddingHorizontal: 20,
    },
    primaryButton: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        color: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: 290,
    },
    arrowContainer: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    scrollContainer: {
        padding: 20,
    },
    productCard: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: "space-around",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 10,
        width: '100%',
    },
    productDescription: {
        borderTopColor: colors.lightGray,
        alignItems: 'center',
        borderTopWidth: 1,
        padding: 20,
        width: '100%',
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 10,

    },
});

export { colors, theme, text };