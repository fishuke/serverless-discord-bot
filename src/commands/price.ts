import { InteractionResponseType } from 'slash-commands/dist/src/structures';

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
    const response = await fetch(apiUrl, init);
    const responseBody = await response.json()

    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: `Current price is **$${responseBody[0].price}**.`,
        },
    };
}
