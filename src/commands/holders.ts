import { InteractionResponseType } from 'slash-commands/dist/src/structures';

export async function handleHolders(
    req: InteractionRequest,
): Promise<InteractionResponse> {
    const apiUrl = `https://api.ethplorer.io/getAddressInfo/0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611?apiKey=freekey`;
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    }
    const response = await fetch(apiUrl, init);
    const responseBody = await response.json()

    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: `:diamondhands: Current holders count is **${responseBody.tokenInfo.holdersCount}**.`,
        },
    };
}
