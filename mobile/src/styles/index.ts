import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get('window').width;

const colors = {
    black: "#000",
    bluePill: "#407bff",
    borderGray: "#e1e1e1",
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
    goBackText: {
        color: colors.darkGray,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        textTransform: 'uppercase',

    },
    productDetailsName: {
        color: colors.darkGray,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    productDescription: {
        color: colors.mediumGray,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginTitle: {
        color: colors.darkGray,
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 50,
        textTransform: "uppercase",
    },
    logoutText: {
        color: colors.white,
    },
    addButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    deleteTxt: {
        color: colors.red,
        fontWeight: 'bold',
        textTransform: 'uppercase',

    },
    editText: {
        color: colors.mediumGray,
        fontWeight: 'bold',
        textTransform: 'uppercase',
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
    productImg: {
        height: 140,
        margin: 16,
        width: 140,
    },
    inputContainer: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        height: 60,
        justifyContent: "space-around",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 12.5,
        paddingVertical: 10,
        width: '100%',
    },
    searchInput: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.borderGray,
        height: 40,
        width: '90%',
    },
    //Product Details
    detailContainer: {
        backgroundColor: colors.white,
        padding: 20,
    },
    detailCard: {
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
        padding: 20,
        width: '90%',
    },
    goBackContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10,
        width: 290,
    },
    productImageContainer: {
        alignItems: 'center',
        borderColor: colors.lightGray,
        borderWidth: 1,
        width: '100%',
    },
    productImage: {
        height: 220,
        width: 220,
    },
    scrollTextContainer: {
        borderColor: colors.lightGray,
        borderRadius: 15,
        borderWidth: 0.5,
        marginVertical: 20,
        padding: 20,
    },
    //Login Page
    loginCard: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        justifyContent: 'center',
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
    form: {
        marginVertical: 10,
    },
    passwordGroup: {
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 25,
    },
    textInput: {
        borderColor: colors.mediumGray,
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        height: 50,
        padding: 10,
        width: 290,
    },
    toggle: {
        margin: -50,
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    deleteBtn: {
        alignItems: 'center',
        borderColor: colors.red,
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        margin: 10,
        width: '48%',
    },
    editBtn: {
        alignItems: 'center',
        borderColor: colors.mediumGray,
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        margin: 10,
        width: '48%',
    },
});

const nav = StyleSheet.create({
    leftText: {
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    drawer: {
        margin: 10,
    },
    options: {
        backgroundColor: colors.primary,
        height: 120,
        justifyContent: 'space-between',
        marginTop: 125,
        marginRight: -10,
        padding: 20,
        width: deviceWidth,
    },
    option: {
        paddingVertical: 5,
    },
    textOption: {
        color: colors.white,
        textTransform: 'uppercase',
    },
    textActive: {
        fontWeight: "bold",
    },
    logoutBtn: {
        alignItems: 'center',
        borderColor: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        marginRight: 20,
        width: 60,
    }
});

const tabBar = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flexDirection: "row",
        height: 80,
        justifyContent: 'space-around',
        width: deviceWidth,
    },
    pill: {
        color: colors.white,
        backgroundColor: colors.lightGray,
        borderRadius: 30,
        padding: 15,
    },
    pillActive: {
        backgroundColor: colors.primary,
    },
    pillText: {
        fontWeight: 'bold',
        color: colors.mediumGray,
    },
    pillTextActive: {
        color: colors.white,
    },
});

const admin = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        height: 50,
        margin: 10,
        width: '100%',
    },
});

export { colors, theme, text, nav, tabBar, admin };