export const filterLinkReducer = (state = [
    { filterName: "Show All", active: true },
    { filterName: "Completed", active: false },
    { filterName: "Pending", active: false }
], action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "FILTER_CHANGE":
            state = state.map((filterObj) => {
                let tempFilterObj = { ...filterObj };
                if (tempFilterObj.filterName === action.filterName) {
                    tempFilterObj.active = true;
                } else {
                    tempFilterObj.active = false;
                }
                return tempFilterObj;
            });
            break;
    }
    return state;
}