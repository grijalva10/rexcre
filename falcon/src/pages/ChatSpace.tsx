import { ChatInterface } from "../components/feature/chat"
import { ChannelProvider } from "../utils/channel/ChannelProvider"

type Props = {}

export const ChatSpace = (props: Props) => {
    console.log('chat_space')

    return (
        <ChannelProvider>
            <ChatInterface />
        </ChannelProvider>
    )
}