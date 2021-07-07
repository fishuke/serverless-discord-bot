// todo: should this go into types
import { handleHolders } from './holders';

export {
    createOriginal,
    followup,
    editFollowup,
    deleteFollowup,
} from '../lib/endpoints';

import { handlePrice } from './price';

type complexCommand = (_: InteractionWithContext) => Promise<void>;
type simpleCommand = (_: InteractionRequest) => Promise<InteractionResponse>;

export const handlers: {
    [id: string]: complexCommand | simpleCommand;
} = {
    '860831571078283266': handlePrice,
    '862306068369244250': handleHolders,
};
