import { InteractionResponseType } from 'slash-commands/dist/src/structures';
import { formatPercentageChange } from '../utils';

export async function handlePrice(
    req: InteractionRequest,
): Promise<InteractionResponse> {
    // noinspection TypeScriptUnresolvedVariable
    const apiUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_TOKEN}&ids=MM4`;
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    }
    let commandResponse;
    try {
        const response = await fetch(apiUrl, init);
        const responseBody = await response.json();
        const priceChange = responseBody[0]['1d'].price_change_pct;
        commandResponse = `:coin: Current price is **$${parseFloat(responseBody[0].price).toFixed(4)}** (${formatPercentageChange(priceChange)}%).`;
    } catch {
        commandResponse = `Something is wrong - try again a bit later.`;
    }
    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: commandResponse
        },
    };
}
