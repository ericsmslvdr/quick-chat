import { AppContainer } from "@containers/app.container";
import { ChatProvider } from "@providers/chat-provider";

function App() {
    return (
        <ChatProvider>
            <AppContainer />
        </ChatProvider>
    );
}

export default App;