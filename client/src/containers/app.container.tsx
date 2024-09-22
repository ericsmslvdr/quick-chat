import { Chat } from "@components/chat";
import { Home } from "@components/home";
import { ContentLayout } from "@components/layouts";
import { Matching } from "@components/matching";
import { useChat } from "@hooks/useChat";

export function AppContainer() {
    const { status, message } = useChat();

    function renderContent() {

        if (status === "waiting" || status === "found" || status === "preparing") {
            return <Matching message={message} />;
        }

        if (status === "started" || status === 'disconnected') {
            return <Chat />
        }

        return <Home />
    }

    return (
        <ContentLayout>
            {renderContent()}
        </ContentLayout>
    );
}