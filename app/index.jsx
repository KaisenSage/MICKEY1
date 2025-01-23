import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
    const { isLoading, isLoggedIn } = useGlobalContext();

    if(!isLoading && isLoggedIn) return <Redirect href="/home"/>

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1E2C" }}>
            {/* Change background color */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <Image
                    source={images.logo}
                    style={{
                        width: 130,
                        height: 84,
                        marginBottom: 20,
                    }}
                    resizeMode="contain"
                />

                {/* Cards Section */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 30,
                    }}
                >
                    <Image
                        source={images.cards} // Replace with appropriate card images
                        style={{
                            width: 240,
                            height: 240,
                            marginHorizontal: 10,
                            borderRadius: 10,
                        }}
                        resizeMode="cover"
                    />
                </View>

                {/* Text Section */}
                <View style={{ marginTop: 10, alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 24,
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Discover Endless{"\n"}
                        Possibilities with{" "}
                        <Text style={{ color: "#FFC107" }}>Aora</Text>
                    </Text>

                    <Image
                        source={images.path}
                        style={{
                            width: 136,
                            height: 15,
                            position: "absolute",
                            bottom: -8,
                            right: -8,
                        }}
                        resizeMode="contain"
                    />
                </View>

                {/* Description Text */}
                <Text
                    style={{
                        fontSize: 14,
                        color: "#FFFFFF", // Ensures the text color is white
                        marginTop: 20,
                        textAlign: "center",
                    }}
                >
                    Where Creativity Meets Innovation: Embark on a Journey of Limitless
                    Exploration with Aora
                </Text>

                <CustomButton
                    title="Continue with Email"
                    handlePress={() => router.push("/sign-in")}
                    containerStyles="w-full mt-7"
                />
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
}
