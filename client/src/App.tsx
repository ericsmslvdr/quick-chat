import { AppContainer } from "@containers/app.container";
import { ChatProvider } from "@contexts/chat-provider";

function App() {
    return (
        <ChatProvider>
            <AppContainer />
        </ChatProvider>
    );
}

export default App;