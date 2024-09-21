import { Chat } from "@components/chat";
import { Home } from "@components/home";
import { ContentLayout } from "@components/layouts";
import { Matching } from "@components/matching";
import { useChat } from "@hooks/useChat";

export function AppContainer() {
    const { status, message, user } = useChat();

    function renderContent() {

        if (status !== "started" && user) {
            return <Matching message={message} />;
        }

        if (status === "started") {
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