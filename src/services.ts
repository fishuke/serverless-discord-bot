export const publicKeys: { [id: string]: string } = {
    discord: (process.env.PUBLIC_KEY as string),
};

export const apiPrefix: { [id: string]: string } = {
    discord: 'https://discord.com/api/v8/webhooks',
};
