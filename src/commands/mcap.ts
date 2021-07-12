import { InteractionResponseType } from 'slash-commands/dist/src/structures';
import { formatLargeNumber } from '../utils';

export async function handleMarketCap(
    req: InteractionRequest,
): Promise<InteractionResponse> {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/million?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    }

    let commandResponse;

    try {
        const response = await fetch(apiUrl, init);
        const responseBody = await response.json()
        const marketCapUsd = responseBody.market_data.market_cap.usd;

        commandResponse = `Current market cap is **$${formatLargeNumber(marketCapUsd)}**.`;
    } catch {
        commandResponse = `Something is wrong - try again a bit later.`;
    }

    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: commandResponse
        }
    };
}
