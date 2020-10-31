export const strict = false

export const state = () => ({

    chatList: [],
    lastChats: [],
    unseenConversation: [],
    chatLoading: false,
    activePerson: {},
    chatRoom: false,
    RoomUser: false,
    showCallingModal: false,
    isChatListChange: 0
})
export const getters = {

    unseenConversation(state) {
        return state.unseenConversation;
    },
    chatLoading(state) {
        return state.chatLoading;
    },
    getChatList(state) {
        return state.chatList;
    },
    getLastChats(state) {
        return state.lastChats;
    },
    getActivePerson(state) {
        return state.activePerson;
    },

    getChatRoom(state) {
        return state.chatRoom;
    },
    getRoomUser(state) {
        return state.RoomUser;
    },

    getShowCallingModal(state) {
        return state.showCallingModal;
    },
    isChatListChange(state) {
        return state.isChatListChange;
    }
}
export const mutations = {

    setActivePerson(state, data) {
        state.activePerson = data;
    },
    unseenConversation(state, data) {
        state.unseenConversation = data;
    },

    setChatLoading(state, data) {
        state.chatLoading = data;
    },

    setChatList(state, data) {
        state.chatList = data;
    },

    updateLastMessageToChatList(state, data) {
        for (let i of state.chatList) {
            console.log('i', i, 'data', data)
            // if (i.id == data.conversation_id) {
            //     i.chat.message = data.message
            //     break
            // }
        }
    },

    setLastChats(state, data) {
        state.lastChats = data;
    },

    pushIntoLastChats(state, data) {

        let sound = "/pull-out.mp3";
        let audio = new Audio(sound);
        audio.play();
        var tdata = _.clone(state.lastChats);
        tdata[data.index] = tdata[data.index]? tdata[data.index] : [];
        tdata[data.index].push(data.data);
        state.lastChats = tdata;
        
    },
    pushIntoLastChatsBackend(state, data) {

        if(state.activePerson.conversation_id && state.activePerson.conversation_id == data.data.conversation_id){
            let sound = "/pull-out.mp3";
            let audio = new Audio(sound);
            audio.play();

            var tdata = _.clone(state.lastChats);
            tdata[data.index] = tdata[data.index]? tdata[data.index] : [];
            tdata[data.index].push(data.data);
            state.lastChats = tdata;
        }
        else{
            let nIndex = state.unseenConversation.findIndex(d => d.conversation_id == data.data.conversation_id);
            let undata = _.clone(state.unseenConversation);
            if(nIndex == -1){
              let unob ={
                conversation_id:data.data.conversation_id,
                totalMsg:1
              }
              undata.push(unob);
            }
            else {
              undata[nIndex].totalMsg++;
            }
            state.unseenConversation = undata;
            console.log('state.unseenConversation',state.unseenConversation);
            state.isChatListChange++;
            
        }
    },

    setLastPushedIdOfChats(state, data) {
        let length = state.lastChats[data.index].length;
        state.lastChats[data.index][length - 1].id = data.data.id;
    },
    spliceLastPushedChats(state, data) {
        let length = state.lastChats[data.index].length;
        state.lastChats[data.index].splice(length-1,1);
    },

    setChatRoom(state, data) {
        state.chatRoom = data
    },
    setRoomUser(state, data) {
        state.RoomUser = data
    },

    setShowCallingModal(state, data) {
        state.ShowCallingModal = data
    }
}

export const actions = {

}
