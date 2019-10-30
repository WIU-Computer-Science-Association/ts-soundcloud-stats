
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import SC from 'soundcloud';

export interface SoundcloudUser {
    username?: string;
    description?: string;
}

@Module({name: 'userSearchModule'})
export default class UserSearchModule extends VuexModule {
    public user: SoundcloudUser = {};
    public error = {};
    public errorDisplayed = false;
    public loading = false;

    get soundcloudUser() {
        return this.user;
    }
    get searchError() {
        return this.error;
    }
    get errorShown() {
        return this.errorDisplayed;
    }
    get searchLoading() {
        return this.loading;
    }
    //     soundcloud_user: state => state.soundcloud_user,
    //     search_error: state => state.search_error,
    //     user_search_loading: state => state.user_search_loading
    // },

    @Mutation
    public setSoundcloudUser(soundcloudUser: object) {
        this.user = soundcloudUser;
    }
    @Mutation
    public clearSearchError() {
        this.error = {};
        this.errorDisplayed = false;
    }
    @Mutation
    public setSearchError(searchError: object) {
        this.error = searchError;
        this.errorDisplayed = true;
    }
    @Mutation
    public startUserSearchLoading() {
        this.loading = true;
    }
    @Mutation
    public stopUserSearchLoading() {
        this.loading = false;
    }

    @Action({ commit: 'stopUserSearchLoading' })
    public async searchUser(username: string) {
        this.context.commit('startUserSearchLoading');
        try {
            const result = await SC.resolve(`https://soundcloud.com/${username}`);
            this.context.commit('clearSearchError');
            this.context.commit('setSoundcloudUser', result);
        } catch (err) {
            console.log('error with searching for user');
            this.context.commit('setSearchError', err);
        }
        this.context.commit('stopUserSearchLoading');
    }
}
