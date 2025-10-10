import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./preview";

function Root() {
    return (
        <SafeAreaProvider>
            <App />
        </SafeAreaProvider>
    );
}

registerRootComponent(Root);
