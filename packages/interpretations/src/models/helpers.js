import Interpretation from './interpretation';
import pick from 'lodash/fp/pick';
import { apiFetch } from '../util/api';
  
const interpretationsFields = [
    'id',
    'user[id,displayName,userCredentials[username]]',
    'created',
    'likes',
    'likedBy[id,displayName]',
    'text',
    'comments[id,text,created,user[id,displayName,userCredentials[username]]]',
];

const favoriteFields = [
    'id',
    'name',
    'href',
    'subscribed',
    'user[id,displayName]',
    'displayName',
    'description',
    'displayDescription',
    'created',
    'lastUpdated',
    'access',
    'publicAccess',
    'externalAccess',
    'userAccesses',
    'userGroupAccesses',
    `interpretations[${interpretationsFields.join(',')}]`,
];

export const getFavoriteWithInterpretations = (d2, type, id) => {
    const modelClass = d2.models[type];
    const api = d2.Api.getApi();
    const model$ = modelClass.get(id, {fields: favoriteFields.join(',')});
    const views$ = api.get(`dataStatistics/favorites/${id}`).then(json => json.views);

    return Promise.all([model$, views$])
        .then(([model, views]) => {
            const modelInterpretations = model.interpretations
                .map(attrs => new Interpretation(model, attrs));

            return Object.assign(model, {
                interpretations: modelInterpretations,
                favoriteViews: views,
                modelName: type,
            });
        });
};

export const setSubscription = (model, newSubscriptionValue) => {
    if (!model || !model.href) {
        return Promise.reject(new Error(`Attribute href not found in model`));
    } else {
        var path = model.href + "/" + "subscriber";
        var method = newSubscriptionValue ? "POST" : "DELETE";
        return apiFetch(path, method);
    }
};